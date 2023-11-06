<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-31 09:33:12
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-06 14:36:51
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
          v-model="form[item['query']]"
          :type="item.type"
          :placeholder="item.placeholder"
          name="item['query']"
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