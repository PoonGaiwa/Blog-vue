<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-11-03 20:06:17
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-05 17:15:32
 * @FilePath: \vue-blog\src\components\base\BaseCircleMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog-circle-menu">
    <transition-group appear>
      <el-button
        v-for="item in menuList"
        :key="item.icon"
        circle
        :icon="item.icon"
        @click="clickMenu(item)"
        class="blog-menu--btn"
      ></el-button>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "BaseCircleMenu",
  props: {
    menuList: {
      type: Array,
    },
  },
  mounted() {},
  methods: {
    handlerFocusTextarea() {
      this.$EventBus.$emit("focusComment");
    },
    clickMenu(menu) {
      let { route, handler } = menu;
      if (route) {
        this.$router.push(route);
      }
      if (handler) {
        this[handler] && this[handler]();
      }
    },
  },
};
</script>

<style lang="stylus">
@import '@/assets/css/base.styl';

.el-button + .el-button {
  margin: 0;
}

.el-button.is-circle {
  margin: margin-space 0;
}

.blog-circle-menu {
  margin-left: margin-space * 2;
}

.blog-menu--btn {
  width: 60px;
  height: 60px;
  font-size: 22px;
  line-height: 22px;
}

i.iconfont {
  font-size: 22px;
}
</style>