"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import zipfile
import  os
input_files = r"‪F:\360下载\firefox"  # zipfile 的路径
output_files = "‪F:\360下载\doc"  # 解压到路径unzip下
#print(os.listdir(input_files.strip("\u202a")))


archive = zipfile.ZipFile(input_files, mode='r')#此处读取单个压缩文件
for file in archive.namelist():
    archive.extract(file, r"C:\\Users\lenovo\Desktop\docx")


