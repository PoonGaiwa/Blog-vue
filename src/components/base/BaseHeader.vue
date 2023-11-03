<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-31 21:52:20
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-03 14:08:10
 * @FilePath: \vue-blog\src\components\base\BaseHeader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-31 21:52:20
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-10-31 23:32:08
 * @FilePath: \vue-blog\src\components\base\BaseHeader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-header class="blog-header" height="60px">
    <el-row
      class="blog-header--wrap"
      type="flex"
      justify="center"
      align="middle"
    >
      <el-col :span="2" :xs="{ span: 24 }">
        <div class="blog-logo">
          <el-image
            class="blog-logo--figure"
            :src="require('../../assets/img/logo.png')"
            fit="cover"
          ></el-image>
        </div>
      </el-col>
      <el-col :span="16" :offset="2" class="hidden-xs-only">
        <el-menu
          class="blog-head--menu"
          mode="horizontal"
          text-color="#fafafa"
          default-active="/index"
          router
        >
          <el-menu-item index="/index">首页</el-menu-item>
          <el-menu-item index="/columns">分类</el-menu-item>
          <el-menu-item index="/cases">相册</el-menu-item>
          <el-menu-item index="/cases">案例</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4" class="hidden-xs-only">
        <component :is="loginComponent"></component>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import UserLoginHead from "@/components/user/UserLoginHead";
import UserImgAvatar from "@/components/user/UserImgAvatar";
import { mapGetters } from "vuex";
export default {
  name: "BaseHeader",
  components: {
    UserLoginHead,
    UserImgAvatar,
  },
  created() {
    let isLogin = this.$store.state.token;
    let nickName = this.userInfo?.nickName;
    if (isLogin && !nickName) {
      this.$store.dispatch("getUserInfo");
    }
  },
  computed: {
    loginComponent() {
      return this.$store.state.token ? "UserImgAvatar" : "UserLoginHead";
    },
    ...mapGetters(["userInfo"]),
  },
};
</script>

<style lang="stylus">
@import '@/assets/css/global.styl';
@import '@/assets/css/base.styl';

.blog-header {
  display: flex;
  align-items: center;
  background-color: bg-head-color;
  color: font-head-color;
}

.blog-header .blog-head--menu {
  background-color: transparent;
  border: 0;
}

.blog-header .blog-head--menu .el-menu-item {
  font-size: 16px;
}

.blog-header .blog-head--menu .el-menu-item:hover {
  background-color: transparent;
  color: darken(font-head-color, 15%) !important;
}

.blog-header .blog-head--menu .el-menu-item:focus {
  background-color: transparent;
  color: font-head-color;
}

.el-menu--horizontal > .el-menu-item.is-active {
  color: font-head-color;
  border-bottom: 2px solid font-head-color;
}

.blog-header--wrap {
  width: 100%;
  box-sizing: border-box;
}

.blog-logo {
  text-align: center;
  margin: 0 auto;
  height: 50px;
  width: 50px;
}

.blog-logo--figure {
  height: 50px;
  width: 50px;
}

.blog-header--login {
  text-align: center;
}
</style>