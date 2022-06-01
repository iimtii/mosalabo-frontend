import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Center,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { colors } from "../../styles/common";

export const GallaryDisplayModal = ({ isOpen, onClose, src }) => {
  const onSavegallary = async () => {
    await fetch(src)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `gallary.jpg`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

  return (
    <Modal size={`xl`} isOpen={isOpen} onClose={onClose} isCentered={true}>
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
        <ModalFooter>
          <Button
            bgColor={colors.white}
            variant="link"
            _focus={{}}
            onClick={onSavegallary}
          >
            <Image
              alt="save"
              src={`/icons/save.svg`}
              width={`40px`}
              height={`40px`}
            />
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
