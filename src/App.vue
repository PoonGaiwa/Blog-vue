<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 18:50:11
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-07 16:40:45
 * @FilePath: \vue-blog\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  created() {
    if (this.$route.name !== "index") {
      this.$router.push("/index");
    }
  },
};
</script>

<style lang="stylus">
html, body {
  overflow: hidden;
  height: 100vh;
}
</style>
