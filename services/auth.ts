// src/api/auth.ts
import http from './http';

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await http.post<LoginResponse>('/auth/login', payload);
  return response.data;
};

// 在这里添加其他与认证相关的 API 请求

