/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-11-08 10:22:27
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-11 18:11:51
 * @FilePath: \vue-blog\src\store\modules\likes.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import store from 'store'
import base from '@/config/base.config'
import Vue from 'vue'
const { LIKES_NAME } = base
export default {
  // 当前用户点赞文章列表
  namespaced: true,
  state: {
    likes: store.get(LIKES_NAME) || []
  },
  getters: {
    isLike: state => (aid) => {
      return !!(state.likes.includes(aid))
    }
  },
  mutations: {
    CHANGE_LIKES(state) {
      state.likes = store.get(LIKES_NAME)
    },
  },
  actions: {
    pushLike({ commit }, payload) {
      let { aid } = payload
      console.log(aid, '点赞');
      if (aid) {
        let localLikes = store.get(LIKES_NAME) || []
        let idx = localLikes.indexOf(aid)
        if (idx === -1) {
          localLikes.push(aid)
        }
        store.set(LIKES_NAME, localLikes)
        commit('CHANGE_LIKES')
      }
    },
    pullLike({ commit }, payload) {
      let { aid } = payload
      console.log(aid, '取消点赞');
      if (aid) {
        let localLikes = store.get(LIKES_NAME) || []
        let idx = localLikes.indexOf(aid)
        if (idx !== -1) {
          localLikes.splice(idx, 1)
        }
        store.set(LIKES_NAME, localLikes)
        commit('CHANGE_LIKES')
      }
    },
    async sendLikes({ state }, { aid }) {
      
      console.log(state);
      await Vue.prototype.$api({ type: "addArticleLike", data: { id: aid } })
    }
  }
}