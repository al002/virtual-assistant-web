import { IChatMessage } from "@/services/chatMessage";

export interface IChatMessageState {
  [key: string]: {
    messages: IChatMessage[];
  };
}

export interface IUpdateLastAIMessagePayload {
  conversationId: string;
  token: string;
}

export interface IAppendAIMessagePayload {
  conversationId: string;
}

export interface IAppendHumanMessagePayload {
  conversationId: string;
  message: string;
}