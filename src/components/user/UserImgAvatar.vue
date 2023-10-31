<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-31 20:50:54
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-10-31 21:39:46
 * @FilePath: \vue-blog\src\components\user\UserImgAvatar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog-avatar">
    <el-avatar class="blog-header--avatar" fit="cover" :src="src"></el-avatar>
  </div>
</template>

<script>
export default {
  name: "UserImgAvatar",
  computed: {
    src() {
      return this.$store.state.userInfo.avatar;
    },
  },
};
</script>

<style lang="stylus">
.blog-avatar {
  text-align: center;
}

.blog-header--avatar {
  overflow: hidden;
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
</style>