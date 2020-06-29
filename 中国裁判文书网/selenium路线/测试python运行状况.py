"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
for i in range(1):
    print(i)


dataframe = {}
element_list = {}

for i in range(100):
    print(i/2)
    if str(i/2).split(".")[-1] == str(0):
        element_list["ss"] = 1
        dataframe["sss"] = element_list
    else:
        element_list["ss"] = 0
        dataframe["sss"] = element_list

    print(dataframe)
"""结论：
只有最后一个
"""
