import { useState, useRef, useEffect } from "react";
import {
  HStack,
  Box,
  IconButton,
  Textarea,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { TbSend } from "react-icons/tb";

type MessageInputProps = {
  onSendMessage: (content: string) => void;
};

export const MessageInput = ({ onSendMessage }: MessageInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const sendMessage = () => {
    onSendMessage(inputValue);
    setInputValue("");
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "0px";
      inputRef.current.style.height = inputRef.current.scrollHeight + "px";
    }
  }, [inputValue]);

  return (
    <HStack flexShrink={0} px={2} pt={1} pb={4}>
      {/* <Input
        as="textarea"
        ref={inputRef}
        value={inputValue}
        placeholder="Type your message here..."
        w="full"
        resize="none"
        minHeight="32px"
        maxHeight="150px"
        borderRadius={0}
        _focus={{
          borderColor: 'blue.500',
        }}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      /> */}
      <Box position="relative" w="full">
        <Textarea
          ref={inputRef}
          placeholder="Type a message..."
          value={inputValue}
          size="md"
          resize="none"
          rows={1}
          minH="40px"
          maxH="150px"
          paddingRight="2rem"
          _focus={{
            boxShadow: 'none',
            borderColor: 'teal.500'
          }}
          _hover={{
            borderColor: 'teal.500'
          }}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <IconButton
          icon={<TbSend />}
          position="absolute" bottom={0} right={0}
          aria-label="send"
          onClick={handleSend}
          variant="ghost"
          size="md"
        />
      </Box>
    </HStack>
  );
};
