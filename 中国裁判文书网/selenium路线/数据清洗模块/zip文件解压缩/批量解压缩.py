"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:

import zipfile
import os
from threading import Thread as t


#sys.setdefaultencoding('gbk')  # 如遇到无法识别中文而报错使用
input_files = r"F:\360下载\lin"  # zipfile 的路径
output_files = r"‪F:\360下载\lindoc"  # 解压到路径unzip下
#print(len(os.listdir(input_files.strip('\u202a'))))


# 将zip文件解压处理，并放到指定的文件夹里面去
def unzip_file(zip_file_name, destination_path):
    try:
        index = 1
        archive = zipfile.ZipFile(zip_file_name, mode='r')
        for file in archive.namelist():
            try:
                archive.extract(file, destination_path)
                index +=1
            except Exception as e:
                print(e)
                continue
        print("正在解压缩-----------------第%d个压缩包-------------------------------------" % index)
        index += 1
    except:
        pass



def zipfile_name(file_dir):
    # 读取文件夹下面的文件名.zip
    L = []
    for root, dirs, files in os.walk(file_dir):
        print(files)
        for file in files:
            if os.path.splitext(file)[1] == '.zip':  # 读取带zip 文件
                L.append(os.path.join(root, file))
    return L


# 入口函数
def main():
    fn = zipfile_name(input_files.strip('\u202a'))
    for file in fn:
        unzip_file(file, output_files.strip('\u202a'))




if __name__ == "__main__":

    main()

print(len(os.listdir(output_files.strip('\u202a'))))

# zipfile解压中文zip文件会导致乱码，解决方案是要修改python库中的zipfile.py
# 将文件中所有的'cp437'字符替换为'gbk'
















"""
试图先移动目录
new_files = r"‪F:\360下载\doc(第二次）".strip('\u202a')
print(os.makedirs(input_files.strip('\u202a') + "1"))
for index,content in enumerate(os.listdir(input_files.strip('\u202a'))):
    print(index,content)
    if index <= 10000:
        if not os.path.exists(new_files + "1"):
            os.makedirs(new_files + "1")  # 创建路径
        shutil.move(content, new_files + "1")
    elif 10000<index <= 20000:
        if not os.path.exists(new_files + "2"):
            os.makedirs(new_files + "2" )  # 创建路径
        shutil.move(content, new_files + "2")
    elif 20000< index <= 30000:
        if not os.path.exists(new_files + "3"):
            os.makedirs(new_files + "3")  # 创建路径
        shutil.move(content, new_files + "3")
    elif 30000< index <= 40000:
        if not os.path.exists(new_files + "4"):
            os.makedirs(new_files + "4")  # 创建路径
        shutil.move(content,new_files + "4")
    else:
        if not os.path.exists(new_files + "5"):
            os.makedirs(new_files + "5")  # 创建路径
        shutil.move(content, new_files + "5")
"""