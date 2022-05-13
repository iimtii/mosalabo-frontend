import { ChakraProvider } from "@chakra-ui/react";
import { TemplateContextProvider } from "../contexts/TemplateContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <TemplateContextProvider>
        <Component {...pageProps} />
      </TemplateContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
