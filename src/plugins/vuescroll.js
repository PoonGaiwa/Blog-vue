/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-11-02 19:09:46
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-02 20:00:24
 * @FilePath: \vue-blog\src\plugins\vuescroll.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import vuescroll from "vuescroll";

Vue.use(vuescroll, {
  ops: {
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: true,
      keepShow: false,
      background: '#c1c1c1',
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: false,
      size: '6px',
      disable: false,
    }
  },
  name: 'Scroll'
})
