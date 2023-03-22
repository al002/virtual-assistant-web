// components/MessageItem.tsx
import { HStack, Text, Avatar } from '@chakra-ui/react';
import { Message } from '@/store/chat/types';

type MessageItemProps = {
  message: Message;
};

export const MessageItem = ({ message }: MessageItemProps) => {
  return (
    <HStack
      alignSelf={message.sender === 'me' ? 'flex-end' : 'flex-start'}
      spacing={4}
    >
      {message.sender === 'other' && <Avatar size="sm" />}
      <Text
        p={3}
        borderRadius="lg"
        bgColor={message.sender === 'me' ? 'blue.500' : 'gray.200'}
        color={message.sender === 'me' ? 'white' : 'black'}
        maxWidth="70%"
      >
        {message.content}
      </Text>
    </HStack>
  );
};
