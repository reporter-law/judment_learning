from Crypto.Cipher import AES
from binascii import b2a_hex
import base64


class CryptAes():
    def __init__(self, key, iv, mode, pad_mode):
        self.key = key
        self.iv = iv
        self.mode = mode
        self.pad_mode = pad_mode
        self.BS = AES.block_size  # AES.block_size=16

    def encrypt(self, text):
        # 填充个数
        pad_counts = self.BS - len(text) % self.BS
        # 选择填充模式
        if self.pad_mode == 'zeropadding':
            pad_character = chr(0)
        else:
            pad_character = chr(pad_counts)
        pad_text = '{}{}'.format(text, pad_character * pad_counts)

        cryptor = AES.new(self.key, self.mode, self.iv)
        # 目前AES-128 足够目前使用
        ciphertext = cryptor.encrypt(pad_text)
        # 把加密后的字符串转化为16进制字符串
        return b2a_hex(ciphertext).decode(encoding='utf8')

    def decrypt(self, text):
        cryptor = AES.new(self.key, self.mode, self.iv)
        text = base64.b64decode(text.encode(encoding='utf8'))
        plain_text = cryptor.decrypt(text)
        plain_text = plain_text.decode(encoding='utf8').replace('\x0c', '').replace('\x10', '')
        return plain_text


def aes_decode(text, key, iv='abcd134556abcedf'):
    mode = AES.MODE_CBC
    pad_mode = 'pkcs7padding'
    ca = CryptAes(key.encode('utf-8'), iv.encode('utf-8'), mode, pad_mode)  # 初始化密钥 和 iv
    text_decode = ca.decrypt(text)  # 解密
    return text_decode


if __name__ == '__main__':
    pass
