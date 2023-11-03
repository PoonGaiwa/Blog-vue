<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 20:40:39
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-03 17:25:46
 * @FilePath: \vue-blog\src\views\ArticleList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%
-->
<template>
  <div v-if="articleList" class="article-wrap">
    <el-card
      v-for="item in articleList"
      :key="item._id"
      class="blog-article--item"
    >
      <router-link :to="{ name: 'article', params: { id: item._id } }">
        <CardArticleItem :article="item"></CardArticleItem>
      </router-link>
    </el-card>
  </div>
</template>

<script>
import CardArticleItem from "@/components/card/CardArticleItem.vue";
export default {
  name: "ArticleListView",
  components: { CardArticleItem },
  props: {
    loading: {
      type: Boolean,
    },
  },
  data() {
    return {
      articleList: [],
      page: 1,
      size: 4,
      scrollTop: 0,
    };
  },
  created() {
    this.getArticles();
  },
  inject: ["closeLoadClock"],
  computed: {},
  watch: {
    loading(load) {
      if (load) {
        this.getArticles();
      }
    },
  },
  methods: {
    getArticles() {
      this.$api({
        type: "articles",
        data: { size: this.size, page: this.page },
      })
        .then((result) => {
          if (this.articleList.length >= result.total) {
            console.log("没有更多了");
            return;
          }
          this.articleList.push(...result.data.list);
          this.closeLoadClock();
          this.page++;
        })
        .catch((err) => {
          this.$notify.warning({
            title: "获取失败",
            message: err.message,
          });
        });
    },
  },
};
</script>

<style lang="stylus">
.article-wrap {
  position: relative;
  height: 80vh;
  width: 100%;

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