import { Box, Textarea, VStack } from "@chakra-ui/react";
import { useRef, useState } from "react";

interface Message {
  id: string;
  content: string;
}

interface ChatWindowProps {
  messages: Message[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  const [inputHeight, setInputHeight] = useState<number | string>("auto");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (inputRef.current) {
      setInputHeight("auto");
      setInputHeight(inputRef.current.scrollHeight);
    }
  };

  return (
    <VStack>
      <Box>
        {messages.map((message) => (
          <Box key={message.id}>{message.content}</Box>
        ))}
      </Box>
      <Textarea
        ref={inputRef}
        rows={1}
        h={inputHeight}
        onInput={handleInput}
        resize="none"
        overflow="hidden"
      />
    </VStack>
  );
};

export default ChatWindow;
