// store/websocketMiddleware.ts
import { Middleware } from '@reduxjs/toolkit';
import { chatMessageActions } from '../chatMessage/chatMessageSlice';

export const websocketMiddleware: Middleware = (storeApi) => (next) => {
  let socket: WebSocket | null = null;

  return (action) => {
    if (typeof window === 'undefined') {
      return next(action);
    }

    switch (action.type) {
      case 'chatMessage/connectWebsocket':
        if (socket !== null) {
          // socket.close();
          return;
        }
        socket = new WebSocket('ws://localhost:8000/ws/chat/');
        socket.onopen = (event) => {
          console.log('WebSocket connection opened:', event);
        };
      
        socket.onmessage = (event) => {
          const message = JSON.parse(event.data);
      
          switch (message.msg_type) {
            // case 'reply_start':
            //   storeApi.dispatch(chatMessageActions.appendAIMessage({
            //     conversationId: message.conversation,
            //   }));
            //   break;
            case 'reply_new_token':
              storeApi.dispatch(chatMessageActions.updateLastestAImessage({
                conversationId: message.conversation_id,
                token: message.token,
              }));
              break;
            case 'reply_end':
              storeApi.dispatch({ type: 'actionType2', payload: message.payload });
              break;
            // Add more cases for different message types
            default:
              console.log('Unhandled message type:', message.type);
          }
        };
      
        socket.onclose = (event) => {
          console.log('WebSocket connection closed:', event);
        };
      
        socket.onerror = (event) => {
          console.log('WebSocket error:', event);
        };
        break;
      case 'chatMessage/sendMessage':
        if (socket !== null) {
          socket.send(JSON.stringify(action.payload));
        }
        break;
      case 'chatMessage/disconnectWebsocket':
        if (socket !== null) {
          socket.close();
          socket = null;
        }
        break;
      default:
        return next(action);
    }
  };
};
