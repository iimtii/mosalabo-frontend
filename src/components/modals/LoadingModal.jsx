import {
  Modal,
  ModalOverlay,
  ModalContent,
  AspectRatio,
} from "@chakra-ui/react";
import Image from "next/image";

export const LoadingModal = () => {
  return (
    <Modal isOpen={1} isCentered={true} size={`xs`}>
      <ModalOverlay />
      <ModalContent>
        <AspectRatio ratio={1 / 1} zIndex={`1000`} top={`20%`} opacity={`1`}>
          <Image
            layout={`fill`}
            objectFit={`cover`}
            src="/gif/loading.gif"
            alt="loading"
          />
        </AspectRatio>
      </ModalContent>
    </Modal>
  );
};
