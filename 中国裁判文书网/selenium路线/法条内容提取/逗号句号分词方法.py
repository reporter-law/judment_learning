"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
from 学习书籍成果.其他库.doc文件.docxtxt2模块.docxtxt2模块读取docx import docx_read_simple as read
import pprint
import time
from fuzzywuzzy  import fuzz




def split_docx_judments(path):
    """刑事诉讼法、民事诉讼法、行政诉讼法基本可以共用一套函数"""
    writer = []
    text = read(path).replace("\n", "").replace("\u3000", "").replace(" ", "").strip()
    if "挪用公款罪" in text:
        content = text.split("，")
        """一个一个切分"""
        for i in content:
            for i_ in i.split("。"):
                for i_1 in i_.split("；"):
                    for i_2 in i_1.split("："):
                        for i_3 in i_2.split("、"):
                            writer.append(i_3.strip())
        return writer

