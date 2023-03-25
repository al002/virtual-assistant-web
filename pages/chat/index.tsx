import { HStack } from "@chakra-ui/react";
import { ChatArea } from "./components/ChatArea";
import { ConversationList } from "./components/ConversationList";

const ChatPage = () => {
  
  return (
    <HStack h="100vh">
      <ConversationList />
      <ChatArea />
    </HStack>
  );
};

export default ChatPage;
