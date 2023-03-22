import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ChatState = {
  activeConversationId: string | null;
};

const initialState: ChatState = {
  activeConversationId: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setActiveConversationId: (state, action: PayloadAction<string | null>) => {
      state.activeConversationId = action.payload;
    },
  },
});

export const chatActions = chatSlice.actions;
export default chatSlice.reducer;
