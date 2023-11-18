<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-11-04 11:12:38
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-18 23:32:02
 * @FilePath: \vue-blog\src\components\editor\EditorTextArea.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="blog-editor-textarea">
      <Toolbar :editor="editor" :defaultConfig="toolbarConfig" :mode="mode" />
      <Editor
        style="height: 50vh; overflow-y: hidden"
        v-model="html"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="onCreated"
      />
    </div>
    <div class="blog-editor--footer">
      <div class="blog-editor--classify">
        <h3>分类</h3>
        <el-radio-group class="blog-editor--select" v-model="column">
          <el-radio-button
            v-for="item in columns"
            :key="item._id"
            :label="item._id"
            >{{ item.name }}</el-radio-button
          >
        </el-radio-group>
      </div>
      <div class="blog-editor--control">
        <a @click="clearContent" class="blog-clear--article">清空</a>
        <a @click="submitArticle" class="blog-submit--article">提交</a>
      </div>
    </div>
  </div>
</template>

<script>
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import Vue from "vue";
export default {
  components: { Editor, Toolbar },
  data() {
    return {
      editor: null,
      html: "",
      toolbarConfig: {},
      editorConfig: {
        placeholder: "请输入内容...",
        MENU_CONF: {
          uploadImage: {
            fieldName: "file",
            server: process.env.VUE_APP_FILE_UPLOAD_PATH,
            allowedFileTypes: ["image/*"],
            maxNumberOfFiles: 10,
            maxFileSize: 10 * 1024 * 1024,
            headers: {
              Authorization: `Bearer ${this.$store.state.token}`,
            },
            onBeforeUpload(file) {
              return file;
            },
            onSuccess(file, res) {
              console.log(`${file.name} 上传成功`, res);
            },
            customInsert(res, insertFn) {
              insertFn(res?.data[0]);
            },
            onError(file, err) {
              Vue.prototype.$notify.error({
                title: "上传出错",
                message: err,
              });
            },
          },
        },
      },
      mode: "default", // or 'simple'
      columns: [],
      column: "",
    };
  },
  props: {
    columnId: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  created() {
    this.getColumns();
  },
  inject: ["clearTitle"],
  methods: {
    getColumnId(id) {
      this.column = id;
    },
    async getColumns() {
      try {
        let result = await this.$api({ type: "columns" });
        this.columns = result.data.list;
        this.column =
          this.columnId === undefined ? this.columns[0]?._id : this.columnId;
      } catch (err) {
        console.log(err);
      }
    },
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
    },
    clearContent() {
      this.editor.clear();
      this.clearTitle();
    },
    submitArticle() {
      let content = this.editor.getHtml();
      if (!this.validateEditor(content)) {
        return;
      }
      this.postEditorData(content);
    },
    validateEditor(content) {
      if (this.title.trim().length === 0) {
        this.$notify.error({
          title: "错误",
          message: "请输入标题",
        });
        return false;
      }
      if (content.trim().length === 0) {
        this.$notify.error({
          title: "错误",
          message: "请输入内容",
        });
        return false;
      }
      return true;
    },
    async postEditorData(content) {
      let postData = {
        title: this.title,
        content: content,
        column: this.column,
        author: this.$store.state.userInfo._id,
        cover: content.match(/src="([^"']*)"/)?.[1] || undefined,
      };
      try {
        let result = await this.$api({
          type: "postArticle",
          data: JSON.parse(JSON.stringify(postData)),
        });
        this.$notify.success({
          message: result.message,
        });
        this.$router.push("/index");
      } catch (err) {
        this.$notify.error({
          message: err.message,
        });
      }
    },
  },
  mounted() {},
  beforeDestroy() {
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁编辑器
  },
};
</script>

<style src="@wangeditor/editor/dist/css/style.css">
</style>

<style lang="stylus">
@import '@/assets/css/base.styl';

.blog-editor--control {
  display: flex;
  justify-content: flex-end;
  align-content: center;
  padding: padding-space;

  a {
    margin: margin-space margin-space 0 margin-space;
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
}

.blog-editor--classify {
  display: flex;
  align-items: center;
  margin-top: margin-space * 2;

  h3 {
    margin-top: margin-space;
    font-size: 18px;
    line-height: font-size-h;
  }
}

.blog-editor--select {
  display: flex;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;

  .el-radio-button__inner {
    margin: margin-space 0 0 margin-space;
    padding: padding-space;
    border: 1px solid theme-color !important;
    border-radius: border-radius-default * 2 !important;
    cursor: pointer;
    user-select: none;
    font-size: 14px;
    transition: 0.3s;

    &:hover {
      background-color: theme-color;
      color: font-head-color;
    }
  }
}
</style>