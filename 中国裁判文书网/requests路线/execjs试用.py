# -*-  coding: utf-8 -*-
# Author: cao wang
# Datetime : 2020
# software: PyCharm
# 收获:
import execjs
import js2py
print(execjs.get().name)
add = js2py.eval_js("""function add(x, y) {
        return x + y;
  }
""")
#print(add)