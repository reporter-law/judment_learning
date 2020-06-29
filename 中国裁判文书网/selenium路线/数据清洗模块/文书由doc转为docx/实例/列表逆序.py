import numpy as np
list_ = []

for i in range(10):
    list_.append(i)
for i in list_:
    print(i,end=",")
print("\n")
for i in list_[::-1]:
    print(i,end=",")

print("\n")
"""第二种方法"""
print(list(reversed(list_)))