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
@import '@/assets/css/global.styl';
@import '@/assets/css/base.styl';

.blog-header--login {
  span {
    cursor: pointer;
    &:hover{
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