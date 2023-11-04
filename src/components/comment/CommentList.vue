<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-11-03 14:10:48
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-03 15:36:09
 * @FilePath: \vue-blog\src\components\comment\CommentList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog-comment blog-comment--list">
    <ul>
      <li
        v-for="comment in comments"
        :key="comment._id"
        class="blog-comment--item"
      >
        <div class="blog-comment--avatar">
          <img :src="comment.uid?.avatar" alt="!" />
        </div>
        <div class="blog-comment--info">
          <span class="blog-comment--username">{{
            comment.uid?.nickname
          }}</span>
          <span class="blog-comment--content" v-html="comment.content"></span>
          <span class="blog-comment--date">{{ comment.date }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CommentList",
  props: {
    comments: {
      type: Array,
    },
  },
};
</script>

<style lang="stylus">
@import '@/assets/css/base.styl';

.blog-comment--list {
  li {
    &:not(:last-of-type) {
      border-bottom: 1px solid border-grey-color;
    }
  }
}

.blog-comment--item {
  display: flex;
  padding: padding-space * 4 (padding-space * 10);
}

.blog-comment--avatar {
  padding-right: padding-space;

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
}

.blog-comment--info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
}

.blog-comment--username {
  height: 40px;
  color: font-common-color;
  margin-bottom: margin-space;
}

.blog-comment--content {
  color: font-common-color;
  margin-bottom: margin-space * 2;
}

.blog-comment--date {
  color: font-writeplace-color;
}
</style>