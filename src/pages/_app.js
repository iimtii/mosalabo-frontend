import { ChakraProvider } from "@chakra-ui/react";
import { DragAndDropErrorContextProvider } from "../contexts/DragAndDropErrorContext";
import { GallaryContextProvider } from "../contexts/GallaryContext";
import { ImagesContextProvider } from "../contexts/ImagesContext";
import { NotFoundContextProvider } from "../contexts/NotFoundContext";
import { ProgressBarContextProvider } from "../contexts/ProgressBarContext";
import { RoomContextProvider } from "../contexts/RoomContext";
import { TemplateContextProvider } from "../contexts/TemplateContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <TemplateContextProvider>
        <NotFoundContextProvider>
          <ProgressBarContextProvider>
            <RoomContextProvider>
              <DragAndDropErrorContextProvider>
                <ImagesContextProvider>
                  <GallaryContextProvider>
                    <Component {...pageProps} />
                  </GallaryContextProvider>
                </ImagesContextProvider>
              </DragAndDropErrorContextProvider>
            </RoomContextProvider>
          </ProgressBarContextProvider>
        </NotFoundContextProvider>
      </TemplateContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
