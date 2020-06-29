"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import os,glob
from 学习书籍成果.其他库.doc文件.docxtxt2模块.docxtxt2模块读取docx import docx_read_simple as read
import pprint
from fuzzywuzzy import process,fuzz
import jieba
from 项目.项目二_文书内容提取.提取模板模块.停用词的去除 import stopword_manager as st
import csv
import pandas as pd





output_files = r"E:\\360Downloads\\量刑指导意见.docx"
path = r"F:\360下载\清洗后的docx\周春生马磊故意毁坏财物罪一审刑事判决书.docx"

def check_plot_simple(path):
    """量刑指导意见读取"""
    #暂时删去
    Sentencing_plot_text = read(output_files).replace("\n", "").replace("\u3000", "")
    # pprint.pprint(Sentencing_plot_text)
    text2 = []
    element_list = {}
    dataframe = {}
    element_lists = {}
    dataframes = {}
    """裁判文书读取"""
    text = read(path).replace("\n", "").replace("\u3000", "").replace(" ", "").strip()
    jieba.load_userdict('J:\PyCharm项目\项目\项目二_文书内容提取\提取模板模块\刑事诉讼法词典.txt')
    text_ = jieba.lcut(text)
    """停用词去除"""
    text1 = st(text_)
    #print(text1)  # 读取整个文本
    for i in text1:
        if len(i)<=1:
            text1.remove(i)
        else:
            text2.append(i)
    pprint.pprint(text2)
    title = path.split("\\")[-1].split(".")[0]
    """查询是否存在量刑情节"""
    with open("/法条内容提取/量刑情节.txt", "r", encoding="utf-8")as f:
        condition = f.readlines()
        """两个集合以便更新，直接似乎无法更新"""
        for i in condition:
            element_list[title] = 0
            dataframe[i.strip("\n")] = element_list


        for i in condition:
            tuple = process.extractOne(i.strip("\n"), text2)
            #print(tuple)
            if tuple[1]>90 and tuple[0] != "犯罪":
                print("存在的量刑情节： ", tuple[0])
                element_lists[title] = 1
                dataframes[tuple[0]] = element_lists


    dataframe_ = dict(dataframe,**dataframes)

    #pprint.pprint(dataframe_)
    dataframes = pd.DataFrame(dataframe_)
    writer = pd.ExcelWriter(r"F:\360下载\提取后的excel文件\{name}.xls".format(name=title))
    dataframes.to_excel(writer, sheet_name='一', index=False)
    writer.save()

check_plot_simple(path)

def main(input_path):
    for path_ in glob.glob(os.path.join(input_path, "*")):
        check_plot_simple(path_)
input_path = r"F:\360下载\清洗后的docx".strip('\u202a')
#main(input_path)
























def check_plot(input_path):
    """裁判文书读取"""

    dataframe = {}
    element_list = {}
    text2 = []


    """直接。docx就少了文书的名字"""
    for path_ in glob.glob(os.path.join(input_path,"*")):
        text = read(path_).replace("\n", "").replace("\u3000", "").replace(" ", "").strip()
        jieba.load_userdict('J:\PyCharm项目\项目\项目二_文书内容提取\提取模板模块\刑事诉讼法词典.txt')
        text_ = jieba.lcut(text)
        """停用词去除"""
        text1 = st(text_)
        """单个词去除"""
        for i in text1:
            if len(i) <= 1:
                text1.remove(i)
            else:
                text2.append(i)
            # print(text1)  # 读取整个文本
        title = path_.split("\\")[-1].split(".")[0]
        """查询是否存在量刑情节"""
        with open("/法条内容提取/量刑情节.txt", "r", encoding="utf-8")as f:
            condition = f.readlines()
            for i in condition:


                tuple = process.extractOne(i.strip("\n"), text2)
                # print(list(tuple))
                if list(tuple)[-1] >= 90 and tuple[0] != "犯罪":
                    element = list(tuple)[0]
                    print("字符串模糊匹配的前几位为： ", element)
                    """注意此处的if-else，因为字典对应的不同而不同，之前是title对应的，导致整行被覆盖,后续写入会写入整行、列"""
                    if element + "\n" in condition:
                        print("在的： ",element)
                        element_list[title] = 1
                        dataframe[i.strip("\n")] = element_list
                        pprint.pprint(dataframe)
                    else:
                        element_list[title] = 0
                        dataframe[i.strip("\n")] = element_list




                    pprint.pprint(dataframe)




input_path = r"C:\\Users\lenovo\Desktop\测试".strip('\u202a')
#check_plot(input_path)
"""读取excel"""
#data_frame = pd.read_excel("J:\PyCharm项目\项目\中国裁判文书网\selenium路线\法条内容提取\测试集.xls",index_col=None)
#print(data_frame)


def writer_csv():
    """量刑模型头部数据写入"""
    writer_row = []
    with open("../量刑模型数据.csv", "w") as csvfile:
        writer = csv.writer(csvfile)
        # 先写入columns_name
        with open("/法条内容提取/量刑情节.txt", "r", encoding="utf-8")as f:
            writer_rows = f.readlines()
            for i in writer_rows:
                writer_row.append(i.strip())

        writer.writerow(writer_row)
#writer_csv()

def read_csv():
    csvfile = open('../量刑模型数据.csv', 'r')
    reader = csv.reader(csvfile)
    for row in reader:
        if "自首" in row:
            print("ok")

#read_csv()

