"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:


"""两种分词：结巴以及逗号句号分词"""
import os,glob
from 学习书籍成果.其他库.doc文件.docxtxt2模块.docxtxt2模块读取docx import docx_read_simple as read
from fuzzywuzzy import process
import pandas as pd
from concurrent.futures import  ThreadPoolExecutor as pool
import time,pprint
import jieba
from 项目.项目二_文书内容提取.提取模板模块.停用词的去除 import stopword_manager as st
from 学习书籍成果.其他库.结巴分词模块.各类词典.法律词典提取 import split_docx_judments as sp
from fuzzywuzzy import fuzz




output_files = r"E:\\360Downloads\\量刑指导意见.docx"
path = r"C:\Users\lenovo\Desktop\××毛征库徐强徐艳林等组织领导参加黑社会性质组织罪二审刑事裁定书.docx"

def check_plot_simple(path):
    """量刑指导意见读取"""
    text2 = []
    element_list = {}
    dataframe = {}
    element_lists = {}
    dataframes = {}
    """裁判文书读取"""
    text = read(path).replace("\n", "").replace("\u3000", "").replace(" ", "").strip()
    #print(type(text))
    jieba.load_userdict('J:\PyCharm项目\项目\项目二_文书内容提取\提取模板模块\刑事诉讼法词典.txt')
    text_ = jieba.lcut(text)
    """停用词去除"""
    text1 = st(text_)
    # print(text1)  # 读取整个文本
    for i in text1:
        if len(i) <= 1:
            text1.remove(i)
        else:
            text2.append(i)

    title = path.split("\\")[-1].split(".")[0]
    """查询是否存在量刑情节"""
    with open("J:\PyCharm项目\项目\中国裁判文书网\selenium路线\法条内容提取\量刑情节.txt", "r", encoding="utf-8")as f:
        condition = f.readlines()
        """两个集合以便更新，直接似乎无法更新"""
        for i in condition:
            element_list[title] = 0
            dataframe[i.strip("\n")] = element_list

        for i in condition:
            tuple = process.extractOne(i.strip("\n"), text2)
            #print(tuple)
            if  tuple[1] > 90 and tuple[0] != "犯罪" and len(tuple[0])>1:
                print(tuple)

                print("存在的量刑情节： ", tuple[0])
                element_lists[title] = 1
                dataframes[tuple[0]] = element_lists
    """字典更新"""
    dataframe_ = dict(dataframe,**dataframes)

    """excel写入"""
    #pprint.pprint(dataframe_)
    dataframes = pd.DataFrame(dataframe_)
    writer = pd.ExcelWriter(r"F:\360下载\提取后的excel文件\{name}.xls".format(name=title))
    dataframes.to_excel(writer, sheet_name='一', index=False)
    writer.save()
    print("写入成功--------------------------------")
#check_plot_simple(output_files,path)

def main(input_path):
    #for path_ in glob.glob(os.path.join(input_path, "*")):#之前传入的路径已经完毕
    for path_ in input_path:
        check_plot_simple(path_)
input_path = r"F:\360下载\清洗后的docx".strip('\u202a')
#main(input_path)
"""
if __name__ == "__main__":
    _path = glob.glob(os.path.join(input_path, "*"))
    #print(index,_path.replace('\u2022',"#").replace("\u30fb","##").replace("\u4dae","###").replace("\u4722","####"))
    #或者更改项目编码
    pool_path = [_path[i:i + 10000] for i in range(0, len(_path), 10000)]
    #print(pool_path)
    pools = pool(20)
    for i in range(len(pool_path)):
        pools.submit(main,pool_path[i])
"""



def no_jieba_get(input_path):
    """非结巴分词匹配"""
    element_list = {}
    dataframe = {}
    element_lists = {}
    dataframes = {}

    #for path in glob.glob(os.path.join(input_path, "*")):#遍历文档
    for path in input_path:
        """
        开始匹配:匹配方法split文档，然后一个一个模糊匹配
        """
        title = path.split("\\")[-1].split(".")[0]
        for i in sp(path):
            with open("J:\PyCharm项目\项目\中国裁判文书网\selenium路线\法条内容提取\量刑情节.txt", "r", encoding="utf-8")as f:
                condition = f.readlines()
                for i_ in condition:
                    tu = fuzz.partial_ratio(i_.strip("\n"), i)
                    if tu > 90:
                        #print(i)
                        element_lists[title] = 1
                        dataframes[i_.strip("\n")] = element_lists

        """注意此处的缩进程度需到此处，继续缩进存在无法更新过快"""
        for i in condition:
            element_list[title] = 0
            dataframe[i.strip("\n")] = element_list
            #pprint.pprint(dataframe)

        """字典更新"""
        dataframe_ = dict(dataframe, **dataframes)
        #pprint.pprint("更新后的字典 ：")
        #pprint.pprint(dataframe_)
        """excel写入"""
        dataframes = pd.DataFrame(dataframe_)
        writer = pd.ExcelWriter(r"F:\360下载\提取后的excel文件(非分词结果）\{name}.xls".format(name=title))
        dataframes.to_excel(writer, sheet_name='一', index=False)
        writer.save()
        print("写入成功--------------------------------")

#no_jieba_get(input_path)
if __name__ == "__main__":
    _path = glob.glob(os.path.join(input_path, "*"))
    #print(index,_path.replace('\u2022',"#").replace("\u30fb","##").replace("\u4dae","###").replace("\u4722","####"))
    #或者更改项目编码
    pool_path = [_path[i:i + 1] for i in range(0, len(_path), 1)]
    #print(pool_path)
    pools = pool(100)
    for i in pool_path:
        pools.submit(no_jieba_get,i)
    """为什么21个就直接结束，因为内部线程没有运行完毕"""
