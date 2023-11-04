import http from "../http";
//添加文章数据
export const addarticle = (data) => {

  const token = "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2tleSI6ImI1NTI5NDAzLTg1MzItNDIxMS1iMWJiLTA2YzE5MTllNjZjOCIsInVzZXJuYW1lIjoiYWRtaW4ifQ.mByOlcECXhl32-gyNMtuVPqgs__DaxkXoeJyiBjDiEndqk_mzDhLt-BDbI5B9LOV2eb0FWjZ3k6xx7PzIyTlAQ";

  console.log(data);
  return http.post('api/blogs/article', data, {

    config: {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': "application/json"
      }
    }
  })
}
//上传图片
export const addImg = (data) => {

  const token = "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2tleSI6ImI1NTI5NDAzLTg1MzItNDIxMS1iMWJiLTA2YzE5MTllNjZjOCIsInVzZXJuYW1lIjoiYWRtaW4ifQ.mByOlcECXhl32-gyNMtuVPqgs__DaxkXoeJyiBjDiEndqk_mzDhLt-BDbI5B9LOV2eb0FWjZ3k6xx7PzIyTlAQ";

  console.log(data);
  return http.post('/api/file/uploadEditor', data, {

    config: {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': "multipart/form-data"
      }
    }
  })
}
