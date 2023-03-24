import { HStack } from "@chakra-ui/react";
import { ChatArea } from "./components/ChatArea";
import { ConversationList } from "./components/ConversationList";
import { IConversation } from "./components/ConversationList/types";

const conversations: IConversation[] = [
  {
    id: "1",
    avatarUrl: "",
    name: "chat1",
    lastMessage: "mmmm",
  },
  {
    id: "2",
    avatarUrl: "",
    name: "chat2",
    lastMessage: "tsetets",
  },
];

const ChatPage = () => {
  
  return (
    <HStack h="100vh">
      <ConversationList conversations={conversations} />
      <ChatArea />
    </HStack>
  );
};

export default ChatPage;
