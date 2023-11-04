<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-11-04 11:12:38
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-04 22:17:03
 * @FilePath: \vue-blog\src\components\editor\EditorTextArea.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="blog-editor-textarea">
      <Toolbar :editor="editor" :defaultConfig="toolbarConfig" :mode="mode" />
      <Editor
        style="height: 55vh; overflow-y: hidden"
        v-model="html"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="onCreated"
      />
    </div>
    <div class="blog-editor--footer">
      <EditorClassify></EditorClassify>
      <div class="blog-editor--control">
        <a @click="clearContent" class="blog-submit--article">清空</a>
        <a @click="submitArticle" class="blog-submit--article">提交</a>
      </div>
    </div>
  </div>
</template>

<script>
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import EditorClassify from "@/components/editor/EditorClassify.vue";
import Vue from "vue";
export default {
  components: { Editor, Toolbar, EditorClassify },
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
    };
  },
  props: {
    title: {
      type: String,
    },
  },
  inject: ["clearTitle"],

  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
    },
    clearContent() {
      this.editor.clear();
      console.log(this.editor);
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
        // TODO 封装column
        column: "652f9db7936703d2b737d3d0",
        author: this.$store.state.userInfo._id,
        cover: this.content.match(/src="([^"'"]*)"/)?.[1] || undefined,
      };
      try {
        let result = await this.$api({
          type: "postArticle",
          data: JSON.parse(JSON.stringify(postData)),
        });
        this.$notify.success({
          message: result.message,
        });
        this.$route.push("/index");
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
</style>