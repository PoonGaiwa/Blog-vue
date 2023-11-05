<template>
  <div class="blog-comment blog-comment--editor">
    <h3 class="blog-comment--title">看文章是喜欢，评论才是真爱：</h3>
    <textarea
      class="blog-comment--input"
      ref="textarea"
      name="comment"
      v-model="commentVal"
      placeholder="请写下你的评论..."
    ></textarea>
    <div class="blog-comment--btn">
      <a class="blog-comment--submit" @click="submitComment">评论</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentTextArea",
  data() {
    return {
      commentVal: "",
    };
  },
  props: {
    aid: {
      type: String,
    },
  },
  inject: ["getArticleById"],
  computed: {
    uid() {
      return this.$store.state.userInfo._id;
    },
  },
  mounted() {
    this.$EventBus.$on("focusComment", () => {
      this.focusTextarea();
    });
  },
  methods: {
    focusTextarea() {
      this.$refs.textarea?.focus();
    },
    async submitComment() {
      if (this.commentVal.trim().length === 0) {
        this.$notify.warning({
          message: "内容不能为空",
        });
        this.focusTextarea();
        return;
      }
      try {
        await this.$api({
          type: "postComment",
          data: { aid: this.aid, uid: this.uid, content: this.commentVal },
        });
        this.$notify.success({
          title: "评论成功",
        });
        this.getArticleById();
      } catch (err) {
        this.$notify.warning({
          title: "评论失败",
          message: err.message,
        });
      }
      this.commentVal = "";
    },
  },
};
</script>

<style lang="stylus">
@import '@/assets/css/base.styl';

.blog-comment {
  box-sizing: border-box;
  margin-top: margin-space * 4;
  border: 1px solid bg-body-color;
  border-radius: 4px;
  box-shadow: 0 0 1px border-main-color inset;
  background-color: bg-main-color;
}

.blog-comment--editor {
  padding: padding-space * 4;
}

.blog-comment--title {
  font-weight: 300;
  font-size: font-size-h;
  color: font-writeplace-color;
  margin-bottom: margin-space * 2;
}

.blog-comment--input {
  box-sizing: border-box;
  height: 100px;
  width: 100%;
  border: 1px solid border-main-color;
  border-radius: 4px;
  padding: padding-space 0 0 padding-space * 2;
  resize: none;

  &::placeholder {
    color: font-writeplace-color;
  }

  &:focus {
    outline: 1px solid theme-color;
  }
}

.blog-comment--btn {
  display: flex;
  justify-content: flex-end;
}

.blog-comment--submit {
  margin-top: margin-space;
  padding: padding-space * 0.2 (padding-space * 3);
  height: 1.5rem;
  line-height: 1.5rem;
  color: font-head-color;
  border-radius: border-radius-default * 0.5;
  background-color: theme-color;

  &:hover {
    color: lighten(font-head-color, 20%);
    background-color: lighten(theme-color, 20%);
  }
}
</style>