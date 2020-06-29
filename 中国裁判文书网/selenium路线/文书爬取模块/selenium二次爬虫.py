"""程序说明"""
# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
from selenium import webdriver
from selenium.webdriver import FirefoxProfile
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
import math
import time
import logging
import pyautogui
from selenium.webdriver.firefox.options import Options
import os


logging.disable(logging.DEBUG)
def start_logger():
    """日志初始化设置、文件名（时间）、DEBUG为调试级别(级别导致输出内容的不同）、日志的记录格式、日期格式"""
    logging.basicConfig(#filename='daily_report_%s.log' %datetime.strftime(datetime.now(), '%m%d%Y_%H%M%S'),
        level=logging.DEBUG,
        format='%(asctime)s %(message)s',
        datefmt='%m-%d %H:%M:%S')
start_logger()




def content_change(county,index_,keyword):
    """选择器要选对，之前是xpath"""

    #下载无弹窗
    """
    profile = webdriver.FirefoxProfile()
    profile.set_preference('browser.download.folderList', 2)
    #logging.info('运行支持')
    profile.set_preference('browser.download.dir', 'I:\\360下载\\firefox')

    profile.set_preference('browser.download.manager.showWhenStarting', False)
    profile.set_preference('browser.helperApps.neverAsk.saveToDisk', 'application/zip')
     
   
    """
    # 无图
    profile = FirefoxProfile()
    profile.set_preference('browser.migration.version', 9001)
    profile.set_preference('permissions.default.image', 2)

    """网页获取"""
    browser = webdriver.Firefox(profile)
    try:

        browser.get('http://wenshu.court.gov.cn')
        wait = WebDriverWait(browser, 40)
        send = wait.until(
            EC.presence_of_element_located((By.XPATH, '//*[@id="_view_1540966814000"]/div/div[1]/div[2]/input')))
        send.send_keys('认罪认罚')

        button = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="_view_1540966814000"]/div/div[1]/div['
                                                                  '3]')))
        button.click()

        try:
            """关键字"""
            click1 = wait.until(EC.presence_of_element_located(
                (By.XPATH, '//div[@class="search-middle"]/input')))
            click1.clear()
            click1.send_keys(str(keyword))
            button1 = wait.until(
                EC.element_to_be_clickable((By.XPATH, '//div[@class="search-rightBtn search-click"]')))
            button1.click()
            # logging.info('运行至关键字输入处。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。')
            click1 = wait.until(EC.element_to_be_clickable(
                (By.XPATH, '//*[@id="_view_1545034775000"]/div/div[1]/div[1]')))
            click1.click()

            """
            优化为：
            发送country：高级检索
            """

            send1 = wait.until(EC.presence_of_element_located(
                (By.XPATH, '//*[@id="s2"]')))  # //div[@class ="search-wrapper clearfix"]/div[@class =
            # "search-middle"]/input全文输入
            send1.send_keys(county)
            button_1 = wait.until(
                EC.element_to_be_clickable((By.XPATH, '//*[@id="searchBtn"]')))
            button_1.click()
            # logging.info('运行至发送country处。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。')
            # time.sleep(1)

            """文书数量：15"""
            button_ = wait.until(EC.presence_of_element_located((By.XPATH, '//div[@class="left_7_3"]/div/select')))
            button_.click()
            # time.sleep(1)
            button_ = wait.until(
                EC.element_to_be_clickable((By.XPATH, '//div[@class="left_7_3"]/div/select/option[3]')))
            button_.click()

            """目的：减少遍历次数，进行页数遍历"""
            time.sleep(1)
            condition = browser.find_element_by_xpath('//div[@class="LM_con clearfix"]/div[@class="fr '
                                                      'con_right"]/span')
            print(condition.text)  # 不能直接//text()原因不明
            conditions = math.ceil(int(condition.text) / 15)  # 最长12，最短6
            print(conditions)

            if int(condition.text) == 0:
                browser.quit()
            elif int(conditions) > 40:  # condition本身已经除了15
                condition_ = 40
                with open('../数据清洗模块/第三次超过600页.txt', 'a+', encoding='utf-8')as file:
                    file.write('出现超过600条的裁判文书,其所在区域为：' + str(county) + '，其数量为：' + str(condition.text)
                               + str(keyword) + '\n')
                logging.warning('出现超过600条的裁判文书,其所在区域为：' + str(county) + '，其数量为：' + str(condition.text)
                                + str(keyword) + '\n')

                for index in range(int(condition_)):
                    # time.sleep(1)
                    # logging.info('运行至遍历处。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。')
                    """由于不明原因而需要两次移动"""
                    try:

                        # 确保点击有效,回到上方
                        # pyautogui.scroll(10000000)
                        '''全选的点击'''
                        time.sleep(1)
                        click_1 = wait.until(EC.element_to_be_clickable(
                            (By.XPATH, '//div[@class="LM_tool clearfix"]/div[4]/a[1]/label')))
                        # time.sleep(1)
                        click_1.click()

                        '''批量下载的点击'''
                        click_2 = wait.until(
                            EC.element_to_be_clickable((By.XPATH, '//html/body/div/div[4]/div[2]//div['
                                                                  '@class="LM_tool clearfix"]/div[4]/a[3]')))
                        click_2.click()
                        """弹出框确认点击"""
                        pyautogui.moveTo(505, 410)
                        pyautogui.click()
                        pyautogui.moveTo(765, 465)
                        pyautogui.click()

                        print('第%d页下载成功============================================' % index)

                        browser.execute_script('window.scrollTo(0,document.body.scrollHeight)')
                        # 确保点击有效,回到上方

                        # pyautogui.scroll(-10000000)
                        """下一页的点击"""
                        button_ = wait.until(
                            EC.element_to_be_clickable((By.XPATH, '//div[@class="left_7_3"]/a[last()]')))
                        # time.sleep(1)
                        button_.click()





                    except:
                        print('第%d页出现缺失' % index)
                        pass


            else:
                for index in range(conditions):

                    """由于不明原因而需要两次移动"""
                    try:

                        # 确保点击有效,回到上方
                        # pyautogui.scroll(10000000)
                        '''全选的点击'''
                        time.sleep(1)
                        click_1 = wait.until(
                            EC.element_to_be_clickable(
                                (By.XPATH, '//div[@class="LM_tool clearfix"]/div[4]/a[1]/label')))

                        click_1.click()

                        '''批量下载的点击'''
                        click_2 = wait.until(
                            EC.presence_of_element_located((By.XPATH, '//html/body/div/div[4]/div[2]//div['
                                                                      '@class="LM_tool clearfix"]/div[4]/a[3]')))
                        click_2.click()
                        """弹出框确认点击"""
                        pyautogui.moveTo(505, 410)
                        pyautogui.click()
                        pyautogui.moveTo(765, 465)
                        pyautogui.click()

                        print('第%d页下载成功============================================' % index)

                        browser.execute_script('window.scrollTo(0,document.body.scrollHeight)')
                        # 确保点击有效,回到上方

                        # pyautogui.scroll(-10000000)
                        """下一页的点击"""
                        button_ = wait.until(
                            EC.element_to_be_clickable((By.XPATH, '//div[@class="left_7_3"]/a[last()]')))
                        # time.sleep(1)
                        button_.click()


                    except:
                        print('第%d页出现缺失' % index + str(county))
                        pass

        except:
            print(county + ': 第%d个缺失数据' % index_)
            index_ += 1
            browser.quit()
        browser.quit()
    except:
        browser.quit()
    print("成功退出---------------------------------------------------------")





def main(keyword):
    """主函数遍历页数"""
    path = 'J:\PyCharm项目\项目\中国裁判文书网\selenium路线\数据清洗模块\传入参数_区县\城市区县补全.txt'
    with open(path,'r',encoding='utf-8')as f:
        contents = f.readlines()
        index_ = 0
        for i in contents:
            """正则内容提取
            pattern = re.compile("区域为：(.*?)，其")
            country = re.search(pattern, i).group(1)
            logging.info(country)
            """
            try:
                content_change(i.strip(),index_,keyword)

              # 不能减1，因为不会到6
            except:
                browser = webdriver.Firefox()
                browser.quit()
                print("成功退出---------------------------------------------------------")







if __name__ == "__main__":
    keywords=['注册商标']
    for keyword in keywords:
        main(keyword)

