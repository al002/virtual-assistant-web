// ConversationList.tsx

import React, { useEffect } from "react";
import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { ConversationItem } from "./ConversationItem";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  conversationActions,
  createNewConversation,
  getConversationListAction,
} from "@/store/conversation/conversationSlice";
import { getActiveConversationId, getConversationList } from "@/store/conversation/conversationSelector";
import { useRouter } from "next/router";

interface Props {}

export const ConversationList: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const activeConversationId = useAppSelector(getActiveConversationId);
  const conversations = useAppSelector(getConversationList);

  const getConversations = () => {
    dispatch(getConversationListAction());
  };

  const createNewChatSession = async () => {
    const titles = conversations.map((c) => c.title);
    let title;
    const untitledIndex = titles.findIndex((t) => t.indexOf("Untitled chat") > -1);
    if (untitledIndex > -1) {
      const i = titles[untitledIndex].split(' ')?.[2] ?? '1';
      title = `Untitled chat ${Number(i) + 1}`
    } else {
      title = "Untitled chat 1"
    }
    dispatch(
      createNewConversation({
        title,
      })
    );
  };

  const handleNewConversation = () => {
    createNewChatSession();
  };

  const handleSelectConversation = (conversationId: string) => {
    dispatch(
      conversationActions.setActiveConversationId(conversationId)
    );
  }

  useEffect(() => {
    getConversations();
  }, []);

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
            onClick={() => handleSelectConversation(conversation.id)}
          />
        ))}
      </VStack>
      <Box flexShrink={0}>
        <Button
          w="full"
          onClick={handleNewConversation}
          colorScheme="cyan"
          variant="ghost"
          leftIcon={<AddIcon />}
        >
          New Conversation
        </Button>
      </Box>
    </Flex>
  );
};
