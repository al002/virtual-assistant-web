import { RootState } from "../store";

export const getActiveConversationId = (state: RootState) => state.conversation.activeConversationId;

export const getConversationList = (state: RootState) => state.conversation.list;
