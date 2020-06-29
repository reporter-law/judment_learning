"""说明"""
import pyautogui
# -*-  coding: utf-8 -*-
# Author: cw
# Datetime : 2020
# software: PyCharm
# 收获：
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
import math
import time
import logging
#from datetime import datetime

logging.disable(logging.DEBUG)
def start_logger():
    """日志初始化设置、文件名（时间）、DEBUG为调试级别(级别导致输出内容的不同）、日志的记录格式、日期格式"""

    logging.basicConfig(#filename='daily_report_%s.log' %datetime.strftime(datetime.now(), '%m%d%Y_%H%M%S'),
        level=logging.DEBUG,
        format='%(asctime)s %(message)s',
        datefmt='%m-%d %H:%M:%S')
start_logger()

"""初始设置，进入具体下载页面"""
"""firefox不会空白，chrome会空白"""

"""下载无弹窗
profile = webdriver.FirefoxProfile()
profile.set_preference('browser.download.folderList', 2)
logging.info('运行支持')
profile.set_preference('browser.download.dir', 'I:\\360下载\\firefox')

profile.set_preference('browser.download.manager.showWhenStarting', False)
profile.set_preference('browser.helperApps.neverAsk.saveToDisk', 'application/zip')
"""
browser = webdriver.Firefox()

"""网页获取"""
browser.get('http://wenshu.court.gov.cn')
wait = WebDriverWait(browser,20)
send = wait.until(EC.presence_of_element_located((By.XPATH, '//*[@id="_view_1540966814000"]/div/div[1]/div[2]/input')))
send.send_keys('认罪认罚')
button = wait.until(EC.presence_of_element_located((By.XPATH, '//*[@id="_view_1540966814000"]/div/div[1]/div[3]')))
button.click()


def content_change(county,index_,keyword):
    """选择器要选对，之前是xpath"""
    try:
        if county != '江汉区':
            click = wait.until(EC.presence_of_element_located(
                (By.XPATH, '//*[@id="clear-Btn"]')))  # //div[class="LT_Filter_right clearfix"]/p[4]/i
            click.click()
            click1 = wait.until(EC.presence_of_element_located(
                (By.XPATH, '//*[@id="_view_1545034775000"]/div/div[1]/div[1]')))
            click1.click()
            click = wait.until(EC.presence_of_element_located(
                (By.XPATH, '//*[@id="qbValue"]')))
            click.clear()
            click.send_keys('认罪认罚')

            #time.sleep(1)

            """发送country"""

            send1 = wait.until(EC.presence_of_element_located((By.XPATH, '//*[@id="s2"]')))#//div[@class ="search-wrapper clearfix"]/div[@class =
            # "search-middle"]/input全文输入
            send1.send_keys(county)
            button_1 = wait.until(
                EC.presence_of_element_located((By.XPATH, '//*[@id="searchBtn"]')))
            button_1.click()
            time.sleep(100000)
            """关键字

            click1 = wait.until(EC.presence_of_element_located(
                (By.XPATH, '/html/body/div/div[3]/diy:lawyee/div/div[1]/div[2]/input')))
            click1.clear()
            click1.send_keys(str(keyword))
            button = wait.until(
                EC.presence_of_element_located((By.XPATH, '/html/body/div/div[3]/diy:lawyee/div/div[1]/div[3]')))
            button.click()
            """

            """文书数量：15"""
            button_ = wait.until(EC.presence_of_element_located((By.XPATH, '//div[@class="left_7_3"]/div/select')))
            button_.click()
            button_ = wait.until(
                EC.presence_of_element_located((By.XPATH, '//div[@class="left_7_3"]/div/select/option[3]')))
            button_.click()


        else:
            """文书类型：判决书"""
            time.sleep(1)
            button = wait.until(EC.presence_of_element_located((By.XPATH, '//*[@id="j4_1_anchor"]')))
            button.click()
            """案件类型：刑事案件"""
            button = wait.until(EC.presence_of_element_located((By.XPATH, '//*[@id="02_anchor"]')))
            button.click()
            """案由：刑事
            button = wait.until(EC.presence_of_element_located((By.XPATH,'//*[@id="I00_anchor"]')))
            button.click()

            法院类型：湖南省
            button = wait.until(EC.presence_of_element_located((By.XPATH,'//*[@id="_view_1545184311000"]/div[8]/div/select')))
            button.click()
            button = wait.until(EC.presence_of_element_located((By.XPATH,'//*[@id="_view_1545184311000"]/div[8]/div/select/option[3]')))
            button.click()
            time.sleep(1)
            browser.implicitly_wait(5)
            """

            """发送country"""


            sendkeys = wait.until(EC.presence_of_element_located(
                (By.XPATH, '//div[@class ="search-wrapper clearfix"]/div[@class = "search-middle"]/input')))
            sendkeys.send_keys(county)
            button__ = wait.until(
                EC.presence_of_element_located((By.XPATH, '//div[@class ="search-wrapper clearfix"]/div[3]')))
            button__.click()
            button__.click()
            time.sleep(1)

            """文书数量：15"""
            button_ = wait.until(EC.presence_of_element_located((By.XPATH, '//div[@class="left_7_3"]/div/select')))
            button_.click()
            time.sleep(1)
            button_ = wait.until(
                EC.presence_of_element_located((By.XPATH, '//div[@class="left_7_3"]/div/select/option[3]')))
            button_.click()
            time.sleep(1)
    except:
        print(county +': 第%d个缺失数据' % index_)
        index_ += 1
        return


