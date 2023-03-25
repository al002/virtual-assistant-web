import { IConversation } from "@/services/conversation";

export type IConversationState = {
  activeConversationId: string | null;
  list: IConversation[];
};

export type Message = {
  id: string;
  sender: string;
  content: string;
};