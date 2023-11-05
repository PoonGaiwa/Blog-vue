/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-11-03 21:19:12
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-05 16:39:29
 * @FilePath: \vue-blog\src\config\menuList.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  home: () => [
    {
      icon: "el-icon-edit-outline",
      route: "/editor",
    }
  ],
  index: () => [
    {
      icon: "el-icon-edit-outline",
      route: "/editor",
    },
  ],
  article: () => [
    {
      icon: "iconfont icon-like",
    },
    {
      icon: "iconfont icon-comment",
      handler: 'handlerFocusTextarea'
    },
    {
      icon: "el-icon-edit-outline",
      route: "/editor",
    },
  ]
}