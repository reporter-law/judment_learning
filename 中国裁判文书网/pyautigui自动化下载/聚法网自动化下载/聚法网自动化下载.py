# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import time
import logging
import pyautogui

def law_download(number):
    """自动下载，需要进入网页"""
    #批量下载进入
    pyautogui.moveTo(605, 330)#有保存密码页面
    time.sleep(1)
    pyautogui.click()

    #下载范围
    time.sleep(1)
    pyautogui.moveTo(480, 370)
    time.sleep(1)
    pyautogui.click()

    """模拟删除与输入"""
    pyautogui.moveTo(600, 370)
    pyautogui.click()
    pyautogui.press('backspace')
    pyautogui.typewrite(message='%d' % number)
    pyautogui.moveTo(750, 370)
    pyautogui.click()
    pyautogui.press('backspace')
    pyautogui.press('backspace')
    pyautogui.press('backspace')
    pyautogui.typewrite(message='%d' % int(number+100))


    """下载内容选择"""
    pyautogui.moveTo(545, 450)
    pyautogui.click()
    pyautogui.moveTo(615, 450)
    pyautogui.click()
    pyautogui.moveTo(680, 450)
    pyautogui.click()

    """确定"""
    pyautogui.moveTo(800, 520)
    pyautogui.click()

    """下载确认,弹出框"""
    time.sleep(4)
    pyautogui.moveTo(770, 465)
    pyautogui.click()
    #不能被遮蔽
for i in range(1,10):
    law_download(i*100)
    pass
#pyautogui.moveTo(605, 330)#有保存密码页面
#time.sleep(1)
#pyautogui.click()