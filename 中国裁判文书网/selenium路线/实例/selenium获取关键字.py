"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import time
import logging
import re
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from selenium import webdriver


def start_logger():
    """日志初始化设置、文件名（时间）、DEBUG为调试级别(级别导致输出内容的不同）、日志的记录格式、日期格式"""

    logging.basicConfig(  #filename='daily_report_error_%s.log' %

        #datetime.strftime(datetime.now(), '%m%d%Y_%H%M%S'),

        level=logging.DEBUG,
        format='%(asctime)s %(message)s',
        datefmt='%m-%d %H:%M:%S')
start_logger()
browser = webdriver.Firefox()
browser.get(
    'http://wenshu.court.gov.cn/website/wenshu/181217BMTKHNT2W0/index.html?pageId=0a8bea45ec529d8391dd57f1a421ae4e&s21=%E8%AE%A4%E7%BD%AA%E8%AE%A4%E7%BD%9A')
contents = browser.find_element_by_xpath('//div[@class ="treeItem"]')
print(contents.text)


