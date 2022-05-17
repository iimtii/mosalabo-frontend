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
import { RoomContext } from "../contexts/RoomContext";
// import { sleep } from '../utils/sleep';

export const UploadModal = ({ isOpen, onClose }) => {
  const { selectedImages, resetImages } = useContext(ImagesContext);
  const { updateRoom, setLoading } = useContext(RoomContext);

  const router = useRouter();

  const handleUpload = async () => {
    const roomId = router.asPath.split("/").pop();
    setLoading(true);
    await axios
      .post("/api/images", {
        roomId,
        images: selectedImages,
      })
      .then(async (res) => {
        onCustomClose();
        // await sleep(1000);
        await updateRoom(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
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
