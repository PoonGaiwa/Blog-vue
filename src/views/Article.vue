<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 20:40:45
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-10 19:20:51
 * @FilePath: \vue-blog\src\views\Article.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <BaseArticleContent
      :article="article"
      :aid="id"
      :liked="liked"
    ></BaseArticleContent>
    <CommentTextArea :aid="article._id"></CommentTextArea>
    <CommentList :comments="comments"></CommentList>
  </div>
</template>

<script>
import BaseArticleContent from "@/components/base/BaseArticleContent";
import CommentTextArea from "@/components/comment/CommentTextArea";
import CommentList from "@/components/comment/CommentList";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("likes");

export default {
  name: "ArticleView",
  components: {
    BaseArticleContent,
    CommentTextArea,
    CommentList,
  },
  provide() {
    return {
      getArticleById: this.getArticleById,
    };
  },
  data() {
    return {
      id: "",
      article: {},
      liked: false,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getArticleById();
  },
  computed: {
    comments() {
      return this.article.comments;
    },
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
        let likeUsers = this.article?.like_users || [];
        let uid = this.$store.state.userInfo._id;
        let aid = this.article?._id;
        if (likeUsers.includes(uid)) {
          this.pushLike({ aid });
        }
      } catch (err) {
        this.$notify.success({
          title: "获取失败",
          message: err.message,
        });
      }
    },
    ...mapActions(["pushLike"]),
  },
};
</script>

<style>
</style>