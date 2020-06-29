"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
from 学习书籍成果.其他库.doc文件.读取docx文件 import to_txt as read
import re
import logging
import csv
import pandas as pd
import pprint

logging.disable(logging.DEBUG)
def start_logger():
    """日志初始化设置、文件名（时间）、DEBUG为调试级别(级别导致输出内容的不同）、日志的记录格式、日期格式"""
    logging.basicConfig(#filename='daily_report_%s.log' %datetime.strftime(datetime.now(), '%m%d%Y_%H%M%S'),
        level=logging.DEBUG,
        format='%(asctime)s %(message)s',
        datefmt='%m-%d %H:%M:%S')
start_logger()
output_files = r"E:\\360Downloads\\量刑指导意见.docx"


def get_Sentencing_plot(output_files):
    """获取罪名，法定刑只有一起获取才不会有不等长的危害"""
    csv_content = []
    csv_content_ = []
    for writer in read(output_files):
        csv_content_.append(writer)
    pprint.pprint(csv_content_)
    pattern = re.compile("量刑要素的细化(.*?)第二十七条")
    content_need = re.findall(pattern, str(csv_content_))
    for i in content_need:
        if i is None:
            pass
        else:
            csv_content.append(i)
    #logging.info(csv_content)
    pattern = re.compile("【(.*?)】")
    content_need_ = re.findall(pattern, str(csv_content))
    return content_need_
#print(get_Sentencing_plot(output_files))
content = "未成年人犯罪、限制行为能力的精神病人犯罪、盲聋哑人犯罪、防卫过当、避险过当、犯罪的预备、未遂、中止、共同犯罪中的首要分子、主犯、从犯、胁从犯、教唆犯、累犯、自首和立功"
content2 = "犯罪行为的程度、犯罪的次数、犯罪的数额、犯罪的后果、犯罪对象的个数"
content3 = "犯罪对象、犯罪手段、犯罪时间、地点、犯罪动机、起因、犯罪前的一贯表现、犯罪后的态度、退赃和赔偿情况"
def get_content():
    content_get = content.split("、")
    for i in content_get:
        print(i)
        with open("../量刑情节.txt", "a+", encoding="utf-8")as f:
            f.write(i+"\n")
    content2_get = content2.split("、")
    for i2 in content2_get:
        with open("../量刑情节.txt", "a+", encoding="utf-8")as f:
            f.write(i2+"\n")
    content3_get = content3.split("、")
    for i3 in content3_get:
        with open("../量刑情节.txt", "a+", encoding="utf-8")as f:
            f.write(i3+"\n")
#get_content()





