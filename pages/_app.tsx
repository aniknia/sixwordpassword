import type { AppProps } from "next/app";
import { chakra } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/layout";
import theme from "../components/general/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
