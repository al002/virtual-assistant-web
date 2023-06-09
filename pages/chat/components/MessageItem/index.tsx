import { Avatar, Box, Flex } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { IChatMessage } from "@/services/chatMessage";
import { CodeBlock } from "./CodeBlock";

type MessageItemProps = {
  message: IChatMessage;
};

export const MessageItem = ({ message }: MessageItemProps) => {
  return (
    <Box w="full" bg={message.message_role === "Human" ? "white" : "zinc.200"}>
      <Flex maxW="42rem" py={6} gap={6} margin="auto">
        <Avatar size="sm" />
        <Box
          css={`
            & p {
              margin-bottom: 1.25rem;
              margin-top: 1.25rem;

              &:first-of-type {
                margin-top: 0;
              }

              &:last-child {
                margin-bottom: 0;
              }
            }
          `}
          wordBreak="break-all"
          maxW="full"
        >
          <ReactMarkdown
            components={{
              code({ inline, className, children, ...props }) {
                return !inline ? (
                  <CodeBlock
                    value={String(children).replace(/\n$/, "")}
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
            children={message.message}
          />
        </Box>
      </Flex>
    </Box>
  );
};
