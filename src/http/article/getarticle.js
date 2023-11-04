import http from '../http';
//根据id获取文章
export const getArticle = (id) => {
  return http.get(`/api/blogs/article/${id}`);
};
