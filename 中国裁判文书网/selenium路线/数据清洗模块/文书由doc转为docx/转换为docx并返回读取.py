"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
from 学习书籍成果.其他库.doc文件.读取docx文件 import doc_to_docx as turn
import os
import logging
from docxtxt2模块.docxtxt2模块读取docx import docx_to_txt as read

logging.disable(logging.DEBUG)
def start_logger():
    """日志初始化设置、文件名（时间）、DEBUG为调试级别(级别导致输出内容的不同）、日志的记录格式、日期格式"""
    logging.basicConfig(#filename='daily_report_%s.log' %datetime.strftime(datetime.now(), '%m%d%Y_%H%M%S'),
        level=logging.DEBUG,
        format='%(asctime)s %(message)s',
        datefmt='%m-%d %H:%M:%S')
start_logger()

"""实例化"""
path = r"‪C:\Users\lenovo\Desktop\新建文件夹"
output_files = r"F:\360下载\doc(第二次）"
#doc转为docx
docx = turn(output_files.strip('\u202a'))
print("转换成功----------------------------------------------")
#-156533-,-29071
def read_docx(output_files):
    #读取所有的docx文件
    list_file = os.listdir(output_files.strip('\u202a'))
    #print(list_file[1])
    for file in list_file:
        "测试docx转换是否成功"
        #print(file)
        if file.split('.')[1] == "docx":
            #logging.debug("路径：  " ,file)
            try:
                for writer in read(output_files):
                    logging.info(writer)
                    print("读取成功-----------------------------------")
            except Exception as e:
                print(e)


#read_docx(output_files.strip('\u202a'))







