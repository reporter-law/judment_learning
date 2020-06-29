"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import glob
import os
import shutil

def repeat_clear_docx():
    index = 1
    path = r"F:\360下载\docx(第二次)".strip('\u202a')
    output = r"F:\360下载\清洗后的docx".strip('\u202a')
    list_ = set(glob.glob(os.path.join(path, "*")))
    for path_ in list_:
        try:
            shutil.move(path_, output)
            print("docx移动成功-------------------------第%d个-----------------------------" % index)
            index += 1
        except Exception as e:
            print(e)
            print("移动失败------------------------------")
repeat_clear_docx()

