import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";

export const TemplateDisplayModal = ({ isOpen, onClose, src }) => {
  return (
    <Modal size={`xs`} isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton zIndex={1} />
        <ModalBody>
          <Center minHeight={`500px`}>
            <Image
              alt={`img`}
              src={src}
              layout={`fill`}
              objectFit={`contain`}
            />
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
