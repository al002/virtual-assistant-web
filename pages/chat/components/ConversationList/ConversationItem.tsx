import { ChatIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Avatar,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { useAppDispatch } from "@/store/store";
import { deleteConversation, IConversation } from "@/services/conversation";
import { getConversationListAction } from "@/store/conversation/conversationSlice";
import { useState } from "react";

type ConversationItemProps = {
  conversation: IConversation;
  onClick: () => void;
  isActive: boolean;
};

export const ConversationItem = ({
  conversation,
  isActive,
  onClick,
}: ConversationItemProps) => {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const activeBgColor = useColorModeValue("teal.100", "teal.700");

  const handleDeleteConversation = async () => {
    await deleteConversation(conversation.id);
    dispatch(getConversationListAction());
  };

  return (
    <HStack
      w="full"
      p={4}
      h="65px"
      minH="65px"
      borderBottom="1px"
      borderColor="gray.200"
      bg={isActive ? activeBgColor : undefined}
      _hover={{ bg: isActive ? "teal.100" : "teal.50" }}
      cursor="pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <Avatar src={conversation.avatarUrl} /> */}
      <ChatIcon />
      <VStack alignItems="start" spacing={1}>
        <Text fontWeight="semibold">{conversation.title}</Text>
        {/* <Text fontSize="sm" color="gray.600" noOfLines={1}>
          {conversation.lastMessage}
        </Text> */}
      </VStack>
      <Spacer />
      {isHovered || isActive ? (
        <HStack spacing={0}>
          <IconButton
            size="sm"
            icon={<EditIcon />}
            aria-label="Edit"
            variant="ghost"
            _hover={{
              bg: isActive ? "teal.100" : "teal.50"
            }}
            // onClick={onOpen}
          />
          <IconButton
            size="sm"
            icon={<DeleteIcon />}
            aria-label="Delete"
            variant="ghost"
            _hover={{
              bg: isActive ? "teal.100" : "teal.50"
            }}
            onClick={handleDeleteConversation}
          />
        </HStack>
      ) : null}
    </HStack>
  );
};
