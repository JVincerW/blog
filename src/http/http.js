import axios from 'axios';

const token = "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2tleSI6ImMzY2RlZWUxLThmYjAtNDI1OC04OTFkLWZkYzBlYTE2NmE5OCIsInVzZXJuYW1lIjoiYWRtaW4ifQ.sV4BC_pK68xmVE2aGY4w_n9n6jwxiY9ubs7iOmQw1qZ1o5OLhzEtigQURkTxBs6_0SioZ4zFUgjrq4DA4Io9_Q";
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// 创建一个新的 axios 实例
const http = axios.create({
  // 设置基础URL、超时时间等
//   baseURL:`${import.meta.env.VITE_SERVE}`,
//   timeout: 5000,
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export default http;
