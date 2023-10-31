/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-31 21:10:23
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-10-31 21:10:58
 * @FilePath: \vue-blog\src\core\minxin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  methods: {
    refreshModal(type) {
      this.$store.dispatch("modal/open", type);
    },
  }
}