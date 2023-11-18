<template>
  <div class="switchMapBtn">
    <div class="mapType">
      <div
        class="mapTypeCard"
        v-for="item in mapTypeCardList"
        :key="item.type"
        :style="{
          backgroundImage: `url(${require('@/assets/img/' + item.logo)})`,
        }"
        @click="changeType(item.type)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "switchMap",
  data() {
    return {
      mapTypeCardList: [
        { type: "Tencent", name: "腾讯地图", logo: "tencentMapLogo.png" },
        { type: "Baidu", name: "百度地图", logo: "baiduMapLogo.png" },
        {
          type: "GoogleStreet",
          name: "谷歌街景地图",
          logo: "googleMapsLogo.png",
        },
        { type: "Gaode", name: "高德地图", logo: "gaodeMapLogo.png" },
      ],
    };
  },
  inject: ["change"],
  methods: {
    changeType(type) {
      this.change(type);
    },
  },
};
</script>

<style lang="stylus">
@import '@/assets/css/base.styl';

.switchMapBtn {
  position: absolute;
  right: 20px;
  bottom: 8px;
  width: 100px;
  height: 60px;
  background-color: #fff;
  background-image: url('@/assets/img/gaodeMapLogo.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0 50%;

  &:hover {
    for num in 1 .. 4 {
      .mapTypeCard:nth-of-type({num}) {
        right: 110 * (4 - num % 5) px;
      }
    }
  }
}

.mapTypeCard {
  box-sizing: border-box;
  position: absolute;
  right: 0;
  margin-right: 0px;
  width: 100px;
  height: 60px;
  border-radius: 4px;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0 50%;
  color: #fff;
  cursor: pointer;
  transition: 0.5s;
}
</style>