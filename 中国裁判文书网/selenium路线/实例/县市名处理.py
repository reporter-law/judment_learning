"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import time
import logging

logging.disable(logging.WARNING)
def start_logger():
    """日志初始化设置、文件名（时间）、DEBUG为调试级别(级别导致输出内容的不同）、日志的记录格式、日期格式"""

    logging.basicConfig(  #filename='daily_report_error_%s.log' %

        #datetime.strftime(datetime.now(), '%m%d%Y_%H%M%S'),

        level=logging.DEBUG,
        format='%(asctime)s %(message)s',
        datefmt='%m-%d %H:%M:%S')

def manager():
    """显示名称处理"""
    start_logger()
    provice = []
    city = []
    county = []
    completion = []
    path = 'J:\PyCharm项目\项目\中国裁判文书网\selenium路线\实例\全国县市名.txt'
    with open(path,'r+')as f:
        for i in range(437):
            content = f.readline()
            """省市区提取"""
            if 10 > len(content.strip()) > 0:
                if content.strip()[-1] == '市' or content.strip()[-1] == '省' or content.strip()[-1] == '区':
                    provice.append(content)
                    logging.debug(content)
            #区县处理
            elif len(content.strip()) >10:
                try:
                    list_ = content.split(':')[1].strip().split(',')
                    city.append(content.split(':')[0])
                    for list in list_:
                        """这样处理的原因在于市区之间有空格，且区之间也有空格"""
                        element = list.split(' ')

                        element.remove('市辖区')
                        for index,elements in enumerate(element):
                            #for i1 in range(3):
                            if len(elements) <= 1:
                                elements_ = elements + element[index+1]
                                print(elements_)
                                """针对单一有空格的字符进行单独处理"""
                                if len(elements_) < 3 and elements_ != "郊区" and elements_ != "区城"  and elements_ != "区郊" :
                                    """ValueError: I/O operation on closed file.
                                    with open("城市区县补全.txt", "a+", encoding='utf-8')as f:
                                        f.write(elements_)
                                    """

                                #element.remove(elements)
                                # 去掉了单个词，会导致某些中间被空格隔开的两个字的市县被剔除，但是影响一应该不大

                                    completion.append(elements_)
                        county.append(element)


                    logging.debug(list_)
                except:
                    pass
            else:
                pass
    for i in completion:
       pass

    logging.error(completion)
    for i in completion:
        with open("城市区县补全.txt", "a+", encoding='utf-8')as f:
            f.write(i + "\n")

    logging.debug(len(provice))
    cities = []
    for city_ in city:
        """不明原因，不能在前面进行处理"""
        try:
            for i2 in range(4):
                if len(city_.strip()) <= 1:
                    city.remove(city_)
                    print(city_)
                elif city_.strip() == '市辖区':
                    city.remove(city_)
        except:
            pass
        cities.append(city_)
    logging.warning(cities)
    return county
for i in manager():

    for a in i:

        with open('../城市（副本）.txt', 'a+', encoding='utf-8')as f:
            f.write(a + '\n')