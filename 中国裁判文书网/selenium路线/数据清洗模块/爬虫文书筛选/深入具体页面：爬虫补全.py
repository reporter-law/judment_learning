"""程序说明:只是为了寻找大于600个裁判文书的区县"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import time
import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.firefox.options import Options
import time
import logging

logging.disable(logging.INFO)
def start_logger():
    """日志初始化设置、文件名（时间）、DEBUG为调试级别(级别导致输出内容的不同）、日志的记录格式、日期格式"""

    logging.basicConfig(  #filename='daily_report_error_%s.log' %

        #datetime.strftime(datetime.now(), '%m%d%Y_%H%M%S'),

        level=logging.DEBUG,
        format='%(asctime)s %(message)s',
        datefmt='%m-%d %H:%M:%S')
start_logger()
ops = Options()
ops.add_argument('--headless')
browser = webdriver.Firefox(options=ops)
browser.get('http://wenshu.court.gov.cn/website/wenshu/181217BMTKHNT2W0/index.html?pageId=39e24fd599fc54891cde7815075d1451&s21=%E8%AE%A4%E7%BD%AA%E8%AE%A4%E7%BD%9A')
wait = WebDriverWait(browser,20)


def content_change(county,index_):
    """选择器要选对，之前是xpath"""
    try:
        click = wait.until(EC.presence_of_element_located(
            (By.XPATH, '//div[@class ="search-wrapper clearfix"]/div[@class = "search-middle"]/input')))
        click.send_keys('认罪认罚')
        button = wait.until(
            EC.presence_of_element_located((By.XPATH, '//div[@class ="search-wrapper clearfix"]/div[3]')))
        button.click()
        time.sleep(1)
        """发送country"""
        send1 = wait.until(EC.presence_of_element_located(
            (By.XPATH, '//div[@class ="search-wrapper clearfix"]/div[@class = "search-middle"]/input')))
        send1.send_keys(county)
        button_1 = wait.until(
            EC.presence_of_element_located((By.XPATH, '//div[@class ="search-wrapper clearfix"]/div[3]')))
        button_1.click()
        time.sleep(1)
    except:
        logging.warning(county +': 第%d个缺失数据' % index_)
        index_ += 1

def main():
    """主函数遍历页数"""
    path = '../传入参数_区县/城市.txt'
    with open(path,'r',encoding='utf-8')as f:
        contents = f.readlines()
        index_ = 0
        for i in contents:
            content_change(i.strip(),index_)#index_是给缺失数据使用的
            """目的：减少遍历次数"""
            condition = wait.until(
            EC.presence_of_element_located((By.XPATH, '//div[@class="LM_con clearfix"]/div[@class="fr con_right"]/span')))
            if int(condition.text) > 600:
                with open('超过600页（前1000）.txt','a+',encoding='utf-8')as file:
                    file.write('出现超过600条的裁判文书,其所在区域为：'+ str(i.strip()) +'，其数量为：'+str(condition.text) + '\n')
                logging.warning('出现超过600条的裁判文书,其所在区域为：'+ str(i.strip()) +'，其数量为：'+str(condition.text))
            click = wait.until(EC.presence_of_element_located((By.XPATH, '//*[@id="clear-Btn"]')))  # //div[class="LT_Filter_right clearfix"]/p[4]/i
            click.click()
            time.sleep(1)

main()