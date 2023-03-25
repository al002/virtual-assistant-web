import http from "./http";

export interface IConversation {
  id: string;
  title: string;
}

export interface ICreateConversation {
  title: string;
}

export type IConversationResponse = IConversation

export const getConversationList = async (): Promise<IConversationResponse[]> => {
  const response = await http.get<IConversationResponse[]>('/conversations');
  return response.data;
}

export const createConversation = async (data: ICreateConversation): Promise<IConversationResponse> => {
  const response = await http.post<IConversationResponse>('/conversations', data);
  return response.data;
};

export const updateConversation = async (id: string, data: Partial<IConversation>): Promise<IConversationResponse> => {
  const response = await http.post<IConversationResponse>(`/conversations/${id}`, {
    data,
  });
  return response.data;
};

export const deleteConversation = async (id: string): Promise<IConversationResponse> => {
  const response = await http.delete<IConversationResponse>(`/conversations/${id}`);
  return response.data;
};