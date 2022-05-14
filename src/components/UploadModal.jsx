import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import { colors } from "../styles/common";

export const UploadModal = ({ isOpen, onClose }) => {
  const handleUpload = () => {
    console.log("upload");
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Center paddingY={`30px`}>写真をアップロード</Center>
          <input type={`file`} />
        </ModalBody>
        <ModalFooter>
          <Box m={`auto`}>
            <Button
              bgColor={colors.primary}
              color={colors.white}
              onClick={handleUpload}
            >
              アップロード
            </Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
