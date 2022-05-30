import { ChakraProvider } from "@chakra-ui/react";
import { DragAndDropErrorContextProvider } from "../contexts/DragAndDropErrorContext";
import { GallaryContextProvider } from "../contexts/GallaryContext";
import { ImagesContextProvider } from "../contexts/ImagesContext";
import { NotFoundContextProvider } from "../contexts/NotFoundContext";
import { ProgressBarContextProvider } from "../contexts/ProgressBarContext";
import { RoomContextProvider } from "../contexts/RoomContext";
import { TemplateContextProvider } from "../contexts/TemplateContext";
import { LoadingContextProvider } from "../contexts/LoadingContext ";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <TemplateContextProvider>
        <NotFoundContextProvider>
          <ProgressBarContextProvider>
            <RoomContextProvider>
              <LoadingContextProvider>
                <DragAndDropErrorContextProvider>
                  <ImagesContextProvider>
                    <GallaryContextProvider>
                      <Component {...pageProps} />
                    </GallaryContextProvider>
                  </ImagesContextProvider>
                </DragAndDropErrorContextProvider>
              </LoadingContextProvider>
            </RoomContextProvider>
          </ProgressBarContextProvider>
        </NotFoundContextProvider>
      </TemplateContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
