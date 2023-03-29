import {
  Text,
  Box,
  Flex,
  Tooltip,
  IconButton,
  useClipboard,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import hljs from 'highlight.js';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export interface ICodeBlockProps {
  value: string;
  language?: string;
}

export const CodeBlock: React.FC<ICodeBlockProps> = ({ language, value }) => {
  const { onCopy, hasCopied } = useClipboard(value);
  let detectedLanguage = language || hljs.highlightAuto(value).language;
  if (detectedLanguage === "javascript") {
    detectedLanguage = "jsx";
  }

  return (
    <Box position="relative" mb={4}>
      <Flex w="100%" zIndex="1" bg="#282828" px="2" py="1" alignItems="center">
        <Text color="white" fontSize="sm" flex="1">
          {detectedLanguage}
        </Text>
        <Tooltip label={hasCopied ? "Copied" : "Copy"} placement="top" hasArrow>
          <IconButton
            aria-label="copy"
            icon={<CopyIcon />}
            size="sm"
            colorScheme="white"
            onClick={onCopy}
          />
        </Tooltip>
      </Flex>
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={detectedLanguage ?? undefined}
        children={value}
        customStyle={{
          margin: 0,
        }}
      />
    </Box>
  );
};
