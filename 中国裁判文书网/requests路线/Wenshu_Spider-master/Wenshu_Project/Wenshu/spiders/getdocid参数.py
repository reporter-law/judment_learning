# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import time
import logging
import execjs
def cipher():
    """cipher参数解密"""
    with open('J:\\PyCharm项目\\项目\\中国裁判文书网\\requests路线\\Wenshu_Spider-master\\Wenshu_Project\\Wenshu\\spiders\\get_vl5x'
              '.js',
              encoding='utf-8') as f:
        jsdata_1 = f.read()
    js_1 = execjs.compile(jsdata_1, cwd=r"C:\\Users\\Administrator\\node_modules")
    ciphertext = js_1.call('getvl5x')
    print(ciphertext)
cipher()