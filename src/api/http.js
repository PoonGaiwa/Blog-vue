/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-31 17:04:03
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-02 22:07:23
 * @FilePath: \vue-blog\src\api\http.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import service from './common'
import store from 'store'
import vuex from '@/store/index'
import base from '@/config/base.config'
import API_LIST from '@/config/api.config'
import encrypt from '@/util/encrypt'
const { TOKENNAME } = base
// 请求处理
export default async function Http({ type, data }) {
  if (!(type in API_LIST)) {
    throw new Error('API请求错误')
  }
  let { url, method, noMessage = false, rsaKey = false, setToken = false, rest = false } = API_LIST[type]
  try {
    method = method.toLowerCase()
    if (rest) {
      let restSymbol = url.match(/:(.*)$/)[1]
      url = url.replace(/:(.*)$/, data[restSymbol]);
    }
    if (rsaKey && data[rsaKey]) {
      data[rsaKey] = await encrypt(data[rsaKey])
    }
    data = method === 'get' ? { params: data } : data
    let result = await service[method](url, data)
    console.log(result);
    if (setToken) {
      let token = result.data.token
      let uid = result.data.userId
      // 本地存储token
      store.set(TOKENNAME, token);
      store.set('uid', uid)
      vuex.dispatch('login')
    }
    return result
  } catch (err) {
    if (err.response) {
      let message = err.response.data.message
      if (!noMessage) {
        this.$notify.error({
          title: '错误',
          message
        })
      }
    }
  }
}