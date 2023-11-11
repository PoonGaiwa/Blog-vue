/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 18:52:07
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-10 18:58:11
 * @FilePath: \vue-blog\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Vuex from 'vuex'
import store from 'store'
import base from '@/config/base.config'
import http from '@/api/http'
import modal from './modules/modal'
import likes from './modules/likes'
const { TOKENNAME } = base
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: store.get(TOKENNAME) || '',
    userInfo: {}
  },
  getters: {
    userInfo(state) {
      if (state.token) {
        return state.userInfo
      }
    }
  },
  mutations: {
    SET_TOKNE(state) {
      state.token = store.get(TOKENNAME)
    },
    SET_USERINFO(state, userInfo) {
      state.userInfo = userInfo.data
    }
  },
  actions: {
    async login({ commit }) {
      commit('SET_TOKNE')
      this.dispatch('getUserInfo')
    },
    async getUserInfo({ commit }) {
      try {
        let userInfo = await http({ type: 'getUserInfo' })
        commit('SET_USERINFO', userInfo)
        Vue.prototype.$notify.success({
          title: '登录成功',
          message: `欢迎你 ${userInfo.data.nickname}`
        })
      } catch (err) {
        console.log(err);
      }
    }
  },
  modules: {
    modal, likes
  }
})
