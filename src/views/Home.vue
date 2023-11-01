<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 20:39:16
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-10-31 21:52:38
 * @FilePath: \vue-blog\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog-page">
    <el-container class="blog-container">
      <BaseHeader />
      <el-container class="blog-content">
        <el-aside class="blog-aside" width="30%">侧边栏</el-aside>
        <el-main class="blog-main">
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer class="blog-footer" height="10vh">底部</el-footer>
    </el-container>
    <BaseModal />
  </div>
</template>

<script>
import BaseModal from "@/components/base/BaseModal";
import BaseHeader from "@/components/base/BaseHeader.vue";
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {
    BaseModal,
    BaseHeader,
  },
  data() {
    return {};
  },
  created() {
    let isLogin = this.$store.state.token;
    if (isLogin) {
      this.$store.dispatch("getUserInfo");
    }
  },
  methods: {},
};
</script>
<style lang="stylus">
@import '@/assets/css/global.styl';
@import '@/assets/css/base.styl';

.blog-container {
  overflow: hidden;
  height: 100%;
}

.blog-content {
  height: 80vh;
  background-color: #f1f1f1;
}

.blog-footer {
  margin-top: auto;
  background-color: theme-color;
}
</style>