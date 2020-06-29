"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:

import os
import shutil
import glob
import time

# 使用线程移动文件

def move(path,output):
    """移动的时候会自动去重，因为已经存在的不能移动"""
    index = 1

    for path_ in glob.glob(os.path.join(path, "*")):
        try:
            if path_.split(".")[-1] == "docx":
                shutil.move(path_,output)
                print("docx移动成功-------------------------第%d个-----------------------------"% index)
                index += 1
        except Exception as e:
            print(e)
            print("移动失败------------------------------")




path =  r"F:\360下载\doc(第二次）".strip('\u202a')
output = r"F:\360下载\docx(第二次)".strip('\u202a')
move(path,output)


"""
测试
path_ =r"C:\\Users\lenovo\Desktop\被移动".strip('\u202a')
path__ =r"C:\\Users\lenovo\Desktop\被移动".strip('\u202a')
for path_1 in glob.glob(os.path.join(path_, "*")):
    if path_1.split(".")[-1] == "docx":
        shutil.move(path_, path__)
"""

