"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import time
import logging
import math


def start_logger():
    """日志初始化设置、文件名（时间）、DEBUG为调试级别(级别导致输出内容的不同）、日志的记录格式、日期格式"""

    logging.basicConfig(  #filename='daily_report_error_%s.log' %

        #datetime.strftime(datetime.now(), '%m%d%Y_%H%M%S'),

        level=logging.DEBUG,
        format='%(asctime)s %(message)s',
        datefmt='%m-%d %H:%M:%S')

def chufa():
    """测试除法"""
    start_logger()
    """精确除法"""
    a = 95 / 15
    logging.debug(a)
    b = 95 % 15
    logging.debug(b)
    """向下取整"""
    c = 95 // 15
    logging.debug(c)

    """向上取整"""
    logging.debug(math.ceil(a))
chufa()