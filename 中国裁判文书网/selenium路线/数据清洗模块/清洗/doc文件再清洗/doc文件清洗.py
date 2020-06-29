"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import os
import json
import shutil
import pprint


output_files = r"‪F:\360下载\doc(第二次）"  # 解压到路径unzip下
file_names = os.listdir(output_files.strip('\u202a'))

def repeat_file_find():
    repeat_files = {}
    for file_name in file_names:

        if file_name in repeat_files:
            repeat_files[str(file_name)] += 1
        else:
            repeat_files[str(file_name)] = 1
    '''排序'''
    repeat_files_ = sorted(repeat_files.items(), key=lambda x: x[1], reverse=True)
    pprint.pprint(repeat_files_[:100])
    with open("重复文件有哪些.json", "w+")as f:
        json.dump(repeat_files_,f)
    #文件dump,数据dumps
#repeat_file_find()
data = open("重复文件有哪些.json", "r", encoding='utf-8', errors='Egnore').read()
datas = json.loads(data)
for i in datas:
    print(i)

srcfile = r"C:\\Users\lenovo\Desktop\软件\减刑限度.doc"
dstfile = r"C:\\Users\lenovo\Desktop\新建文件夹"
def mymovefile(srcfile,dstfile):
    if not os.path.isfile(srcfile):
        print("%s not exist!" % (srcfile))
    else:
        fpath,fname=os.path.split(dstfile)    #分离文件名和路径
        if not os.path.exists(fpath):
            os.makedirs(fpath)                #创建路径
        shutil.move(srcfile,dstfile)          #移动文件
        print("move %s -> %s" % (srcfile, dstfile))

#mymovefile(srcfile,dstfile)



