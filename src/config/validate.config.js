/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-31 08:34:32
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-10-31 11:22:55
 * @FilePath: \vue-blog\src\config\validate.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  'login': {
    username: [
      { required: true, message: '账号必填', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '密码必填', trigger: 'blur' },
    ]
  },
  'register': {
    username: [
      { required: true, message: '账号必填', trigger: 'blur' },
      { pattern: /^[a-zA-Z][a-zA-Z0-9_]{5,16}$/, message: '请输入5-16位用户名 以字母为开头的字母、数字或下划线的组合', trigger: 'blur' },
    ],
    email: [
      { required: true, message: '邮箱必填', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '密码必填', trigger: 'blur' },
      { pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!@$%^&*-_])[a-zA-Z0-9_#?!@$%^&*-]{8,16}}$/, message: '请输入8-16位密码 最少包含一位（数字/大小写字母和特殊字符）', trigger: 'blur' },
    ]
  }
}