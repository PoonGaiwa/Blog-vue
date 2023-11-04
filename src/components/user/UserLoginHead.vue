<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-31 20:48:55
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-04 19:21:30
 * @FilePath: \vue-blog\src\components\user\UserLoginHead.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog-header--login">
    <span @click="refreshModal('login')">登录</span>|<span
      @click="refreshModal('register')"
      >注册</span
    >
  </div>
</template>

<script>
import MINXIN from "@/core/minxin";
export default {
  name: "UserLoginHead",
  mixins: [MINXIN],
};
</script>

<style lang="stylus">
@import '@/assets/css/base.styl';

.blog-header--login {
  span {
    cursor: pointer;

    &:hover {
      color: darken(font-head-color, 15%);
    }

    &:nth-of-type(1) {
      margin-right: 10px;
    }

    &:nth-of-type(2) {
      margin-left: 10px;
    }
  }
}
</style>