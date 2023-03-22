// components/MessageInput.tsx
import { Input, HStack, Button } from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';

type MessageInputProps = {
  onSendMessage: (content: string) => void;
};

export const MessageInput = ({ onSendMessage }: MessageInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const sendMessage = () => {
    onSendMessage(inputValue);
    setInputValue('');
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = '0px';
      inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
    }
  }, [inputValue]);

  return (
    <HStack p={4} borderTop="1px" borderColor="gray.200" spacing={4}>
      <Input
        as="textarea"
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type your message here..."
        variant="outline"
        w="full"
        resize="none"
        minHeight="48px"
        maxHeight="150px"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="gray.300"
        _focus={{
          borderColor: 'blue.500',
        }}
      />
      <Button
        colorScheme="blue"
        onClick={sendMessage}
        disabled={!inputValue.trim()}
      >
        Send
      </Button>
    </HStack>
  );
};
