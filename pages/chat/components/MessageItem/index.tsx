// components/MessageItem.tsx
import { IChatMessage } from '@/services/chatMessage';
import { HStack, Text, Avatar } from '@chakra-ui/react';

type MessageItemProps = {
  message: IChatMessage;
};

export const MessageItem = ({ message }: MessageItemProps) => {
  return (
    <HStack
      alignSelf={message.message_role === 'Human' ? 'flex-end' : 'flex-start'}
      spacing={4}
    >
      {message.message_role === 'AI' && <Avatar size="sm" />}
      <Text
        p={3}
        borderRadius="lg"
        bgColor={message.message_role === 'Human' ? 'blue.500' : 'gray.200'}
        color={message.message_role === 'Human' ? 'white' : 'black'}
        maxWidth="70%"
      >
        {message.message}
      </Text>
    </HStack>
  );
};
