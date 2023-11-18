/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-11-18 17:07:49
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-18 23:31:45
 * @FilePath: \vue-blog\src\api\initMap.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import 'ol/ol.css'
import * as control from 'ol/control'
import { Map, View } from 'ol/index'
import MAPLIST from '@/config/addMap.config'

var map = {}
var layerList = {}
function initMap(domId) {
  map = new Map({
    target: domId,
    controls: control.defaults({ attribution: false, zoom: true, rotate: true }),
    view: new View({
      center: [113.27, 23.13],   // 设置默认地图中心点
      maxZoom: 21,         // 设置最大缩放级别
      zoom: 10,             // 设置默认缩放级别
      minZoom: 7,          // 设置最小缩放级别
      projection: 'EPSG:4326'            // 设置默认坐标系
    })
  })
  Object.entries(MAPLIST).forEach(([key, value]) => {
    map.addLayer(value)
    layerList[key] = value
  })
  hideAllLayer()
  showLayer('Gaode', true)
}

function hideAllLayer() {
  // 隐藏全部图层
  Object.entries(layerList).forEach(([, value]) => {
    value.setVisible(false)
  })
}

function showLayer(layerName, hideOther) {
  if (layerName == null || hideOther) {
    hideAllLayer();
  }
  Object.entries(layerList).forEach(([key, value]) => {
    if (key === layerName) {
      value.setVisible(true)
    }
  })
}

export {
  initMap, hideAllLayer, showLayer
}