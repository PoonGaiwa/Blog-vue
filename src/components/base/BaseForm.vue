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
          v-model="form[item['query']]"
          :type="item.type"
          :name="item['query']"
          autocomplete="off"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import VALIDATE_DATA from "@/config/validate.config";
import FORM_DATA from "@/config/form.config";
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
  computed: {
    formData() {
      return FORM_DATA[this.type];
    },
    validates() {
      return VALIDATE_DATA[this.type];
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
  },
};
</script>

<style>
</style>