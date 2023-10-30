<template>
  <div class="blog-page">
    <el-container class="blog-container">
      <el-header class="blog-header" height="10vh">
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
                :src="require('../assets/img/logo.png')"
                fit="cover"
              ></el-image>
            </div>
          </el-col>
          <el-col :span="16" :offset="2" class="hidden-xs-only">
            <el-menu class="blog-menu" mode="horizontal" router>
              <el-menu-item index="/">首页</el-menu-item>
              <el-menu-item index="/columns">分类</el-menu-item>
              <el-menu-item index="/articles">文章</el-menu-item>
              <el-submenu index="/">
                <template #title>外链</template>
                <el-menu-item index="/">百度</el-menu-item>
                <el-menu-item index="/">Element UI</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
          <el-col :span="4" class="hidden-xs-only">
            <div class="blog-header--login">
              <span @click="login">登录</span>/<span @click="register"
                >注册</span
              >
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container class="blog-content">
        <el-aside class="blog-aside" width="30%">侧边栏</el-aside>
        <el-main class="blog-main">
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer class="blog-footer" height="10vh">底部</el-footer>
    </el-container>
    <el-dialog
      title="登录"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    login() {
      this.dialogVisible = true;
    },
    register() {
      this.dialogVisible = true;
    },
    handleClose() {
      this.dialogVisible = false;
    },
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style lang="stylus">
.blog-container {
  overflow: hidden;
  height: 100%;
}

.blog-header {
  background-color: #ccc;
  display: flex;
  align-items: center;
}

.blog-header .blog-menu {
  background-color: transparent;
  border: 0;
}

.blog-header--wrap {
  width: 100%;
  box-sizing: border-box;
}

.blog-content {
  height: 80vh;
  background-color: #f1f1f1;
}

.blog-footer {
  margin-top: auto;
  background-color: #ccc;
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