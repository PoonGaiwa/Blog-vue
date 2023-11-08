/*
 * @Author: Gaiwa 13012265332@163.com
 * @Date: 2023-10-31 17:02:06
 * @LastEditors: Gaiwa 13012265332@163.com
 * @LastEditTime: 2023-11-08 10:42:16
 * @FilePath: \vue-blog\src\config\api.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  'index': {
    url: '/index',
    method: 'GET',
    noMessage: true,
  },
  'register': {
    url: '/admin/register',
    method: 'POST',
    rsaKey: 'password',
    setToken: true
  },
  'login': {
    url: '/admin/login',
    method: 'POST',
    rsaKey: 'password',
    setToken: true
  },
  'pubKey': {
    url: '/key',
    method: 'GET'
  },
  'articles': {
    url: '/api/rest/articles',
    method: "GET"
  },
  'postArticle': {
    url: '/api/rest/articles',
    method: 'POST'
  },
  'postColumn': {
    url: '/api/rest/columns',
    method: 'POST'
  },
  'postComment': {
    url: '/api/rest/comments',
    method: 'POST'
  },
  'columns': {
    url: '/api/rest/columns',
    method: "GET"
  },
  'getArticleById': {
    rest: true,
    url: '/api/rest/articles/:id',
    method: 'GET'
  },
  'uploadArticle': {
    url: '/upload/article',
    method: 'POST'
  },
  'getUserInfo': {
    url: '/info',
    method: 'GET'
  },
  'putUserInfo': {
    url: '/info',
    method: 'PUT'
  },
  'addArticleLike': {
    url: '/articles/likes/:id',
    method: 'POST',
    rest: true,

  }
}