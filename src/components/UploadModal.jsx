import { useState } from "react";
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

export const UploadModal = ({ isOpen, onClose }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const handleUpload = () => {
    console.log("upload");
    onCustomClose();
  };

  const onCustomClose = () => {
    setSelectedImages([]);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onCustomClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <FilesUpload
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
          />
        </ModalBody>
        <ModalFooter>
          <Box m={`auto`}>
            <Button
              bgColor={colors.primary}
              color={colors.white}
              isDisabled={!selectedImages}
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
