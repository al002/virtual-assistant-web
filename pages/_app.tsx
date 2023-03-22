import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";
import { ChakraProvider } from '@chakra-ui/react';

const globalStyles = css`
  /* 在这里添加全局样式 */
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
