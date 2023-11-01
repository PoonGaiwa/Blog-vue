<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 20:39:16
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-01 23:16:30
 * @FilePath: \vue-blog\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog-page">
    <el-container class="blog-container">
      <BaseHeader />
      <el-row class="blog-content">
        <el-col
          :lg="{ span: 8, offset: 1 }"
          :xl="{ span: 6, offset: 2 }"
          class="hidden-md-and-down"
        >
          <BaseAside v-if="$store.state.token" />
        </el-col>
        <el-col :lg="15" :xl="16">
          <el-main class="blog-main">
            <router-view></router-view>
          </el-main>
        </el-col>
      </el-row>
      <el-footer class="blog-footer" height="10vh">底部</el-footer>
    </el-container>
    <BaseModal />
  </div>
</template>

<script>
import BaseModal from "@/components/base/BaseModal";
import BaseHeader from "@/components/base/BaseHeader.vue";
import BaseAside from "@/components/base/BaseAside.vue";
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {
    BaseModal,
    BaseHeader,
    BaseAside,
  },
  data() {
    return {};
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
  margin-top: margin-space * 6;
  height: 80vh;
}

.blog-main {
  padding: 0;
}

.blog-footer {
  margin-top: auto;
  background-color: theme-color;
}
</style>