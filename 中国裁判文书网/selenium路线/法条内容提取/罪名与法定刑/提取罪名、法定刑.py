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

logging.disable(logging.DEBUG)
def start_logger():
    """日志初始化设置、文件名（时间）、DEBUG为调试级别(级别导致输出内容的不同）、日志的记录格式、日期格式"""
    logging.basicConfig(#filename='daily_report_%s.log' %datetime.strftime(datetime.now(), '%m%d%Y_%H%M%S'),
        level=logging.DEBUG,
        format='%(asctime)s %(message)s',
        datefmt='%m-%d %H:%M:%S')
start_logger()
output_files = r"E:\\360Downloads\\中华人民共和国刑法（2015）.docx"


def get_Statutory_sentence(output_files):
    """获取罪名，法定刑只有一起获取才不会有不等长的危害"""
    csv_content = []
    csv_content_ = []
    for writer in read(output_files):
        #logging.info(writer)
        pattern = re.compile("【(.*?)】.*?的，处(.*?)。")
        content_need = re.findall(pattern, writer)
        pattern_ = re.compile("【(.*?)】.*?的，对(.*?)。")#多了一个”对’
        content_need_ = re.findall(pattern_, writer)
        #print(content_need_)
        #print(content_need)
        for i in content_need:
            if i is None:
                pass
            else:
                csv_content.append(i)
        for i in content_need_:
            if i is None:
                pass
            else:
                csv_content_.append(i)
    all_list = csv_content_ + csv_content
    crime_names = []
    sentence = []
    for i in all_list:  # 元组可以直接list,不会被分割
        crime_names.append(list(i)[0])
        sentence.append(list(i)[1])
    return crime_names,sentence





def writer_to_docx(output_files):
    """pandas写入处理"""
    """返回两个变量时怎么办！！！"""
    [crime_names, sentence] = get_Statutory_sentence(output_files)
    # print(crime_names)
    """进行长度等长处理"""
    dataframe = pd.DataFrame({"罪名":crime_names,"法定刑":sentence})
    dataframe.to_csv("罪名法定刑.csv", index=True, sep=',')
    print("写入成功-----------------------------------")
#read_docx(output_files)




#get_Statutory_sentence(output_files)
#第一个问题：罪名本身在法定刑的法定刑规定上就有要件,有的还没有要件

def repeat_clear():
    """对罪名进行重复值检测"""
    with open("罪名.csv", "r") as csvfile:
        """读取csv"""
        writer = csv.reader(csvfile)
        number = []
        fre = {}
        """检测重复值"""
        for i in writer:
            for i_ in i:
                if i_ in fre:
                    fre[i_] += 1
                else:
                    fre[i_] = 1

                if i_ is None:
                    pass
                else:
                    number.append(i)
        print(len(number))
        # print(number)
        repeat_files_ = sorted(fre.items(), key=lambda x: x[1], reverse=True)
        print(repeat_files_)
        """重复值剔除"""
        for key, value in fre.items():
            if value >= 2:
                for i in range(value - 1):
                    # print([key])#list会切割字符串
                    number.remove([key])

        print(len(number))
        # print(number)
        """再次检测重复值"""
        fre_ = {}
        for i in number:
            for i_ in i:
                if i_ in fre_:
                    fre_[i_] += 1
                else:
                    fre_[i_] = 1
        repeat_files = sorted(fre_.items(), key=lambda x: x[1], reverse=True)
        print(repeat_files)



"""
收获：
可以变成两个列表
    for k, v in dataframe.items():
        print(pd.Series(v))
 #默认为columns,因而对不齐，换成index就不需要对其了
#df = pd.DataFrame.from_dict(dataframe, orient="index")
但是这是行对齐
"""

"""罪名写入:
   csv模块
   with open("罪名.csv", "a+") as csvfile:
       writer = csv.writer(csvfile)
       # 先写入columns_name
       writer.writerow(["罪名","法定刑"])
       # 写入多行用writerows，实际上也是一行即一行整体
       for i in csv_content[17:]:

           writer.writerows([[i],get_Statutory_sentence(output_files)])
   问题：两列的写入时遇到困难
   """
"""
没有进行等长处理的dict
dataframe = pd.DataFrame({"罪名":csv_content,"法定刑":get_Statutory_sentence(output_files)})
#ValueError: arrays must all be same length
"""
"""使用Series进行列表化处理"""
#df = pd.DataFrame(dict([(k, pd.Series(v)) for k, v in dataframe.items()]))