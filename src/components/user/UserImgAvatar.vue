<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-31 20:50:54
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-06 16:47:37
 * @FilePath: \vue-blog\src\components\user\UserImgAvatar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog-header--avatar">
    <el-avatar class="blog-header--avatar" :src="src"></el-avatar>
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
@import '@/assets/css/base.styl';

.blog-header--avatar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 100px;
  border-radius: 50%;

  img {
    width: 45px;
    height: 45px;
  }
}

.blog-header--avatar .el-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>