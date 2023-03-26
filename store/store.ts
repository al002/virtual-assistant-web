import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import conversationReducer from './conversation/conversationSlice';
import chatMessageReducer from './chatMessage/chatMessageSlice';
import { websocketMiddleware } from './middlewares/websocketMiddleware';

const store = configureStore({
  reducer: {
    conversation: conversationReducer,
    chatMessage: chatMessageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(websocketMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
