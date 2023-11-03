<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-11-02 23:48:10
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-03 14:33:06
 * @FilePath: \vue-blog\src\components\base\BaseArticleContent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog-article-wrap">
    <article class="blog-article typo" id="router-view">
      <div class="blog-article--head">
        <h1 class="blog-article--title">{{ title }}</h1>
        <el-row class="blog-article--info" type="flex">
          <el-col class="blog-info--basic">
            <div>
              来自作者：<span class="blog-article--author">{{ nickname }}</span>
            </div>
          </el-col>
          <el-col class="blog-article--tags hidden-xs-and-down">
            <span class="blog-article--like iconfont icon-browse">{{
              hits_num
            }}</span>
            <span class="blog-article--like iconfont icon-like">{{
              like_num
            }}</span>
            <span class="blog-article--comment iconfont icon-comment">{{
              comment_num
            }}</span>
          </el-col>
        </el-row>
        <div v-show="date" class="blog-article--date">
          文章发表：<span>{{ date }}</span>
        </div>
      </div>
      <div class="blog-article--content" v-html="content"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: "BaseArticleContent",
  props: {
    article: {
      type: Object,
    },
  },
  computed: {
    title() {
      return this.article.title;
    },
    author() {
      return this.article.author;
    },
    hits_num() {
      return this.article.hits_num;
    },
    like_num() {
      return this.article.like_num;
    },
    comment_num() {
      return this.article.comment_num;
    },
    date() {
      return this.article.date;
    },
    content() {
      return this.article.content;
    },
    nickname() {
      return this.author?.nickname || "无名氏";
    },
  },
};
</script>

<style lang="stylus">
@import '@/assets/css/global.styl';
@import '@/assets/css/base.styl';
@import '@/assets/css/typo.css';

@font-face {
  font-family: 'iconfont';
  src: url('@/assets/icon/iconfont.woff2?t=1697774086716') format('woff2'), url('@/assets/icon/iconfont.woff?t=1697774086716') format('woff'), url('@/assets/icon/iconfont.ttf?t=1697774086716') format('truetype');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-write:before {
  content: '\e60e';
}

.icon-comment:before {
  content: '\e601';
}

.icon-like:before {
  content: '\ec7f';
}

.icon-browse:before {
  content: '\e816';
}

.blog-article-wrap {
  box-sizing: border-box
  max-width: 1000px;
  border: 1px solid bg-body-color;
  border-radius: 4px;
  box-shadow: 0 0 1px border-main-color inset;
  background-color: bg-main-color;

  @media screen and (min-width: 1200px) and (max-width: 1650px) {
    margin-right: 40px;
  }

  @media screen and (max-width: 1200px) {
    max-width: 100%;
    margin: 0 20px;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
  }
}

.blog-article {
  margin: margin-space;
  padding: 0 padding-space * 3;
  color: font-common-color;

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-weight: 700;
    margin-top: 1.2em;
    margin-bottom: 0.6em;
    line-height: 1.35;
  }
}

.blog-article--head {
  margin-bottom;
}

.blog-article--title {
  margin: 0;
  padding: 0;
}

.blog-article--author {
  color: theme-color;
}

.blog-article--info {
  padding: padding-space * 2;
  margin: 0 margin-space;
  background-color: bg-body-color;

  div {
    padding: 0;
  }
}

.blog-article--content {
  padding: (padding-space * 3) padding-space;
  width: 100%;

  img {
    left: 0;
    right: 0;
    margin: (margin-space * 2) auto;
    display: block;
    width: 50% !important;
    height: auto;
  }
}

.blog-info--basic {
  text-align: left;
  font-size: 14px;

  span {
    &:not(:last-of-type) {
      padding-right: padding-space;
    }
  }
}

.blog-article--tags {
  text-align: right;

  span {
    color: font-writeplace-color;

    &::before {
      padding-right: padding-space * 0.5;
    }

    &:not(:last-of-type) {
      padding-right: padding-space * 4;
    }
  }
}

.blog-article--date {
  margin-top: margin-space * 2;
  color: font-writeplace-color;
  font-size: 14px;
  text-align: center;
}
</style>