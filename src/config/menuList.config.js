/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-11-03 21:19:12
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-11 15:47:25
 * @FilePath: \vue-blog\src\config\menuList.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  home: () => [
    {
      icon: "iconfont icon-write",
      route: "/editor",
    }
  ],
  index: () => [
    {
      icon: "iconfont icon-write",
      route: "/editor",
    },
  ],
  columns: () => [
    {
      icon: "el-icon-plus",
      handler: 'addColumn'
    },
  ],
  article: () => [
    {
      icon: "iconfont icon-like",
      activeIcon: 'iconfont icon-like-full',
      exec: true,
      handler: 'handlerLikeArticle'
    },
    {
      icon: "iconfont icon-comment",
      handler: 'handlerFocusTextarea'
    },
    {
      icon: "iconfont icon-write",
      route: "/editor",
    },
  ]
}