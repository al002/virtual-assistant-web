// src/api/auth.ts
import http from './http';

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
}

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await http.post<LoginResponse>('/api/v1/auth/login', payload);
  return response.data;
};

// 在这里添加其他与认证相关的 API 请求

