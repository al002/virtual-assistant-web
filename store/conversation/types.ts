import { IConversation } from "@/services/conversation";

export type IConversationState = {
  activeConversationId: string | null;
  list: IConversation[];
};
