// ConversationList.tsx

import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { ConversationItem } from './ConversationItem';
import { IConversation } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { chatActions } from '@/store/chat/chatSlice';

interface Props {
  conversations: IConversation[];
}

export const ConversationList: React.FC<Props> = ({
  conversations,
}) => {
  const activeConversationId = useSelector(
    (state: RootState) => state.chat.activeConversationId
  );
  const dispatch = useDispatch();
  return (
    <VStack
      as={Box}
      alignItems="stretch"
      spacing={2}
      w="320px"
      h="100%"
      overflowY="auto"
      borderRightWidth={1}
      borderColor="gray.200"
    >
      {conversations.map((conversation) => (
        <ConversationItem
          key={conversation.id}
          conversation={conversation}
          isActive={conversation.id === activeConversationId}
          onClick={() => dispatch(chatActions.setActiveConversationId(conversation.id))}
        />
      ))}
    </VStack>
  );
};
