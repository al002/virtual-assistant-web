// ConversationList.tsx

import React from "react";
import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import { ConversationItem } from "./ConversationItem";
import { IConversation } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { chatActions } from "@/store/chat/chatSlice";

interface Props {
  conversations: IConversation[];
}

export const ConversationList: React.FC<Props> = ({ conversations }) => {
  const dispatch = useDispatch();
  const activeConversationId = useSelector(
    (state: RootState) => state.chat.activeConversationId
  );

  const handleNewConversation = () => {
    // 在这里处理创建新会话的逻辑
    console.log("New conversation");
  };

  return (
    <Flex direction="column" flexBasis="300px" h="full">
      <VStack
        as={Box}
        alignItems="stretch"
        spacing={2}
        w="320px"
        h="100%"
        overflowY="auto"
        flexGrow={1}
        borderRightWidth={1}
        borderColor="gray.200"
      >
        {conversations.map((conversation) => (
          <ConversationItem
            key={conversation.id}
            conversation={conversation}
            isActive={conversation.id === activeConversationId}
            onClick={() =>
              dispatch(chatActions.setActiveConversationId(conversation.id))
            }
          />
        ))}
      </VStack>
      <Box flexShrink={0}>
        <Button
          w="full"
          onClick={handleNewConversation}
          colorScheme="blue"
          variant="ghost"
        >
          New Conversation
        </Button>
      </Box>
    </Flex>
  );
};
