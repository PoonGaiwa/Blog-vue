import { addGaodeMap, addTencentMap, addBaiduMap, addGoogleStreetMap } from '@/api/addMap'
export default {
  'Gaode': addGaodeMap(),
  'Tencent': addTencentMap(),
  'Baidu': addBaiduMap(),
  'GoogleStreet': addGoogleStreetMap()
}