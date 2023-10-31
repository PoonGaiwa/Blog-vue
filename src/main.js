/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 18:50:11
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-10-31 21:12:09
 * @FilePath: \vue-blog\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './plugins/element.js'
import router from './router'
import '@/assets/css/global.styl'
import 'element-ui/lib/theme-chalk/display.css';
import httpPlugin from '@/plugins/http'

Vue.config.productionTip = false

Vue.use(httpPlugin)

const MIXIN = {
  created: function () {

  }
}

new Vue({
  mixins: [MIXIN],
  store,
  router,
  render: h => h(App)
}).$mount('#app')
