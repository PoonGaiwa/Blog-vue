<template>
  <div>
    <article class="blog-content--item">
      <a
        class="blog-content-link"
        href="javascript:;"
        data-router="article"
        :data-article-id="id"
      >
        <h3 class="blog-item--title">{{ title }}</h3>
        <div class="blog-item--info">
          <p class="blog-item--author">{{ nickname }}</p>
          <p class="blog-item--date">{{ date }}</p>
        </div>
        <img class="blog-item--illustration" :src="cover" alt="!" />
        <p class="blog-item--desc">{{ content }}</p>
        <div class="blog-item--tags">
          <span class="blog-tags--like">浏览({{ hits_num }})</span>
          <span class="blog-tags--like">点赞({{ like_num }})</span>
          <span class="blog-tags--comment">评论({{ comment_num }})</span>
        </div>
      </a>
    </article>
  </div>
</template>

<script>
export default {
  name: "CardArticleItem",
  props: {
    article: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  computed: {
    id() {
      return this.article._id;
    },
    title() {
      return this.article.title;
    },
    nickname() {
      return this.article.author?.nickname || "默认昵称";
    },
    date() {
      return this.article.date;
    },
    cover() {
      return this.article.cover;
    },
    content() {
      let content = this.article.content.match(/>([^<>]+)</)?.[1];
      return content || "默认内容";
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
  },
  mounted() {},
};
</script>

<style lang="stylus">
@import '@/assets/css/base.styl';

.blog-content--item {
  border-radius: border-radius-default * 0.5;
  box-shadow: 0 0 1px border-main-color;
  text-align: center;
  color: font-main-color;
}

.blog-content-link {
  display: block;
  background-color: bg-main-color;
  transition: 0.3s;
  color: #999;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 3px theme-color inset;
    color: font-common-color;
  }
}

.blog-item--title {
  padding-top: padding-space * 3;
  font-size: font-size-h * 1.5;
}

.blog-item--info {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: font-size-p;
  padding-bottom: padding-space * 2;

  &>p {
    &:not(:last-of-type) {
      padding-right: padding-space;
    }
  }
}

.blog-item--illustration {
  height: 220px;
  width: auto;
  padding: padding-space;
}

.blog-item--desc {
  padding: padding-space * 3;
  text-align: left;
  text-indent: 2em;
}

.blog-item--tags {
  display: flex;
  justify-content: flex-end;
  padding: padding-space * 2;
}

.blog-tags--like {
  padding-right: padding-space;
}

.blog-tags--like, .blog-tags--comment {
  &:hover {
    color: theme-color;
  }
}

.blog-content-never {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}

.blog-item-btn {
  display: block;
  padding: padding-space * 2 0;

  &:hover {
    font-weight: 500;
    color: theme-color;
  }
}
</style>