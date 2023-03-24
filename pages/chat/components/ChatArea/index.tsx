import { useEffect, useRef } from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { MessageList } from '../MessageList';
import { MessageInput } from '../MessageInput';
import { createSocket } from '@/services/socket';

export const ChatArea = () => {
  const socket = useRef<WebSocket | null>(null);
  useEffect(() => {
    if (!socket.current) {
      socket.current = createSocket();
    }
  }, [])
  const bgColor = useColorModeValue('gray.50', 'gray.800');

  const handleSendMessage = (content: string) => {
    if (socket.current) {
      socket.current.send(JSON.stringify({
        message: content
      }))
    }
  };

  return (
    <Flex direction="column" h="full" w="full" bg={bgColor}>
      <MessageList messages={[]} />
      <MessageInput onSendMessage={handleSendMessage} />
    </Flex>
  );
};
