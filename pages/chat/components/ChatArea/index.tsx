import { useEffect } from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { MessageList } from '../MessageList';
import { MessageInput } from '../MessageInput';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { getActiveConversationId } from '@/store/conversation/conversationSelector';
import { chatMessageActions, getChatMessagesAction } from '@/store/chatMessage/chatMessageSlice';
import { getCurrentChatMessages } from '@/store/chatMessage/chatMessageSelector';

export const ChatArea = () => {
  const dispatch = useAppDispatch();
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const activeConversationId = useAppSelector(getActiveConversationId);
  const messages = useAppSelector(getCurrentChatMessages);

  useEffect(() => {
    dispatch(chatMessageActions.connectWebsocket());
  }, []);

  useEffect(() => {
    if (activeConversationId) {
      dispatch(getChatMessagesAction(activeConversationId));
    }
  }, [activeConversationId, dispatch]);

  const handleSendMessage = (content: string) => {
    if (activeConversationId) {
      dispatch(chatMessageActions.appendHumanMessage({
        conversationId: activeConversationId,
        message: content,
      }));
      dispatch(chatMessageActions.appendAIMessage({
        conversationId: activeConversationId,
      }));
      dispatch(chatMessageActions.sendMessage({
        message: content,
        conversation_id: activeConversationId,
      }))
    }
  };

  return (
    <Flex direction="column" h="full" w="full" bg={bgColor}>
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </Flex>
  );
};
