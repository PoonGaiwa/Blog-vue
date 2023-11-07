/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-31 10:35:49
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-07 17:16:56
 * @FilePath: \vue-blog\src\config\form.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  "login": [
    {
      label: '用户名',
      query: 'username',
      type: 'text',
      placeholder: '请输入用户名'
    },
    {
      label: '密码',
      query: 'password',
      type: 'password',
      placeholder: '请输入密码'
    }
  ],
  "register": [
    {
      label: '用户名',
      query: 'username',
      type: 'text',
      placeholder: '请输入5-16位用户名 以字母为开头的字母、数字或下划线的组合',
    },
    {
      label: '邮箱',
      query: 'email',
      type: 'text',
      placeholder: '请输入邮箱',
    },
    {
      label: '密码',
      query: 'password',
      type: 'password',
      placeholder: '请输入8-16位密码 最少包含一位（数字/大小写字母和特殊字符）',
    }
  ],
  "column": [
    {
      label: '文章分类名称',
      query: 'name',
      type: 'text',
      placeholder: '请填写分类名称',
    },
  ],
  "userInfo": [
    {
      label: '用户名',
      query: 'username',
      type: 'text',
      readonly: true,
    },
    {
      label: '昵称',
      query: 'nickname',
      type: 'text',
      placeholder: '请输入昵称'
    },
    {
      label: '邮箱',
      query: 'email',
      type: 'text',
      placeholder: '请输入邮箱'
    },
    {
      label: '签名',
      query: 'signature',
      type: 'text',
      placeholder: '请输入你的个性签名吧'
    },
    {
      label: '头像',
      query: 'avatar',
      type: 'image',
    },
  ]
}