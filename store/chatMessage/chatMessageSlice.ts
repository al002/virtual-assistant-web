import { createAsyncThunk, createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getChatMessageList, IChatMessage } from '@/services/chatMessage';
import { IAppendAIMessagePayload, IAppendHumanMessagePayload, IChatMessageState, IUpdateLastAIMessagePayload } from './types';
import { uuid } from '@/utils/nanoid';

const initialState: IChatMessageState = {};

export const getChatMessagesAction = createAsyncThunk('chatMessage/list/get', async (conversationId: string) => {
  const resp = await getChatMessageList(conversationId);
  return {
    conversationId,
    data: resp,
  }
});

export const chatMessageSlice = createSlice({
  name: 'chatMessage',
  initialState,
  reducers: {
    connectWebsocket: (_, _action: PayloadAction<void>) => {},
    sendMessage: (_, _action: PayloadAction<{
      conversation_id: string;
      message: string;
    }>) => {},
    disconnectWebsocket: (_, _action: PayloadAction<void>) => {},
    appendHumanMessage: (state: IChatMessageState, action: PayloadAction<IAppendHumanMessagePayload>) => {
      const { conversationId, message } = action.payload;
      const conversation = state[conversationId];
      if (conversation) {
        conversation.messages.push({
          id: uuid(),
          message,
          message_role: 'Human',
          message_type: "text",
          conversation: conversationId,
        });
      }
    },
    appendAIMessage: (state: IChatMessageState, action: PayloadAction<IAppendAIMessagePayload>) => {
      const { conversationId } = action.payload;
      const conversation = state[conversationId];
      if (conversation) {
        conversation.messages.push({
          id: uuid(),
          message: '',
          message_role: 'AI',
          message_type: 'text',
          conversation: conversationId,
        });
      }
    },
    updateLastestAImessage: (state: IChatMessageState, action: PayloadAction<IUpdateLastAIMessagePayload>) => {
      const { conversationId, token } = action.payload;
      const conversation = state[conversationId];
      if (conversation) {
        const lastMessage = conversation.messages[conversation.messages.length - 1];
        if (lastMessage) {
          lastMessage.message += token;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getChatMessagesAction.fulfilled, (state: IChatMessageState, action) => {
      const { conversationId, data } = action.payload;
      state[conversationId] = {
        messages: data,
      };
    });
  },
});

export const chatMessageActions = chatMessageSlice.actions;
export default chatMessageSlice.reducer;