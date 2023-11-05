/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 18:50:11
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-05 16:51:08
 * @FilePath: \vue-blog\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import '@/assets/css/global.styl';
import 'element-ui/lib/theme-chalk/display.css';
import animated from 'animate.css'

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './plugins/element.js'
import router from './router'
import '@/plugins/http'
import '@/plugins/vuescroll'
Vue.config.productionTip = false
Vue.use(animated)

Vue.prototype.$EventBus = new Vue()

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
