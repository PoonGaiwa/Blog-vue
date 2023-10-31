<template>
  <div class="blog-header--login">
    <span @click="refreshModal('login')">登录</span>/<span
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

<style>
</style>