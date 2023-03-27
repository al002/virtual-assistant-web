// components/MessageItem.tsx
import { IChatMessage } from "@/services/chatMessage";
import { HStack, Text, Avatar, Box, Flex, Spacer, Center } from "@chakra-ui/react";

type MessageItemProps = {
  message: IChatMessage;
};

export const MessageItem = ({ message }: MessageItemProps) => {
  return (
    <Box w="full" bg={message.message_role === "Human" ? "white" : "zinc.200"}>
      <Flex maxW="42rem" py={6} gap={6} margin="auto">
        <Avatar size="sm" />
        <Text
          // bgColor={message.message_role === "Human" ? "blue.500" : "gray.200"}
          // color={message.message_role === "Human" ? "white" : "black"}
        >
          {message.message}
        </Text>
      </Flex>
    </Box>
  );
};
