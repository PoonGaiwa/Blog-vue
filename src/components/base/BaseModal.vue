<template>
  <div>
    <el-dialog
      :title="title"
      :visibl.sync="isShow"
      :width="width"
      :before-close="handleClose"
    >
      <span slot="footer" class="dialog-footer">
        <!-- <el-button v-for="btn in btns" @click="dialogVisible = false">{{
          btn.name
        }}</el-button> -->
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
};
</script>

<style>
</style>