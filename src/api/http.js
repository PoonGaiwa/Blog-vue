import service from './common'
import store from 'store'
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
    // console.log(111);
    console.log(rsaKey);
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
    }
    return result
  } catch (err) {
    if (err.response) {
      let message = err.response.data.message
      if (!noMessage) {
        console.log(message);
      }
    }
  }
}