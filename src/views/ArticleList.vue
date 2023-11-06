<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 20:40:39
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-06 16:57:47
 * @FilePath: \vue-blog\src\views\ArticleList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%
-->
<template>
  <div class="article-wrap">
    <div v-if="hasArticle">
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
    <el-card v-else class="blog-content--item blog-content-never">
      <div class="blog-none-tips">
        <h3 class="blog-item--title">很遗憾 没有找到对应的文章</h3>
        <el-button class="blog-item-btn" type="primary" @click="routeEditor"
          >去写一篇吧</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script>
import CardArticleItem from "@/components/card/CardArticleItem.vue";
import QS from "qs";
export default {
  name: "ArticleListView",
  components: { CardArticleItem },
  props: {
    loading: {
      type: Boolean,
    },
    columnId: {
      type: String,
    },
  },
  inject: ["closeLoadClock"],
  data() {
    return {
      articleList: [],
      page: 1,
      size: 4,
      q: "",
    };
  },
  created() {
    this.getArticles();
  },
  computed: {
    hasArticle() {
      return this.articleList.length > 0;
    },
  },
  watch: {
    loading(load) {
      if (load) {
        this.getArticles();
      }
    },
  },
  mounted() {
    this.$EventBus.$on("activeSearch", (q) => {
      this.resetArticles();
      this.q = q;
      this.getArticles();
    });
  },
  methods: {
    routeEditor() {
      let columnId = this.$route.query.columnId;
      this.$router.push({ name: "editor", query: { columnId } });
    },
    getQuery() {
      let column = this?.columnId;
      let q = this.q || undefined;
      let query = JSON.parse(JSON.stringify({ column, q }));
      return query;
    },
    resetArticles() {
      this.articleList = [];
      this.page = 1;
      this.q = "";
    },
    async getArticles() {
      let data = { size: this.size, page: this.page };
      let query = this.getQuery();
      if (Object.entries(query).length > 0) {
        data.query = QS.stringify(query);
      }
      await this.$api({
        type: "articles",
        data,
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
@import '@/assets/css/base.styl';

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

.blog-content-never {
  display: flex;
  justify-content: center;
  align-items: center;
}

.blog-none-tips {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .blog-item-btn {
    margin-top: margin-space * 2;
    width: 50%;
  }
}
</style>