"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import  os
import schedule
import time


def rate():
    start_time = time.time()
    print("开始运行中------------------------------")
    index = 1
    path = r"F:\360下载\doc(第二次）".strip("\u202a")
    doc_and_docx_list = os.listdir(path)
    frequence = []
    for i in doc_and_docx_list:
        # print(i.split(".")[1])
        if i.split(".")[1] == "docx":
            frequence.append(i)
            index += 1
    print("docx文档一共： ", index)
    return start_time,index

def calculation():
    print(schedule.every(1).minutes.do(rate))
    schedule.run_pending()
calculation()

def print_():
    """测试使用函数"""
    start_time = time.time()
    time.sleep(5)
    end_time = time.time()
    return start_time,end_time


