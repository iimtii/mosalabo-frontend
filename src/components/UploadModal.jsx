import { useContext } from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
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
    <Modal isOpen={isOpen} onClose={onCustomClose} size={`xl`}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <FilesUpload />
        </ModalBody>
        <ModalFooter>
          <Box m={`auto`}>
            <Button
              bgGradient={`linear(to-r, ${colors.pink} 2.08%, ${colors.purple} 45.11%, ${colors.blue} 100%)`}
              color={colors.white}
              isDisabled={!selectedImages || selectedImages.length === 0}
              onClick={handleUpload}
              width={`full`}
            >
              Upload
            </Button>

            <Button color={colors.black} width={`100%`} onClick={onClose}>
              Cancel
            </Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
