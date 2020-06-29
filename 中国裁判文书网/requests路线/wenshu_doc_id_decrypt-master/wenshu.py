import execjs
import re

from aes_decrypt import aes_decode


def py_execjs(js, file_):
    node = execjs.get()
    content = open(file_, encoding='utf-8', errors='ignore').read()
    ctx = node.compile(content)
    result = ctx.eval(js)
    return result


def get_b64_data_unzip(str_):
    js_func = 'unzip("{}")'.format(str_)
    b64_data = py_execjs(js=js_func, file_='b64_unzip.js')
    return b64_data


# 获取aes的key
def get_aes_key(str_):
    b64_data_unzip = get_b64_data_unzip(str_)
    str1, str2 = re.findall('\$hidescript=(.*?);.*?\((.*?)\)\(\)', b64_data_unzip)[0]
    js_func = str2.replace('$hidescript', str1)
    aes_key = execjs.eval(js_func)
    if not aes_key:
        # windows下有时execjs执行的js函数会跟浏览器控制台执行有差别，此时使用js2py包，缺点是运行的慢
        import js2py
        aes_key = js2py.eval_js(js_func)
    aes_key = re.findall('com.str._KEY=\"(.*?)\";', aes_key)[0]
    return aes_key


# aes解密
def aes_decrypt(str_, aes_key):
    js_func = 'DecryptInner("{}")'.format(str_)
    # 获取加密过的文本
    text_encrypted = py_execjs(js=js_func, file_='aes.js')
    # aes解密
    text_decode = aes_decode(text_encrypted, aes_key)
    return text_decode


# 程序运行入口，解密"文书ID"
def doc_id_decyrpt(run_eval, doc_id_src):
    # 通过"RunEval" 解密aes的key, iv为常量'abcd134556abcedf'
    aes_key = get_aes_key(run_eval)
    # 文书id预处理
    doc_id__b64_unzip = get_b64_data_unzip(doc_id_src)
    # 连续两次aes解密
    result1 = aes_decrypt(doc_id__b64_unzip, aes_key)
    result2 = aes_decrypt(result1, aes_key)
    return result2


if __name__ == '__main__':
    # "RunEval"
    run_eval = 'w61Zw5vCjsKCMBDDvRbCjA9tw5jDrA8Qwp/DvMKEfcKcNMOEw6DCjQdlU8OZJ8Ojwr8vwqAiwpcqIG3Ct8KrJyFjwpjDjsOlw4zCmU5Jw6N0Gy9XwodIw4bDn8Opw6wrwpXDsX7Ds8K5wpbDiW7Cvl3DiHnCslwxw5/Ds0lAOC0+QALDhHvDrMKQVyjDpE3DhhXCpxJ6CwHDnsOBLATCugfDhsOQXMKwwoPDksOBBMKIAQnDoARVwqNgw5QPwp5QHEpCByDCsBHDnBA8CMOCw5kkSsO2wodUw75EaSInQUjCocOIHsOGw7zDoyk3K8Kfw6PCicOTw5nCkzIhwoTDj8K8YsKBUz1mwr7DkMK9UsK8Tm9/w4cTw4vDlcKZBXnDuQoJw4p+GgnDq8Omw57DhcOhfsKyBm7CpcOtQ0zDlWhqfcKZwqpAw53CpsKoBUFZw4PCg8OYJcOIfsKMVl47YcO3wrQYYjbDmMO2OcKHEV5jXcK1w7jDqwtSw5/DqsOXwqkxwpDCoz1TT2rCtQIyFsKzOXbCmsO7ZQzCsDkmw67CnnBqwr3Di1xpwp8Kw61DNsKMa8Kjw5NvagjCjDFpFsKiwq0Uw6VWwrBzwobDvnnCqcO/wqV1VsO5w6jDjmgfwo7CscK0w7bChgp5XiHDtwUAa1x4el3Dp1xjSXFxa8OVRcK1wo/CvFpbDUgjwq7Cnm7DsAYowoIzHsO8Ag=='
    doc_id_src = 'FcONwrcRA0EMw4DDgMKWw6hNeHTDvcKXwqRXwr4DcHjCkcKJYMOBwqAlwrDDuD5ywqsdw7PDq8OIO8OsQsOQPsKKw7DChltIw4dZH8KewqFpZFbCnT/CnScrwq58OBVbw5p4woTCvlDCjMKCWVfDt8Kxb8KlEsO3CsKYwpjDu8O7MMO0wpY0w4sxKEfCi8K9eQjDm8KNwohVd8K1w6/Dq8O5wrpJw5UrOjvDqjZDIsOMSMOIwrDCksODw6R8wqDDiTvCqMOtdwRLw6E/'
    result = doc_id_decyrpt(run_eval, doc_id_src)
    print(result)
