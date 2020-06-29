"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import pandas as pd
import pprint

"""在读取时进行设置"""
content = pd.read_csv("J:\PyCharm项目\项目\中国裁判文书网\selenium路线\法条内容提取\罪名与法定刑\罪名法定刑.csv")
print(type(content))
a = content[["罪名","法定刑"]]


for i in list(content.groupby(["罪名","法定刑"])):
    """tuple与list可以作相同处理"""
    for i_ in i:
        if len(list(i_)[-1]) <40 and list(i_)[-1] !="法定刑":
            pprint.pprint(i_)





