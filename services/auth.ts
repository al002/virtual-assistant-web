// src/api/auth.ts
import http from './http';

interface LoginPayload {
  username: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
}

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await http.post<LoginResponse>('/auth/login', payload);
  return response.data;
};
