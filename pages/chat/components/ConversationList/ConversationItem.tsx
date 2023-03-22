import { Box, Avatar, Text, VStack, HStack, useColorModeValue } from '@chakra-ui/react';
import { IConversation } from './types';

type ConversationItemProps = {
  conversation: IConversation;
  onClick: () => void;
  isActive: boolean;
};

export const ConversationItem = ({ conversation, isActive, onClick }: ConversationItemProps) => {
  const activeBgColor = useColorModeValue('blue.100', 'blue.700');
  return (
    <HStack
      w="full"
      p={4}
      borderBottom="1px"
      borderColor="gray.200"
      bg={isActive ? activeBgColor : undefined}
      spacing={4}
      _hover={{ bg: 'gray.100' }}
      cursor="pointer"
      onClick={onClick}
    >
      <Avatar src={conversation.avatarUrl} />
      <VStack alignItems="start" spacing={1}>
        <Text fontWeight="bold">{conversation.name}</Text>
        <Text fontSize="sm" color="gray.600" noOfLines={1}>
          {conversation.lastMessage}
        </Text>
      </VStack>
    </HStack>
  );
};
