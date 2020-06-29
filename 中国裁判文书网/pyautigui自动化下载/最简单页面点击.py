"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import pyautogui
import time
def all_selector(i):
    """
    鼠标移动下载
    """

    pyautogui.scroll(10000000)
    time.sleep(2)
    """鼠标全选"""

    pyautogui.moveTo(1060, 680)
    pyautogui.click()
    """鼠标批量下载"""

    pyautogui.moveTo(1250, 680)
    pyautogui.click()
    time.sleep(2)
    pyautogui.moveTo(770, 465)
    pyautogui.click()


for i in range(2):
    print('正在进行第%d页的内容下载------------------------' % i )
    all_selector(i)