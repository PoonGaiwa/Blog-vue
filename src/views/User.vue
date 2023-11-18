<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-11-07 16:16:02
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-19 00:36:11
 * @FilePath: \vue-blog\src\views\User.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-card class="blog-userInfo--wrap">
    <div slot="header" class="blog-userInfo--head"><span>个人信息</span></div>
    <BaseForm v-if="isCreated" ref="userForm" type="userInfo" />
    <div class="btn-control">
      <el-button type="primary" class="btn-commit" @click="submit"
        >提交修改</el-button
      >
      <el-button type="primary" class="btn-reset" @click="reset"
        >重置信息</el-button
      >
    </div>
  </el-card>
</template>

<script>
import BaseForm from "@/components/base/BaseForm.vue";
import FORM_DATA from "@/config/form.config";
export default {
  name: "UserView",
  components: {
    BaseForm,
  },
  data() {
    return {
      form: {},
      isCreated: true,
    };
  },
  created() {
    if (this.type === "userInfo") {
      this.form = Object.fromEntries(
        Object.entries(this.$store.getters.userInfo)
      ).filter(([key]) => {
        return FORM_DATA["userInfo"].find((item) => {
          return key == item["query"];
        });
      });
      this.form = this.$store.getters.userInfo;
    }
  },
  methods: {
    submit() {
      let refForm = this.$refs["userForm"];
      refForm.$refs["elForm"].validate(async (valid) => {
        if (valid) {
          try {
            await this.$api({ type: "putUserInfo", data: refForm.form });
            this.$store.dispatch("getUserInfo");
            this.$router.push("/index");
          } catch (err) {
            refForm.$refs["elForm"].resetFields();
          }
        } else {
          return false;
        }
      });
    },
    reset() {
      this.isCreated = false;
      this.$nextTick(function () {
        this.isCreated = true;
      });
    },
  },
};
</script>

<style lang="stylus">
@import '@/assets/css/base.styl';

.blog-userInfo--wrap {
  padding: padding-space * 4 (padding-space * 6);
}

.blog-userInfo--head {
  font-weight: 600;
  font-size: 32px;
}

.blog-userInfo--wrap .el-input__inner {
  font-size: font-size-h;
}

.el-input.is-disabled .el-input__inner {
  background-color: #fff;
}

.blog-userInfo--wrap {
  .el-card__header {
    padding: 0;
    margin-bottom: margin-space * 2;
  }

  .btn-control {
    display: flex;
    justify-content: end;
  }

  .btn-commit:not(:last-of-type) {
    margin-right: margin-space;
  }
}
</style>