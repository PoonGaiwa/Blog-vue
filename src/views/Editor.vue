<template>
  <el-card class="blog-editor-wrap">
    <div class="blog-editor--title">
      <el-input
        v-model="title"
        type="text"
        class="blog-input--editor"
        placeholder="请在此输入标题(必填)"
      />
    </div>
    <EditorArea :title="title"></EditorArea>
  </el-card>
</template>

<script>
import EditorArea from "@/components/editor/EditorArea.vue";
export default {
  name: "EditorView",
  components: {
    EditorArea,
  },
  provide() {
    return {
      clearTitle: this.clearTitle,
    };
  },
  data() {
    return {
      title: "",
    };
  },
  methods: {
    clearTitle() {
      this.title = "";
    },
  },
};
</script>

<style lang="stylus">
@import '@/assets/css/base.styl';

.blog-editor-wrap {
  box-sizing: border-box;
  padding: 0 padding-space * 2;
  height: calc(100vh - 60px - 10vh - 48px - 24px);
  border-radius: border-radius-default * 0.5;
  background-color: bg-main-color;
}

.blog-editor--title {
  overflow: hidden;
  box-sizing: border-box;
  margin: margin-space * 2 0;
  width: 100%;
}

.blog-input--editor {
  padding: padding-space * 2 0;
  width: 100%;
  border-bottom: 1px solid theme-color;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: font-writeplace-color;
  }
}

.el-input__inner {
  font-size: 32px;
  font-weight: 700;
  border: 0;
}

.blog-editor, .placeholder {
  color: font-writeplace-color !important;
}

.blog-editor--footer {
  margin: margin-space * 2 0;
  border-top: 1px solid theme-color;
}
</style>