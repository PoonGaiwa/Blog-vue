<!--
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-11-03 20:06:17
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-11 17:12:39
 * @FilePath: \vue-blog\src\components\base\BaseCircleMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog-circle-menu">
    <transition-group appear>
      <el-button
        v-if="execMenuList"
        key="like"
        :icon="likeIcon"
        @click="clickMenu(execMenuList)"
        class="blog-menu--btn"
        :class="{ active: isLike }"
        circle
      ></el-button>
      <el-button
        v-for="item in newMenuList"
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
import MINXIN from "@/core/minxin";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("likes");

export default {
  name: "BaseCircleMenu",
  mixins: [MINXIN],
  props: {
    menuList: {
      type: Array,
    },
  },
  mounted() {},
  computed: {
    likeIcon() {
      if (this.isLike) {
        return this.execMenuList.activeIcon;
      }
      return this.execMenuList.icon;
    },
    newMenuList() {
      return this.menuList.filter((item) => {
        return !item.exec;
      });
    },
    execMenuList() {
      return this.menuList.filter((item) => {
        return item.exec;
      })[0];
    },
    isLike() {
      let aid = this.$route.params.id;
      return this.localLike(aid);
    },
    ...mapGetters({
      localLike: "isLike",
    }),
  },
  methods: {
    handlerLikeArticle() {
      let aid = this.$route.params.id;
      this[this.isLike ? "pullLike" : "pushLike"]({ aid });
    },
    handlerFocusTextarea() {
      this.$EventBus.$emit("focusComment");
    },
    addColumn() {
      // 添加分类
      this.refreshModal("column");
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
    ...mapActions(["pullLike", "pushLike"]),
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

  &.active {
    i.iconfont {
      color: black !important;
    }
  }
}

.el-button:active {
  border-color: #DCDFE6;
}

.el-button:focus {
  background-color: #fff;
}

i.iconfont {
  font-size: 22px;
}
</style>