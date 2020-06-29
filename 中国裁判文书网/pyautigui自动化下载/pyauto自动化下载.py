"""说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import time
import pyautogui


def all_selector(i):
    """
    鼠标移动下载
    """
    if i <= 1:
        """鼠标下移,获取15页内容"""
        pyautogui.scroll(-100000000)
        pyautogui.scroll(-100000)
        pyautogui.scroll(-10000000)
        pyautogui.scroll(-10000)
        pyautogui.moveTo(1050, 500)
        pyautogui.click()
        pyautogui.moveTo(1050, 560)
        pyautogui.click()
        time.sleep(2)
    else:
        pass

    pyautogui.scroll(100000000)
    pyautogui.scroll(100000)
    pyautogui.scroll(100000)
    pyautogui.scroll(1000)
    time.sleep(2)
    """鼠标全选"""

    pyautogui.moveTo(1060, 680)
    pyautogui.click()
    """鼠标批量下载"""

    pyautogui.moveTo(1250, 680)
    pyautogui.click()

    """弹出框点击"""
    time.sleep(1)
    pyautogui.moveTo(505, 410)
    pyautogui.click()
    time.sleep(1000)
    pyautogui.moveTo(770, 465)
    pyautogui.click()

    if i < 2:
        """翻页"""
        pyautogui.scroll(-10000000)
        pyautogui.scroll(-100000)
        pyautogui.scroll(-100000)
        pyautogui.moveTo(950, 500)
        pyautogui.moveTo(950, 500)
        time.sleep(2)
        pyautogui.click()
        time.sleep(4)

    elif 2 <= i < 6:
        """由于变动导致"""
        pyautogui.scroll(-10000000)
        print('进入第二阶段')
        pyautogui.moveTo(1000, 500)
        pyautogui.moveTo(1020, 480)
        time.sleep(1)
        pyautogui.click()
        time.sleep(4)

    elif 6<= i < 10:
        print('正在进入第三阶段')
        pyautogui.scroll(-10000000)
        pyautogui.moveTo(1060, 500)
        pyautogui.moveTo(1080, 500)
        pyautogui.click()
        time.sleep(4)
    #新增的应对
    elif 10<= i <= 12:
        print('正在进入第三阶段')
        pyautogui.scroll(-10000000)
        pyautogui.moveTo(1130, 480)
        pyautogui.moveTo(1130, 480)
        pyautogui.click()
        time.sleep(4)
    elif 12 < i <= 36:
        print('正在进入第四阶段')
        pyautogui.scroll(-10000000)
        pyautogui.moveTo(1120, 500)
        pyautogui.moveTo(1150, 450)
        pyautogui.click()
        time.sleep(4)
    elif 36< i < 39:
        print('正在进入第三阶段')
        pyautogui.scroll(-10000000)
        pyautogui.moveTo(1060, 500)
        pyautogui.moveTo(1090, 500)
        pyautogui.click()
        time.sleep(4)
    else:
        """由于变动导致"""
        pyautogui.scroll(-10000000)
        print('进入第五阶段')
        pyautogui.moveTo(950, 500)
        pyautogui.moveTo(950, 500)
        time.sleep(1)
        pyautogui.click()
        time.sleep(4)



#all_selector()
for i in range(6):
    print('正在进行第%d页的内容下载------------------------' % i )
    all_selector(i)
'''
    """鼠标上移"""
    pyautogui.scroll(10000000)
    time.sleep(2)
    """鼠标全选"""

    pyautogui.moveTo(1060, 660)
    pyautogui.click()
    """鼠标批量下载"""

    pyautogui.moveTo(1250, 660)
    pyautogui.click()
    '''