def get_page(index):
    """由于不明原因而需要两次移动"""
    #index = 0,index失败，看看能不能计算
    """
    condition = browser.find_element_by_xpath('//div[@class="LM_con clearfix"]/div[@class="fr con_right"]/span')
    print(condition.text)#不能直接//text()原因不明
    conditions = math.ceil(int(condition.text) / 15)#最长12，最短6
    change = conditions - 6
    """
    try:
        if index >= 1:
            try:
                browser.execute_script('window.scrollTo(0,document.body.scrollHeight)')

                # button1 = wait.until(EC.presence_of_element_located((By.XPATH, '//div[@class="left_7_3"]/a[%d]' %
                # int(7 + index))))
                button_ = wait.until(EC.presence_of_element_located((By.XPATH, '//div[@class="left_7_3"]/a[last()]')))

                button_.click()
                # 下一页xpath：
                '''
                 if 7<=index <36:
                    try:
                        button1 = wait.until(EC.presence_of_element_located((By.XPATH, '//div[@class="left_7_3"]/a[14]')))#问题并不是全为a8
                        time.sleep(1)
                        button1.click()
                    except:
                        pass

                elif 36 <= index < 40:
                    try:
                        button1 = wait.until(EC.presence_of_element_located((By.XPATH, '//div[@class="left_7_3"]/a[%d]' % int(
                            49-index))))
                        time.sleep(1)
                        button1.click()
                    except:
                        pass
                elif index ==40:
                    pass
                '''

                # 确保点击有效,回到上方
                #pyautogui.scroll(-10000000)
                pyautogui.scroll(10000000)
                #pyautogui.scroll(-10000000)
                """
                pyautogui.moveTo(950, 500)
                pyautogui.moveTo(950, 500)
                time.sleep(2)
                pyautogui.click()
                """

                "限定条件"
                '''
                click__ = wait.until(EC.presence_of_element_located((By.XPATH, '/html/body/div/div[4]/div[1]/diy:lawyee['
                                                                               '4]/div/div[2]/ul/li/ul/li[%d]' % index)))
                click__.click()
                '''
                '''全选的点击'''
                #time.sleep(1)

                click_1 = wait.until(
                    EC.presence_of_element_located((By.XPATH, '//div[@class="LM_tool clearfix"]/div[4]/a[1]/label')))
                #time.sleep(1)
                click_1.click()

                '''批量下载的点击'''
                click_2 = wait.until(EC.presence_of_element_located((By.XPATH, '//html/body/div/div[4]/div[2]//div['
                                                                               '@class="LM_tool clearfix"]/div[4]/a[3]')))
                #browser.implicitly_wait(10)

                click_2.click()
                """弹出框确认点击"""
                pyautogui.moveTo(505, 410)
                pyautogui.click()
                pyautogui.moveTo(765, 465)
                pyautogui.click()

                print('第%d页下载成功============================================' % index)
            except:
                pass
        else:

            # 选择前先滑动
            '''
            click__ = wait.until(EC.presence_of_element_located((By.XPATH, '//div[@class="treeItem"]/div[2]/ul/li/ul/li[1]')))

            click__.click()
            '''
            '''全选的点击'''
            click_1 = wait.until(EC.presence_of_element_located(
                (By.XPATH, '//html/body/div/div[4]/div[2]//div[@class="LM_tool clearfix"]/div[4]/a[1]/label')))
            click_1.click()
            '''批量下载的点击'''
            click_2 = wait.until(EC.presence_of_element_located(
                (By.XPATH, '//html/body/div/div[4]/div[2]//div[@class="LM_tool clearfix"]/div[4]/a[3]')))

            click_2.click()
            #time.sleep(1)
            """弹出框确认点击"""
            pyautogui.moveTo(505, 410)
            pyautogui.click()
            pyautogui.moveTo(765, 465)
            pyautogui.click()
    except:
        print('第%d页出现缺失' % index)

def main(keyword):
    """主函数遍历页数"""
    path = '/数据清洗模块/传入参数_区县/城市区县补全.txt'  #更新了path
    with open(path,'r',encoding='utf-8')as f:
        contents = f.readlines()
        index_ = 0
        for i in contents:
            content_change(i.strip(),index_,keyword)
            """目的：减少遍历次数"""
            time.sleep(1)
            condition = browser.find_element_by_xpath('//div[@class="LM_con clearfix"]/div[@class="fr con_right"]/span')
            print(condition.text)  # 不能直接//text()原因不明
            conditions = math.ceil(int(condition.text) / 15)  # 最长12，最短6
            if int(condition.text) > 600:
                with open('../数据清洗模块/超过600页.txt', 'a+', encoding='utf-8')as file:
                    file.write('出现超过600条的裁判文书,其所在区域为：'+ str(i.strip()) +'，其数量为：'+str(condition.text) + '\n')
                logging.warning('出现超过600条的裁判文书,其所在区域为：'+ str(i.strip()) +'，其数量为：'+str(condition.text))
            for index in range(conditions):  # 不能减1，因为不会到6
                get_page(index)
                """更换城市"""
            click = wait.until(EC.presence_of_element_located((By.XPATH, '//*[@id="clear-Btn"]')))  # //div[class="LT_Filter_right clearfix"]/p[4]/i
            click.click()
            time.sleep(2)


if __name__ == "__main__":

    main()
"""限定条件有两个，一个是45行的认罪认罚，另一个是传入的country"""




