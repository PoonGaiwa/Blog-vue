/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 18:50:11
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-03 00:01:38
 * @FilePath: \vue-blog\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './plugins/element.js'
import router from './router'

import 'element-ui/lib/theme-chalk/display.css';
import '@/plugins/http'
import '@/plugins/vuescroll'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
