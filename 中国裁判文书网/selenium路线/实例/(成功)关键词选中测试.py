"""程序说明"""
import logging
import math

import pyautogui
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
import time

#from datetime import datetime

logging.disable(logging.DEBUG)
def start_logger():
    """日志初始化设置、文件名（时间）、DEBUG为调试级别(级别导致输出内容的不同）、日志的记录格式、日期格式"""

    logging.basicConfig(  #filename='daily_report_error_%s.log' %

        #datetime.strftime(datetime.now(), '%m%d%Y_%H%M%S'),

        level=logging.DEBUG,
        format='%(asctime)s %(message)s',
        datefmt='%m-%d %H:%M:%S')
start_logger()


def selenium(number):
    """尝试遍历"""
    browser = webdriver.Firefox()

    """网页获取"""
    browser.get('http://wenshu.court.gov.cn/website/wenshu/181217BMTKHNT2W0/index.html?pageId=0a8bea45ec529d8391dd57f1a421ae4e&s21=%E8%AE%A4%E7%BD%AA%E8%AE%A4%E7%BD%9A')
    wait = WebDriverWait(browser,20)


    """进行内部遍历获取，通过关键字进行限定"""
    keywords = wait.until(EC.presence_of_element_located((By.XPATH, '//*[@id="j3_%d_anchor"]'%number)))
    print(keywords)
    keywords.click()
    browser.close()





"""函数运行"""

for number in range(1,36):
    selenium(number)

