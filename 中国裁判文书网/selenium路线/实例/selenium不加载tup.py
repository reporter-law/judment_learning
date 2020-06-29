"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import time
import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
import time
from selenium.webdriver.chrome.options import Options



def start_logger():
    """日志初始化设置、文件名（时间）、DEBUG为调试级别(级别导致输出内容的不同）、日志的记录格式、日期格式"""

    logging.basicConfig(  #filename='daily_report_error_%s.log' %

        #datetime.strftime(datetime.now(), '%m%d%Y_%H%M%S'),

        level=logging.DEBUG,
        format='%(asctime)s %(message)s',
        datefmt='%m-%d %H:%M:%S')


from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time
import random

options = Options()

# 禁止图片和css加载
prefs = {"profile.managed_default_content_settings.images": 2, 'permissions.default.stylesheet': 2}
options.add_experimental_option("prefs", prefs)

browser = webdriver.Chrome(chrome_options=options)#firef不行

browser.get('https://www.baidu.com')
wait = WebDriverWait(browser, 20)
send = wait.until(
        EC.presence_of_element_located((By.XPATH, '//*[@id="_view_1540966814000"]/div/div[1]/div[2]/input')))
send.send_keys('认罪认罚')
button = wait.until(EC.presence_of_element_located((By.XPATH, '//*[@id="_view_1540966814000"]/div/div[1]/div[3]')))
button.click()

