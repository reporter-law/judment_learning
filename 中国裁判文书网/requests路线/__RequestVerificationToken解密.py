"""背景要求"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import time
import logging
import execjs

#logging.disable(logging.DEBUG)
def start_logger():
    """日志初始化设置、文件名（时间）、DEBUG为调试级别(级别导致输出内容的不同）、日志的记录格式、日期格式"""

    logging.basicConfig(#filename='daily_report_error_%s.log' %

                        #datetime.strftime(datetime.now(), '%m%d%Y_%H%M%S'),

                        level=logging.DEBUG,
                        format='%(asctime)s %(message)s',
                        datefmt='%m-%d %H:%M:%S')
def __RequestVerificationToken():
    """cipher参数解密"""
    start_logger()
    with open('J:\\PyCharm项目\\项目\\中国裁判文书网\\requests路线\\cipher.js', encoding='utf-8') as f:
        jsdata_1 = f.read()
    js_1 = execjs.compile(jsdata_1, cwd=r"C:\\Users\\Administrator\\node_modules")
    __RequestVerificationToken = js_1.call('random',24)
    return __RequestVerificationToken
logging.debug(__RequestVerificationToken())