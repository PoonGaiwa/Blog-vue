<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 20:40:39
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-02 19:59:36
 * @FilePath: \vue-blog\src\views\ArticleList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%
-->
<template>
  <div>
    <div v-if="articleList" class="article-wrap">
      <Scroll @handle-scroll="handleScroll">
        <el-card
          v-for="item in articleList"
          :key="item.id"
          class="blog-article--item"
        >
          <CardArticleItem :article="item" />
        </el-card>
      </Scroll>
    </div>
  </div>
</template>

<script>
import CardArticleItem from "@/components/card/CardArticleItem.vue";
const TH = 200;
export default {
  name: "ArticleListView",
  components: { CardArticleItem },
  data() {
    return {
      articleList: [],
      loading: false,
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
  computed: {},
  methods: {
    handleScroll(vertical, horizontal, nativeEvent) {
      console.log(111);
      if (!this.loading) {
        let st = vertical.scrollTop;
        let sh =
          nativeEvent.srcElement.scrollHeight -
          nativeEvent.srcElement.clientHeight;
        if (st + TH > sh) {
          console.log("加载更多");
          this.getArticles();
        }
      }
    },
    getArticles() {
      this.loading = true;
      this.$api({ type: "articles" })
        .then((result) => {
          this.articleList.push(...result.data.list);
          this.loading = false;
        })
        .catch((err) => {
          this.$notify.success({
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