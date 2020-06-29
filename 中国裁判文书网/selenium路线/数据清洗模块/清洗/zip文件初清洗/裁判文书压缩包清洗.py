"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:

import logging
import os


def start_logger():
    """日志初始化设置、文件名（时间）、DEBUG为调试级别(级别导致输出内容的不同）、日志的记录格式、日期格式"""

    logging.basicConfig(  #filename='daily_report_error_%s.log' %

        #datetime.strftime(datetime.now(), '%m%d%Y_%H%M%S'),

        level=logging.DEBUG,
        format='%(asctime)s %(message)s',
        datefmt='%m-%d %H:%M:%S')


def set_600():
    """清洗重复数据"""
    start_logger()
    dict_ = {}
    path = "I:\\360下载\\firefox"
    """读取zip列表"""
    file_list = os.listdir(path)
    logging.info(len(file_list))
    logging.info(len(set(file_list)))
    for i in file_list:
        if i in dict_:
            dict_[i] += 1
        else:
            dict_[i] = 1
    #logging.warning(dict_)
    freq = sorted(dict_.items(), key=lambda x: x[1], reverse=True)
    logging.warning(freq)
    """清洗输出"""
    with open('zip清洗前后.txt', 'a+', encoding='utf-8')as file:
        file.write(str(dict_))


set_600()