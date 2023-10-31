/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-31 17:15:40
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-10-31 18:07:25
 * @FilePath: \vue-blog\src\util\encrypt.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import store from 'store'
import JSEncrypt from 'jsencrypt'
import base from '@/config/base.config'
import service from '@/api/common'
const { PUBKEYNAME } = base
// 加密函数
export default async function encrypt(data) {
  let key = store.get(PUBKEYNAME)
  try {
    if (!key || key === 'undefined') {
      // 本地获取pubkey
      let result = await service.get('/key')
      key = result.data.pubKey
      key = key.replace(/\. +/g, '')
      key = key.replace(/[\r\n]/g, '')
      store.set(PUBKEYNAME, key)
    }
    let encrypt = new JSEncrypt()
    encrypt.setPublicKey(key)
    return encrypt.encrypt(data)
  } catch (err) {
    console.log(err);
  }
}