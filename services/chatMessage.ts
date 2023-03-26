import http from "./http";

export interface IChatMessage {
  id: string;
  message: string;
  conversation: string;
  message_role: string;
  message_type: string;
}

export type IChatMessageListResp = IChatMessage[];

export const getChatMessageList = async (conversationId: string) => {
  const response = await http.get<IChatMessageListResp>(`/conversations/${conversationId}/messages`);
  return response.data;
};