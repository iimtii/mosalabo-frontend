import { ChakraProvider } from "@chakra-ui/react";
import { RoomContextProvider } from "../contexts/RoomContext";
import { TemplateContextProvider } from "../contexts/TemplateContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <TemplateContextProvider>
        <RoomContextProvider>
          <Component {...pageProps} />
        </RoomContextProvider>
      </TemplateContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
