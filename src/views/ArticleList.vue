<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 20:40:39
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-02 00:09:17
 * @FilePath: \vue-blog\src\views\ArticleList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%
-->
<template>
  <div>
    <div v-if="articleList" class="article-wrap">
      <el-card
        v-for="item in articleList"
        :key="item.id"
        class="blog-article--item"
      >
        <CardArticleItem :article="item" />
      </el-card>
    </div>
  </div>
</template>

<script>
import CardArticleItem from "@/components/card/CardArticleItem.vue";
export default {
  name: "ArticleListView",
  components: { CardArticleItem },
  data() {
    return {
      articleList: [],
    };
  },
  created() {
    this.$api({ type: "articles" })
      .then((result) => {
        this.articleList = result.data.list;
      })
      .catch((err) => {
        this.$notify.error({
          title: "错误",
          message: err.message,
        });
      });
  },
};
</script>

<style lang="stylus">
.article-wrap {
  position: relative;
  min-height: 80vh;
  max-width: 1000px;

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

.blog-article--item {
  &:not(nth-of-type) {
    margin-bottom: 10px;
  }
}

.el-card__body {
  background-color: bg-main-color;
  padding: 0;
}
</style>