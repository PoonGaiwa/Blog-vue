/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 18:50:11
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-10-31 22:52:51
 * @FilePath: \vue-blog\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path')
function resolve(dir) {
  return path.join(__dirname,dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"))
  }
}