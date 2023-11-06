/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-31 00:02:16
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-06 15:07:53
 * @FilePath: \vue-blog\src\store\modules\modal.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  namespaced: true,
  state: {
    isShow: false,
    type: ''
  },
  getters: {
  },
  mutations: {
    CLOSE(state) {
      state.isShow = false
      state.type = ''
    },
    OPEN(state) {
      state.isShow = true
    },
    CHANGE_TYPE(state, payload) {
      state.type = payload.type
    }
  },
  actions: {
    close({ commit }) {
      commit('CLOSE')
    },
    open({ commit }, type) {
      commit('CHANGE_TYPE', { type })
      commit('OPEN')
    },
    confirm() {
      // console.log('');
    }
  },
  modules: {
  }
}