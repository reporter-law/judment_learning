# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import time
import logging
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import pyautogui
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
import time

from selenium.webdriver import ActionChains

"""初始设置，进入具体下载页面"""
"""firefox不会空白，chrome会空白"""
ops = Options()

browser = webdriver.Chrome()
#browser.implicitly_wait(5)
browser.get('http://wenshu.court.gov.cn')
wait = WebDriverWait(browser,20)
send = wait.until(EC.presence_of_element_located((By.XPATH,'//*[@id="_view_1540966814000"]/div/div[1]/div[2]/input')))
"""选择器要选对，之前是xpath"""
send.send_keys('认罪认罚')
button = wait.until(EC.presence_of_element_located((By.XPATH,'//*[@id="_view_1540966814000"]/div/div[1]/div[3]')))
button.click()
browser.implicitly_wait(5)
button = wait.until(EC.presence_of_element_located((By.XPATH,'//*[@id="j4_1_anchor"]')))
button.click()
browser.implicitly_wait(5)
button = wait.until(EC.presence_of_element_located((By.XPATH,'//*[@id="02_anchor"]')))
button.click()
button = wait.until(EC.presence_of_element_located((By.XPATH,'//*[@id="I00_anchor"]')))
button.click()

#browser.execute_script('window.scrollTo(0,document.body.scrollHeight)')
#print('移动到最后')


button = wait.until(EC.presence_of_element_located((By.XPATH,'//*[@id="_view_1545184311000"]/div[8]/div/select')))
button.click()
button = wait.until(EC.presence_of_element_located((By.XPATH,'//*[@id="_view_1545184311000"]/div[8]/div/select/option[3]')))
button.click()
time.sleep(1)
browser.implicitly_wait(5)
#button = wait.until(EC.presence_of_element_located((By.XPATH,'/html/body/div/div[4]/div[1]/diy:lawyee[4]/div/div[
# 1]/span')))
#button.click()
button = wait.until(EC.presence_of_element_located((By.XPATH,'/html/body/div/div[4]/div[1]/diy:lawyee[4]/div/div[2]/ul/li/i')))
button.click()
time.sleep(1)


def get_page(index):
    """由于不明原因而需要两次移动"""
    #index = 0

    if index >=1:
        browser.implicitly_wait(10)
        button = wait.until(EC.presence_of_element_located((By.XPATH, '/html/body/div/div[4]/div[@class="LM_right item_table"]//div[@class="left_7_3"]/a[8]')))
        #pyautogui.moveTo(950, 500)
        #pyautogui.click()
        button.click()


        "限定条件"
        click__ = wait.until(EC.presence_of_element_located((By.XPATH, '/html/body/div/div[4]/div[1]/diy:lawyee['
                                                                       '4]/div/div[2]/ul/li/ul/li[%d]' % index)))
        click__.click()

        '''全选的点击'''
        browser.implicitly_wait(10)
        click_1 = wait.until(EC.presence_of_element_located((By.XPATH,'//html/body/div/div[4]/div[2]//div['
                                                                      '@class="LM_tool clearfix"]/div[4]/a[1]/label')))
        click_1.click()
        click_1.click()
        click_1.click()



        '''批量下载的点击'''
        click_2 = wait.until(EC.presence_of_element_located((By.XPATH, '//html/body/div/div[4]/div[2]//div['
                                                                       '@class="LM_tool clearfix"]/div[4]/a[3]')))
        browser.implicitly_wait(10)

        click_2.click()
        click_2.click()
        click_2.click()
        pyautogui.moveTo(505, 410)
        pyautogui.click()
        pyautogui.moveTo(765, 465)
        pyautogui.click()
        #取消
        pyautogui.moveTo(840, 465)
        pyautogui.click()
        pyautogui.moveTo(840, 465)
        pyautogui.click()
        print('第%d页下载成功============================================' % index)
    else:

        '''全选的点击'''

        click__ = wait.until(EC.presence_of_element_located((By.XPATH, '/html/body/div/div[4]/div[1]/diy:lawyee['
                                                                       '4]/div/div[2]/ul/li/ul/li[%d]' % index)))

        click__.click()
        click_1 = wait.until(EC.presence_of_element_located((By.XPATH, '//html/body/div/div[4]/div[2]/diy:lawyee['
                                                                       '2]/div[2]/div[4]/a[1]/label')))

        click_1.click()
        '''批量下载的点击'''
        click_2 = wait.until(EC.presence_of_element_located((By.XPATH, '//html/body/div/div[4]/div[2]//div['
                                                                       '@class="LM_tool clearfix"]/div[4]/a[3]')))

        click_2.click()
        pyautogui.moveTo(505, 410)
        pyautogui.click()
        pyautogui.moveTo(765, 465)
        pyautogui.click()








def main():
    """主函数遍历页数"""
    for index in range(2000):
        get_page(index)
        time.sleep(4)
    browser.close()
    browser.close()
main()