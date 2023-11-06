<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 20:39:16
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-06 16:40:42
 * @FilePath: \vue-blog\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog-page">
    <el-container class="blog-container">
      <BaseHeader />
      <el-row class="blog-content">
        <el-col :lg="{ span: 6, offset: 1 }" :xl="6" class="hidden-md-and-down">
          <BaseAside v-if="$store.state.token" />
        </el-col>
        <el-col
          :md="{ span: 22, offset: 1 }"
          :lg="{ span: 15, offset: 1 }"
          :xl="{ span: 15, offset: 1 }"
          class="blog-main-wrap"
        >
          <el-main class="blog-main">
            <Scroll ref="scrollView" @handle-scroll="loadContent">
              <router-view v-if="isRouteShow" :loading="loading"></router-view>
            </Scroll>
          </el-main>
        </el-col>
        <el-col :lg="1" :xl="1" v-if="menuList.length">
          <BaseCircleMenu :menuList="menuList"></BaseCircleMenu>
        </el-col>
      </el-row>
      <el-footer class="blog-footer" height="10vh">底部</el-footer>
    </el-container>
    <BaseModal />
  </div>
</template>

<script>
import BaseModal from "@/components/base/BaseModal";
import BaseHeader from "@/components/base/BaseHeader";
import BaseAside from "@/components/base/BaseAside";
import BaseCircleMenu from "@/components/base/BaseCircleMenu";
import menuListConfig from "@/config/menuList.config";
import _ from "lodash";
const TH = 200;

// @ is an alias to /src
export default {
  name: "HomeView",
  components: {
    BaseModal,
    BaseHeader,
    BaseAside,
    BaseCircleMenu,
  },
  data() {
    return {
      loading: false,
      menuList: [],
      scrollTop: 0,
      isRouteShow: true,
    };
  },
  provide() {
    return {
      closeLoadClock: this.closeLoadClock,
    };
  },
  watch: {
    $route(to) {
      this.menuList = menuListConfig[to.name]?.() || [];
      this.reload();
    },
  },
  methods: {
    reload() {
      this.isRouteShow = false;
      this.$nextTick(function () {
        this.isRouteShow = true;
      });
    },
    loadContent: _.throttle(
      function (vertical, horizontal, nativeEvent) {
        this.scrollTop = vertical.scrollTop;
        if (this.loading) {
          return;
        }
        let st = vertical.scrollTop;
        let sh =
          nativeEvent.srcElement.scrollHeight -
          nativeEvent.srcElement.clientHeight;
        if (st + TH > sh) {
          console.log("加载更多");
          this.loading = true;
        }
      },
      500,
      false
    ),
    closeLoadClock() {
      this.loading = false;
    },
  },
  activated() {
    if (this.scrollTop) {
      this.$refs["scrollView"].scrollTo(
        {
          y: this.scrollTop,
        },
        0
      );
    }
  },
};
</script>
<style lang="stylus">
@import '@/assets/css/base.styl';

.blog-container {
  height: 100%;
}

.blog-content {
  padding-top: padding-space * 6;
  padding-bottom: padding-space * 3;
  height: calc(100vh - 60px - 10vh);
  max-width: 1440px;
  width: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.blog-content .blog-main-wrap {
  box-sizing: border-box;
  height: 1000px;
  overflow: hidden;
  height: 100%;
}

.blog-main {
  padding: 0;
  height: 100%;
}

.blog-main--menu {
  color: font-head-color;
  font-size: 20px;
  font-weight: 200;
}

.blog-footer {
  margin-top: auto;
  background-color: theme-color;
}
</style>