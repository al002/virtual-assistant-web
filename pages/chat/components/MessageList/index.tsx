import { useEffect, useRef } from 'react';
import { VStack } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { IChatMessage } from '@/services/chatMessage';
import { MessageItem } from '../MessageItem';

type MessageListProps = {
  messages: IChatMessage[];
};

export const MessageList = ({ messages }: MessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <VStack
      spacing={4}
      px={6}
      py={4}
      flexGrow={1}
      overflowY="auto"
      css={css`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background-color: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 999px;
        }
      `}
    >
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </VStack>
  );
};
