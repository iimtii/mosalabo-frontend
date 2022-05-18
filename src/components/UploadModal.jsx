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
      .post("/images", {
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

            <Button color={colors.black} width={`100%`} onClick={onCustomClose}>
              Cancel
            </Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
