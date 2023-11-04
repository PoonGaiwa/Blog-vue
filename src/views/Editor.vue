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
  padding: 0 padding-space * 2;
  border-radius: border-radius-default * 0.5;
  background-color: bg-main-color;
}

.blog-editor--title {
  box-sizing: border-box;
  width: 100%;
  margin: margin-space * 2 0;
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

.blog-editor--select {
  display: flex;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;

  li {
    margin: margin-space 0;
    padding: 0 padding-space;
    border: 1px solid theme-color;
    border-radius: border-radius-default * 2;
    cursor: pointer;
    user-select: none;
    font-size: 14px;
    transition: 0.3s;

    &:not(:last-of-type) {
      margin-right: margin-space;
    }

    &.selected {
      background-color: theme-color;
      color: font-head-color;
    }

    &:hover {
      background-color: theme-color;
      color: font-head-color;
    }
  }
}

.blog-editor--control {
  display: flex;
  justify-content: flex-end;
  align-content: center;
  padding: padding-space;
}

.blog-submit--article {
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