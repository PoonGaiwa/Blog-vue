export default {
  "login": {
    title: '登录',
    formType: 'login',
    formData: [
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
    btns: [
      {
        targetName: 'close',
        name: '取消',
      },
      {
        targetName: 'confirm',
        name: '提交',
        isSubmit: true
      }
    ]
  },
  "register": {
    title: '注册',
    formType: 'register',
    formData: [
      {
        label: '用户名',
        query: 'username',
        type: 'text',
        placeholder: '请输入5-16位用户名 以字母为开头的字母、数字或下划线的组合'
      },
      {
        label: '邮箱',
        query: 'email',
        type: 'text',
        placeholder: '请输入邮箱'
      },
      {
        label: '密码',
        query: 'password',
        type: 'password',
        placeholder: '请输入8-12位密码 最少包含一位（数字/大小写字母和特殊字符）'
      }
    ],
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
  "postColumn": {
    title: '添加文章分类',
    formType: 'postColumn',
    formData: [
      {
        label: '文章分类名称',
        query: 'name',
        type: 'text',
        placeholder: '请填写分类名称'
      },
    ],
    btns: [
      {
        targetName: 'confirm',
        name: '提交',
      }
    ]
  },
  "info": {
    title: '个人信息',
    formType: 'putUserInfo',
    formData: [
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
        label: '密码',
        query: 'password',
        type: 'password',
        placeholder: '请输入8-12位密码 最少包含一位（数字/大小写字母和特殊字符）'
      },
      {
        label: '签名',
        query: 'signature',
        type: 'text',
        placeholder: '请输入你的个性签名吧'
      }
    ],
    btns: [
      {
        targetName: 'confirm',
        name: '保存',
        type: 'submit'
      }
    ]
  },
}