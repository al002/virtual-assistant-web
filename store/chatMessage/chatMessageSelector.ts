import { RootState } from "../store";

export const getCurrentChatMessages = (state: RootState) => {
  const conversationId = state.conversation.activeConversationId;
  if (conversationId) {
    return state.chatMessage[conversationId]?.messages ?? [ ];
  }

  return [];
}