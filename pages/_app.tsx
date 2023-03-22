import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import { Global, css } from "@emotion/react";
import { ChakraProvider } from '@chakra-ui/react';
import store from '../store/store';

const globalStyles = css`
  /* 在这里添加全局样式 */
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Global styles={globalStyles} />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}
