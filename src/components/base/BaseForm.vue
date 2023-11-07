<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-31 09:33:12
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-07 18:39:23
 * @FilePath: \vue-blog\src\components\base\BaseForm.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-form :model="form" ref="elForm" v-if="formData">
      <el-form-item
        v-for="item in formData"
        :key="item['query']"
        :label="item.label"
        :prop="item['query']"
        :rules="validates[item['query']]"
        label-width="100px"
      >
        <el-input
          v-if="item.type != 'image'"
          v-model="form[item['query']]"
          :type="item.type"
          :placeholder="item.placeholder"
          :disabled="item.readonly"
          name="item['query']"
          autocomplete="off"
        ></el-input>
        <el-upload
          v-if="item.type == 'image'"
          class="avatar-uploader"
          :headers="{ Authorization: `Bearer ${$store.state.token}` }"
          :action="userFileAction"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :on-error="handleAvatarFailure"
        >
          <img
            v-if="form[item['query']]"
            :src="form[item['query']]"
            class="avatar"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import VALIDATE_DATA from "@/config/validate.config";
import FORM_DATA from "@/config/form.config";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

export default {
  name: "BaseForm",
  props: {
    type: {
      type: String,
    },
  },
  data() {
    return {
      form: {},
    };
  },
  created() {
    if (this.type === "userInfo") {
      this.form = this.$store.getters.userInfo;
    }
  },
  computed: {
    formData() {
      return FORM_DATA[this.type];
    },
    validates() {
      return VALIDATE_DATA[this.type];
    },
    userFileAction() {
      return process.env.VUE_APP_USER_UPLOAD_PATH;
    },
  },
  watch: {
    type() {
      this.initForm();
    },
  },
  methods: {
    initForm() {
      this.form = {};
      this.resetForm();
    },
    resetForm() {
      this.$refs["elForm"].resetFields();
    },
    handleAvatarSuccess(res) {
      this.form.avatar = res.data.fileURL;
      nprogress.done();
    },
    handleAvatarFailure() {
      this.$message.error("上传失败");
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 5;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 5MB!");
      }
      nprogress.start();
      return isJPG && isLt2M;
    },
  },
};
</script>

<style lang="stylus">
.avatar-uploader .el-upload {
  border: 2px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: theme-color;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>