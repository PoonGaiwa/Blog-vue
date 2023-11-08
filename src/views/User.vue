<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-11-07 16:16:02
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-08 10:06:40
 * @FilePath: \vue-blog\src\views\User.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-card>
    <div slot="header" class="clearfix"><span>个人信息</span></div>
    <BaseForm v-if="isCreated" ref="userForm" type="userInfo" />
    <el-button type="primary" @click="submit">提交修改</el-button>
    <el-button type="primary" @click="reset">重置信息</el-button>
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
</style>