<template>
  <div class="blog-map--wrap">
    <div id="blogMap" class="map-content"></div>
    <switchMap></switchMap>
  </div>
</template>

<script>
import { initMap, showLayer, hideAllLayer } from "@/api/initMap";
import switchMap from "@/components/map/switchMap.vue";
export default {
  name: "MapView",
  components: { switchMap },
  data() {
    return {
      mapType: "Gaode",
    };
  },
  mounted() {
    initMap("blogMap");
  },
  provide() {
    return {
      change: this.changeMapType,
    };
  },
  watch: {
    mapType() {
      hideAllLayer();
      showLayer(this.mapType, true);
    },
  },
  methods: {
    changeMapType(mapType) {
      this.mapType = mapType;
    },
  },
};
</script>

<style>
.blog-map--wrap {
  position: relative;
  height: 100%;
}
.map-content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>