import { ChakraProvider } from "@chakra-ui/react";
import { ImagesContextProvider } from "../contexts/ImagesContext";
import { ProgressBarContextProvider } from "../contexts/ProgressBarContext";
import { RoomContextProvider } from "../contexts/RoomContext";
import { TemplateContextProvider } from "../contexts/TemplateContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <TemplateContextProvider>
        <ProgressBarContextProvider>
          <RoomContextProvider>
            <ImagesContextProvider>
              <Component {...pageProps} />
            </ImagesContextProvider>
          </RoomContextProvider>
        </ProgressBarContextProvider>
      </TemplateContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
