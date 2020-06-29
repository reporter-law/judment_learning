"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import glob,os
path = r"F:\360下载\docx(第二次)".strip('\u202a')
output_path = r"F:\360下载\doc(第二次）".strip("\u202a")
def repeat_docx(path,output_path):
    index = 1
    for path_ in glob.glob(os.path.join(path, "*")):
        "选择文件名"
        a = path_.split('.')[0].split("\\")[-1]

        with open("已经存在的docx.txt", "a+", encoding='utf-8')as f:
            f.write(os.path.join(output_path,a) + ".doc" + "\n")
            f.write(os.path.join(output_path, a) + ".docx" + "\n")
            print("正在写入中----------------------第%d页---------------------------" % index)
            index += 1
repeat_docx(path,output_path)
