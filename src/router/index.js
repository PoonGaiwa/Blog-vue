import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import ArticleList from '../views/ArticleList.vue'
import Column from '../views/Column.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      { path: '/columns', component: Column },
      { path: '/article/:id', component: Article },
      { path: '/articles', component: ArticleList }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
