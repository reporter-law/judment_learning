"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import time
import logging
import re
import pprint


def start_logger():
    """日志初始化设置、文件名（时间）、DEBUG为调试级别(级别导致输出内容的不同）、日志的记录格式、日期格式"""

    logging.basicConfig(  #filename='daily_report_error_%s.log' %

        #datetime.strftime(datetime.now(), '%m%d%Y_%H%M%S'),

        level=logging.DEBUG,
        format='%(asctime)s %(message)s',
        datefmt='%m-%d %H:%M:%S')
try:
    start_logger()
    lis = []
    path = '/数据清洗模块/第二次超过600页.txt'
    with open(path, 'r', encoding='utf-8')as f:
        contents = f.readlines()
        print(len(contents))


        for i in contents:
            i_ = (i[21:56])
            # print(i_)
            """正则内容提取"""
            pattern = re.compile("区域为：(.*?)，其数量为")
            country = re.search(pattern, i_).group(1)
            logging.info(country)
            lis.append(str(country))
except:
    pass

print('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
logging.info(lis)
list_1 = list(set(lis))
logging.info(len(lis))
logging.info(len(list_1))
logging.info(list_1)

with open('清洗过后的超过600条.txt', 'a+', encoding='utf-8')as file:
    for i in list_1:
        file.write(i + '\n')
        print('写入成功')

