import os,glob
path = r"F:\360下载\doc(第二次）".strip('\u202a')
print(type(glob.glob(os.path.join(path, "*"))))
"""结论： 是列表"""
