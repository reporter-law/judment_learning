"""程序说明"""

# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import logging
import math
import time
import pyautogui
from selenium import webdriver
from selenium.webdriver import FirefoxProfile
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait


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
def selenium():
    """网页获取"""
    # 无图
    profile = FirefoxProfile()
    profile.set_preference('browser.migration.version', 9001)
    profile.set_preference('permissions.default.image', 2)

    """网页获取"""
    browser = webdriver.Firefox(profile)
    try:

        browser.get('http://wenshu.court.gov.cn')
        wait = WebDriverWait(browser, 40)
        send = wait.until(
            EC.presence_of_element_located((By.XPATH, '//*[@id="_view_1540966814000"]/div/div[1]/div[2]/input')))
        send.send_keys('数罪')

        button = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="_view_1540966814000"]/div/div[1]/div['
                                                                  '3]')))
        button.click()

        try:
            """关键字"""
            click1 = wait.until(EC.presence_of_element_located(
                (By.XPATH, '//div[@class="search-middle"]/input')))
            click1.clear()
            click1.send_keys("贪污贿赂罪")
            button1 = wait.until( EC.element_to_be_clickable((By.XPATH, '//div[@class="search-rightBtn search-click"]')))
            button1.click()
            # logging.info('运行至关键字输入处。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。')
            click1 = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="_view_1545034775000"]/div/div[1]/div[1]')))
            click1.click()

            """
            优化为：
            发送country：高级检索
            """

            send1 = wait.until(EC.presence_of_element_located(
                (By.XPATH, '//*[@id="s2"]')))  # //div[@class ="search-wrapper clearfix"]/div[@class =
            # "search-middle"]/input全文输入
            send1.send_keys("2019")
            button_1 = wait.until(
                EC.element_to_be_clickable((By.XPATH, '//*[@id="searchBtn"]')))
            button_1.click()
            # logging.info('运行至发送country处。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。')
            # time.sleep(1)

            """文书数量：15"""
            button_ = wait.until(EC.presence_of_element_located((By.XPATH, '//div[@class="left_7_3"]/div/select')))
            button_.click()
            # time.sleep(1)
            button_ = wait.until(
                EC.element_to_be_clickable((By.XPATH, '//div[@class="left_7_3"]/div/select/option[3]')))
            button_.click()
        except:
            pass
    except:
        pass


    send = wait.until(EC.element_to_be_clickable((By.XPATH, "//*[@id='qbValue']")))
    send.clear()
    send.sendkeys("认罪认罚")
    time.sleep(100000)
    """文书数量：15"""
    button_ = wait.until(EC.presence_of_element_located((By.XPATH, '//div[@class="left_7_3"]/div/select')))
    button_.click()
    #time.sleep(1)
    button_ = wait.until(
                EC.presence_of_element_located((By.XPATH, '//div[@class="left_7_3"]/div/select/option[3]')))
    button_.click()

    """目的：减少遍历次数，进行页数遍历"""
    time.sleep(1)

    condition = browser.find_element_by_xpath('//div[@class="LM_con clearfix"]/div[@class="fr '
                                                      'con_right"]/span')
    print(condition.text)  # 不能直接//text()原因不明
    conditions = math.ceil(int(condition.text) / 15)  # 最长12，最短6
    if int(conditions) > 40:#condition本身已经除了15

        for index in range(conditions):
            logging.info('运行至遍历处。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。')
            """由于不明原因而需要两次移动"""
            try:
                        # 确保点击有效,回到上方
                pyautogui.scroll(10000000)
                '''全选的点击'''

                click_1 = wait.until(
                            EC.presence_of_element_located(
                                (By.XPATH, '//div[@class="LM_tool clearfix"]/div[4]/a[1]/label')))
                # time.sleep(1)
                click_1.click()

                '''批量下载的点击'''
                click_2 = wait.until(
                            EC.presence_of_element_located((By.XPATH, '//html/body/div/div[4]/div[2]//div['
                                                                      '@class="LM_tool clearfix"]/div[4]/a[3]')))
                click_2.click()
                """弹出框确认点击"""
                pyautogui.moveTo(505, 410)
                pyautogui.click()
                pyautogui.moveTo(765, 465)
                pyautogui.click()

                print('第%d页下载成功============================================' % index)

                browser.execute_script('window.scrollTo(0,document.body.scrollHeight)')

                pyautogui.scroll(-10000000)
                button_ = wait.until(
                            EC.presence_of_element_located((By.XPATH, '//div[@class="left_7_3"]/a[last()]')))
                button_.click()
                time.sleep(1)
            except Exception as e:
                print(e)

selenium()




