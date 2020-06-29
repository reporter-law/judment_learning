import os
import glob
import pprint

index = 1
print("开始运行中------------------------------")
path = r"F:\360下载\doc(第二次）".strip("\u202a")
doc_and_docx_list = os.listdir(path)
print("总长度为： " ,len(doc_and_docx_list))
print("文件夹的大小： " ,str(os.path.getsize(path)/float(1024*1024)) + "MB")
frequence = []
for i in doc_and_docx_list:
    #print(i.split(".")[1])
    if i.split(".")[1] =="docx":
        frequence.append(i)
        i_= i.split(".")[0] +".doc"
        frequence.append(i_)
        index += 1
len_ = os.listdir(r"F:\360下载\docx(第二次)".strip('\u202a'))
print("docx文档一共： ",index + len(len_))
print("写入文档长度： ",len(frequence))
def writer():
    for i in frequence:
        with open("docx已经有的.txt","a",encoding="utf-8")as f:
            f.write(os.path.join(path,i)+"\n")
            """必须要os.path.join(),否者无法匹配"""
#writer()

def tests(path):
    index = 1
    list = []
    with open("J:\PyCharm项目\项目\中国裁判文书网\selenium路线\数据清洗模块\文书由doc转为docx\docx已经有的.txt", "r", encoding="utf-8")as f:
        list_ = f.readlines()
        #pprint.pprint(list_)
        for path_ in glob.glob(os.path.join(path, "*")):
            path1 = path_+"\n"
            list.append(path1)
        #pprint.pprint(list)
            if path1 in list_:
                print("重复跳过中")


output_files = r"F:\360下载\doc(第二次）"
path = output_files.strip('\u202a')
#tests(path)