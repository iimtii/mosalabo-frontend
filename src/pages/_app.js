import { ChakraProvider } from "@chakra-ui/react";
import { ImagesContextProvider } from "../contexts/ImagesContext";
import { RoomContextProvider } from "../contexts/RoomContext";
import { TemplateContextProvider } from "../contexts/TemplateContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <TemplateContextProvider>
        <RoomContextProvider>
          <ImagesContextProvider>
            <Component {...pageProps} />
          </ImagesContextProvider>
        </RoomContextProvider>
      </TemplateContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
