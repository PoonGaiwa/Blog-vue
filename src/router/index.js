/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 20:39:16
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-01 18:17:04
 * @FilePath: \vue-blog\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import ArticleList from '../views/ArticleList.vue'
import Column from '../views/Column.vue'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: Home,
    children: [
      { path: '/index', component: ArticleList },
      { path: '/columns', component: Column, meta: { requiresAuth: true } },
      { path: '/article/:id', component: Article, },
    ]
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  nprogress.start()
  let userAuth = to.meta.requiresAuth
  if (userAuth) {
    if (!store.state.token || store.state.token === '') {
      Vue.prototype.$notify.warning({
        title: '通知',
        message: '请先登录'
      })
      next('/index')
    }
  }
  next()
})

router.afterEach(() => {
  nprogress.done()
})

export default router
