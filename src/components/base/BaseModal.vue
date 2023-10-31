<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 23:22:44
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-10-31 11:48:11
 * @FilePath: \vue-blog\src\components\base\BaseModal.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="isShow"
      :width="width"
      :before-close="close"
    >
      <BaseForm :type="type" v-if="hasForm" ref="form" />
      <div slot="footer" class="dialog-footer">
        <el-button
          v-for="btn in btns"
          :key="btn.targetName"
          @click="handlerBtn(btn.targetName, btn.isSubmit)"
          >{{ btn.name }}</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import MODAL_DATA from "@/config/modal.config";
import { createNamespacedHelpers } from "vuex";
import BaseForm from "./BaseForm";
const { mapState, mapActions } = createNamespacedHelpers("modal");
export default {
  name: "BaseModal",
  components: {
    BaseForm,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["isShow", "type"]),
    title() {
      return MODAL_DATA[this.type]?.title ?? "默认modal";
    },
    width() {
      return MODAL_DATA[this.type]?.width ?? "60%";
    },
    hasForm() {
      return MODAL_DATA[this.type]?.formType;
    },
    btns() {
      return (
        MODAL_DATA[this.type]?.btns ?? [
          {
            targetName: "close",
            name: "取消",
          },
          {
            targetName: "confirm",
            name: "提交",
          },
        ]
      );
    },
  },
  methods: {
    handlerBtn(action, isSubmit) {
      if (isSubmit) {
        this.submitForm();
        return;
      }
      this[action] && this[action]();
    },
    submitForm() {
      let refForm = this.$refs["form"];
      refForm.$refs["elForm"].validate((valid) => {
        if (valid) {
          console.log("提交成功!");
          console.log(refForm.form);
        } else {
          alert("提交失败!!");
          return false;
        }
      });
    },
    ...mapActions(["close", "open", "confirm"]),
  },
};
</script>

<style>
</style>