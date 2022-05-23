import { ChakraProvider } from "@chakra-ui/react";
import { GallaryContextProvider } from "../contexts/GallaryContext";
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
              <GallaryContextProvider>
                <Component {...pageProps} />
              </GallaryContextProvider>
            </ImagesContextProvider>
          </RoomContextProvider>
        </ProgressBarContextProvider>
      </TemplateContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
