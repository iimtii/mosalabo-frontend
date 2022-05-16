import { useContext } from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import { colors } from "../styles/common";
import { FilesUpload } from "./FIlesUpload";
import { ImagesContext } from "../contexts/ImagesContext";

export const UploadModal = ({ isOpen, onClose }) => {
  const { selectedImages, resetImages } = useContext(ImagesContext);
  const handleUpload = () => {
    console.log("upload");
    onCustomClose();
  };

  const onCustomClose = () => {
    resetImages();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onCustomClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <FilesUpload />
        </ModalBody>
        <ModalFooter>
          <Box m={`auto`}>
            <Button
              bgColor={colors.primary}
              color={colors.white}
              isDisabled={!selectedImages || selectedImages.length === 0}
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
