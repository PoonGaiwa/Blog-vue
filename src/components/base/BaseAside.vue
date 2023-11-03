<template>
  <el-card class="blog-aside">
    <div class="blog-avatar">
      <img class="blog-avatar--pic" :src="userInfo.avatar" alt="!" />
    </div>
    <div class="blog-info">
      <h2 class="blog-info--nickname">{{ userInfo.nickname }}</h2>
      <div class="blog-info--state">
        <a class="blog-state--item"
          ><span>{{ userInfo.articleCount }}</span
          ><span>文章</span></a
        >
        <a class="blog-state--item"
          ><span>{{ userInfo.columnCount }}</span
          ><span>分类</span></a
        >
      </div>
      <p class="blog-info--desc">{{ userInfo.signature }}</p>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BaseAside",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
};
</script>

<style lang="stylus">
@import '@/assets/css/global.styl';
@import '@/assets/css/base.styl';

.blog-aside {
  // margin-right: margin-space * 6;
  padding: (padding-space * 6) 0;
  max-width: 300px;
  box-shadow: 0 0 2px border-main-color;
  border-radius: border-radius-default * 1.5;
  background-color: bg-main-color;
}

.blog-avatar {
  overflow: hidden;
  text-align: center;

  &>img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    user-select: none;
  }
}

.blog-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.blog-info--nickname {
  font-size: 24px;
  padding: padding-space * 3 0;
}

.blog-info--state {
  display: flex;
  justify-content: center;
  user-select: none;
}

.blog-state--item {
  display: flex;
  flex-direction: column;
  align-items: center;

  &>span {
    padding: padding-space * 0.5;
  }

  &:hover {
    color: theme-color;
  }

  &:not(:nth-of-type(1)) {
    margin-left: margin-space;
    padding-left: padding-space;
    border-left: 1px solid font-common-color;
  }
}

.blog-info--desc {
  margin-top: margin-space * 3;
}
</style>