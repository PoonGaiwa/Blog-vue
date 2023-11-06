/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-30 23:27:21
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-06 15:15:40
 * @FilePath: \vue-blog\src\config\modal.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  "login": {
    title: '登录',
    formType: 'login',
    btns: [
      {
        targetName: 'close',
        name: '取消',
      },
      {
        targetName: 'confirm',
        name: '登录',
        isSubmit: true
      }
    ]
  },
  "register": {
    title: '注册',
    formType: 'register',
    btns: [
      {
        targetName: 'close',
        name: '取消',
      },
      {
        targetName: 'confirm',
        name: '注册',
        isSubmit: true
      }
    ]
  },
  "column": {
    title: '添加文章分类',
    formType: 'postColumn',
    needUpdate: true,
    btns: [
      {
        targetName: 'close',
        name: '取消',
      },
      {
        targetName: 'confirm',
        name: '添加',
        isSubmit: true
      }
    ]
  },
  "userInfo": {
    title: '个人信息',
    formType: 'userInfo',
    btns: [
      {
        targetName: 'confirm',
        name: '保存',
        type: 'submit',
        isSubmit: true
      }
    ]
  },
}