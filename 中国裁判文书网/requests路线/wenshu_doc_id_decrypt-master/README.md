# wenshu_doc_id_decrypt
首先安装pycryptodome, 取代pycrypto，pycrypto各种坑
```
pip install pycryptodome
```
如果本地没有安装node.js, 需要安装js2py，但是js2py执行速度慢，js2py的安装
```
pip install Js2Py
```
列表页获取方式见 [中国裁判文书网爬虫分析](https://blog.csdn.net/shuishou07/article/details/82414806)

将列表页获取的"RunEval" 和 "文书ID" 这两个字段作为wenshu.py中函数doc_id_decyrpt(run_eval, doc_id_src)的入参，可解DocID
