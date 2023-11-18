import { Tile as TileLayer } from 'ol/layer'
import { XYZ } from 'ol/source'
import TileGrid from 'ol/tilegrid/TileGrid'
import TileImage from 'ol/source/TileImage'

// 加载高德底图
function addGaodeMap() {
  const gaodeLayer = new TileLayer({
    source: new XYZ({
      url: 'http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}'
    }),
    projection: 'EPSG:3857'      // 渲染数据源的坐标系指定为伪墨卡托投影坐标系
  })
  return gaodeLayer
}

// 加载腾讯底图
function addTencentMap() {
  // 腾讯底图为TMS，和普通XYZ的y级别相反
  const tencentMap = new TileLayer({
    source: new XYZ({
      url: 'http://rt{0-3}.map.gtimg.com/realtimerender?x={x}&y={-y}&z={z}&type=vector&style=0'
    }),
    projection: 'EPSG:3857'
  })
  return tencentMap
}

// 加载百度图源
function addBaiduMap() {
  let resolutions = []
  let baiduX, baiduY;
  for (let i = 0; i < 19; i++) {
    resolutions[i] = Math.pow(2, 18 - i)
  }
  let tilegrid = new TileGrid({
    origin: [0, 0],
    resolutions: resolutions
  })
  let baidu_source = new TileImage({
    projection: 'EPSG:3857',
    tileGrid: tilegrid,
    tileUrlFunction: function (tileCoord) {
      if (!tileCoord) return '';
      let z = tileCoord[0];
      let x = tileCoord[1];
      let y = tileCoord[2];
      baiduX = (x < 0) ? x : 'M' + (-x);
      baiduY = -y;
      return "http://online3.map.bdimg.com/onlinelabel/?qt=tile&x=" + baiduX + "&y=" + baiduY + "&z=" + z + "&styles=pl&udt=20151021&scaler=1&p=1"
    }
  })
  const baidulayer = new TileLayer({
    source: baidu_source
  })
  return baidulayer
}

// 加载谷歌街景底图
function addGoogleStreetMap() {
  // 添加了谷歌地图
  let streetMap = new TileLayer({
    source: new XYZ({
      url: 'https://tile6.hifleet.com/wmts/google-street-zh/osm_grid/{z}/{x}/{y}.png'
    }),
    projection: 'EPSG: 3857'
  });
  return streetMap
}

export { addGaodeMap, addTencentMap, addBaiduMap, addGoogleStreetMap }