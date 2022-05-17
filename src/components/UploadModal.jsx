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
import { FilesUpload } from "./FilesUpload";
import { ImagesContext } from "../contexts/ImagesContext";
import axios from "../axios";
import { useRouter } from "next/router";

export const UploadModal = ({ isOpen, onClose }) => {
  const { selectedImages, resetImages } = useContext(ImagesContext);
  const router = useRouter();

  const handleUpload = async () => {
    const roomId = router.asPath.split("/").pop();

    // Todo: 画像をbase64に変更
    console.log(selectedImages);
    const images = null;
    await axios
      .post("/api/images", {
        roomId,
        images,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
