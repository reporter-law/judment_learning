
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import requests
import logging
import execjs
from 项目.中国裁判文书网.requests路线.ciphertext解密 import cipher
from 项目.中国裁判文书网.requests路线.__RequestVerificationToken解密 import __RequestVerificationToken as res

#logging.disable(logging.INFO)
def start_logger():
    """日志初始化设置、文件名（时间）、DEBUG为调试级别(级别导致输出内容的不同）、日志的记录格式、日期格式"""

    logging.basicConfig(  # filename='daily_report_error_%s.log' %

        # datetime.strftime(datetime.now(), '%m%d%Y_%H%M%S'),#如果指定就输出到文件，否则输出到控制台

        level=logging.DEBUG,
        format='%(asctime)s %(message)s',
        datefmt='%m-%d %H:%M:%S')
def get_pageid():
    """获取文书id"""
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


def requests_page():
    """
    主请求
    """
    url = 'http://wenshu.court.gov.cn/website/wenshu/181217BMTKHNT2W0/index.html?'
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) '
                             'Chrome/78.0.3904.108 Safari/537.36',}
    start_logger()
    index = 0
    parms = {'pageId': get_pageid(),
        's8': '02',}
    form = {
        'sortFields': 's50:desc',
        'pageNum': 1,
        'groupFields': 's45;s11;s4;s33;s42;s8;s6;s44',
        'ciphertext':cipher(),
        'queryCondition': '[{"key":"s8","value":"02"}]',
        'cfg': 'com.lawyee.judge.dc.parse.dto.SearchDataDsoDTO@queryDoc',
        '__RequestVerificationToken': res(),#这个不知道正不正确，就是random()返回的内容
    }


    r= requests.post(url,headers=headers,data=form,params = parms)#params是加载到url中，而data而是form表单数据
    r.encoding = 'gbk'
    if r.status_code == 200:
        r.encoding = r.apparent_encoding
        print('主文内容' + '\n' ,r.text)
    else:
        print('失败-------------------------------------')
        requests_page()


requests_page()
#参数一：pageId=4de2d2c8211b505f529c5d71a6c4fc0a&s8=02
#参数二：s8: 02