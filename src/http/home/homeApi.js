import http from '../http';
//请求博客列表
export const getbloglis = function (data) {
  return http.get('api/blogs/article/list?contentType=2');
}
//根据id获取分类
export const getclass = function (id) {
  return http.get(`api/blogs/category/${id}`);
}
//获取分类列表
export const getclslist = function () {
  return http.get(`api/blogs/category/list`);
}



