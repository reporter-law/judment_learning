"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import time
import logging
import execjs

def start_logger():
    """日志初始化设置、文件名（时间）、DEBUG为调试级别(级别导致输出内容的不同）、日志的记录格式、日期格式"""

    logging.basicConfig(  #filename='daily_report_error_%s.log' %

        #datetime.strftime(datetime.now(), '%m%d%Y_%H%M%S'),

        level=logging.DEBUG,
        format='%(asctime)s %(message)s',
        datefmt='%m-%d %H:%M:%S')

def docid():
    """docid解密"""
    with open('J:\\PyCharm项目\\项目\\中国裁判文书网\\requests路线\\js文件\\strToBinary.js', encoding='utf-8') as f:
        jsdata_1 = f.read()
    js_1 = execjs.compile(jsdata_1, cwd=r"C:\\Users\\Administrator\\node_modules")
    docid = js_1.call('docid', 24)
    logging.info(docid)
    return docid


#print(docid())
def get_pageid():
    """docid"""
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
print(get_pageid())