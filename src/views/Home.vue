<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 20:39:16
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-03 13:38:57
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
        <el-col :lg="15" :xl="16" class="blog-main-wrap">
          <el-main class="blog-main">
            <keep-alive include="ArticleListView">
              <router-view></router-view>
            </keep-alive>
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
  height: 100%;
}

.blog-content {
  padding-top: padding-space * 6;
  padding-bottom: padding-space * 3;
  height: calc(100vh - 60px - 10vh);
}

.blog-main-wrap {
  overflow: hidden;
  height: 100%;
}

.blog-main {
  padding: 0;
  height: 100%;
}

.blog-footer {
  margin-top: auto;
  background-color: theme-color;
}
</style>