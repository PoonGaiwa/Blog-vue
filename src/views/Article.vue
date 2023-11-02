<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 20:40:45
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-03 00:08:45
 * @FilePath: \vue-blog\src\views\Article.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <BaseArticleContent :article="article"></BaseArticleContent>
  </div>
</template>

<script>
import BaseArticleContent from "@/components/base/BaseArticleContent.vue";
export default {
  name: "ArticleView",
  components: {
    BaseArticleContent,
  },
  data() {
    return {
      id: "",
      article: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getArticleById();
  },
  mounted() {},
  methods: {
    async getArticleById() {
      try {
        let result = await this.$api({
          type: "getArticleById",
          data: { id: this.id },
        });
        this.article = result.data;
        console.log(this.article);
      } catch (err) {
        this.$notify.success({
          title: "获取失败",
          message: err.message,
        });
      }
    },
  },
};
</script>

<style>
</style>