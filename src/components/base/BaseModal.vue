<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="isShow"
      :width="width"
      :before-close="close"
    >
      <el-form :model="form" v-if="formData">
        <el-form-item
          v-for="formItem in formData"
          :key="formItem.query"
          :label="formItem.label"
          label-width="100px"
        >
          <el-input
            v-model="form[formItem['query']]"
            :type="formItem.type"
            :name="formItem.query"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button
          v-for="btn in btns"
          :key="btn.targetName"
          @click="handlerBtn(btn.targetName)"
          >{{ btn.name }}</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import MODAL_DATA from "@/config/modal.config";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("modal");
export default {
  name: "BaseModal",
  data() {
    return {
      form: {},
    };
  },
  computed: {
    ...mapState(["isShow", "type"]),
    title() {
      return MODAL_DATA[this.type]?.title ?? "默认modal";
    },
    formData() {
      return MODAL_DATA[this.type]?.formData;
    },
    width() {
      return MODAL_DATA[this.type]?.width ?? "60%";
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
    handlerBtn(action) {
      this[action] && this[action]();
    },
    ...mapActions(["close", "open", "confirm"]),
  },
  watch: {
    "$store.state.modal.type"(newVal) {
      if (MODAL_DATA[newVal]) {
        this.form = MODAL_DATA[newVal].formData.reduce((acc, curr) => {
          acc[curr["query"]] = "";
          return acc;
        }, {});
      }
    },
  },
};
</script>

<style>
</style>