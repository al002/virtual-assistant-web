import { createConversation, getConversationList, ICreateConversation } from '@/services/conversation';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IConversationState } from './types';

const initialState: IConversationState = {
  activeConversationId: null,
  list: [],
};

export const getConversationListAction = createAsyncThunk(
  'conversations/getList',
  async () => {
    return await getConversationList();
  }
);

export const createNewConversation = createAsyncThunk(
  'conversations/createNewConversation',
  async (data: ICreateConversation, { dispatch, getState }) => {
    try {
      const response = await createConversation(data);
      dispatch(getConversationListAction());
    } catch (error) {
      console.error('Error creating new chat session:', error);
    }
  }
);

const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    setActiveConversationId: (state, action: PayloadAction<string | null>) => {
      state.activeConversationId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConversationListAction.fulfilled, (state, action) => {
        state.list = action.payload
      });
  }
});

export const conversationActions = conversationSlice.actions;
export default conversationSlice.reducer;
