// src/api/http.ts
import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const http: AxiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL, // 从环境变量中获取 API 基本 URL
  timeout: 10000, // 设置请求超时时间
});

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在这里可以添加请求拦截器，例如添加认证信息
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response: AxiosResponse) => {
    // 在这里可以添加响应拦截器，例如处理错误信息
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;

