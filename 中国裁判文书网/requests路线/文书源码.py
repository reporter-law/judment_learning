"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import time
import logging


def start_logger():
    """日志初始化设置、文件名（时间）、DEBUG为调试级别(级别导致输出内容的不同）、日志的记录格式、日期格式"""

    logging.basicConfig(  #filename='daily_report_error_%s.log' %

        #datetime.strftime(datetime.now(), '%m%d%Y_%H%M%S'),

        level=logging.DEBUG,
        format='%(asctime)s %(message)s',
        datefmt='%m-%d %H:%M:%S')
import requests
import time
import execjs
import base64
import json
from pprint import pprint
from Cryptodome.Cipher import DES3
from Cryptodome.Util.Padding import unpad, pad
"""
2019年9月份文书网spider更新，简单看了下文书网更新过后的加密方式，整体比以前简单不少，
总结起来大概就是ciphertext这个参数是变化的，其他的基本上不会改变，传入data获取数据后，会有一个
DES3解密，其他的好像没什么难点（有可能没遇到坑），就大概写个逻辑脚本，需要完善
"""

# ----------------------------------自定义函数-------------------------------------------
start_logger()
# 获取ciphertext参数
def get_cipher():
    with open ("J:\\PyCharm项目\\项目\\中国裁判文书网\\requests路线\\cipher.js",encoding='utf-8') as f:
        js = f.read()
    ctx =execjs.compile(js, cwd=r"C:\\Users\\Administrator\\node_modules")
    cipher = ctx.call("_cipher")
    return cipher

# 获取DES解密后的返回值
def get_result(result,secretKey,date):
    des3 = DES3.new(key=secretKey.encode(), mode=DES3.MODE_CBC, iv=date.encode())
    decrypted_data = des3.decrypt(base64.b64decode(result))
    plain_text = unpad(decrypted_data, DES3.block_size).decode()
    return plain_text

# 获取__RequestVerificationToken参数
def get_token():
    js = """ function random(size){
            	var str = "",
            	arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            	for(var i=0; i<size; i++){
            		str += arr[Math.round(Math.random() * (arr.length-1))];
            	}
            	return str;
            }
    """
    ctx = execjs.compile(js)
    result = ctx.call("random", "24")
    return result

# 获取pageid
def get_pageid():
    js = """function happy() {
                    var guid = "";
                    for (var i = 1; i <= 32; i++) {
                        var n = Math.floor(Math.random() * 16.0).toString(16);
                        guid += n;
                        // if ((i == 8) || (i == 12) || (i == 16) || (i == 20)) guid +=
                        // "-";
                    }
                    return guid;
                }"""
    ctx = execjs.compile(js)
    pageid = ctx.call("happy")
    return pageid

#-------------------------------自定义函数结束-----------------------------------------


class wenshu(object):
    def __init__(self):
        self.session = requests.Session()
        self.headers = {
            "Cookie":"SESSION=f25ce583-7609-43ba-bb12-a0f3cdb15515",
            "Host":"wenshu.court.gov.cn",
            "Origin":"http://wenshu.court.gov.cn",
            "User-Agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36",
        }

    def get_docid(self):
        """文书列表页"""
        url = "http://wenshu.court.gov.cn/website/parse/rest.q4w"
        data = {
            "s8": "02",
            "pageId": "%s" % get_pageid(),
            "sortFields": "s50:desc",  # 按照法院层级降序排列
            "ciphertext": "%s" % get_cipher(),
            "pageNum": "1",
            "pageSize": "15",
            "queryCondition": '[{"key":"s8","value":"02"}]',  # 这边可以自定义选择，04表示行政案件
            "cfg": "com.lawyee.judge.dc.parse.dto.SearchDataDsoDTO@queryDoc",
            "__RequestVerificationToken": "%s" % get_token()
        }
        response = self.session.post(url, data=data,headers=self.headers)
        logging.debug(response.text)
        json_value = json.loads(response.text)
        secretKey = json_value["secretKey"]
        result = json_value["result"]
        data = json.loads(get_result(result, secretKey, time.strftime("%Y%m%d")))
        for key in data["queryResult"]["resultList"]:
            rowkey = key["rowkey"]
            self.detail_page(rowkey)

    def detail_page(self,docid):
        """文书详情页"""
        url = "http://wenshu.court.gov.cn/website/parse/rest.q4w"
        data = {
            "docId": "%s" % docid,
            "ciphertext": get_cipher(),
            "cfg": "com.lawyee.judge.dc.parse.dto.SearchDataDsoDTO@docInfoSearch",
            "__RequestVerificationToken": "%s" % get_token(),
        }

        response = self.session.post(url, data=data,headers=self.headers)
        json_value = json.loads(response.text)
        secretKey = json_value["secretKey"]
        result = json_value["result"]
        data = json.loads(get_result(result, secretKey, time.strftime("%Y%m%d")))
        pprint(data)


if __name__ == '__main__':
    demo = wenshu()
    demo.detail_page(get_pageid())
