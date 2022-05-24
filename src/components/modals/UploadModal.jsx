import { useContext } from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import { colors } from "../../styles/common";
import { FilesUpload } from "../FIlesUpload";
import { ImagesContext } from "../../contexts/ImagesContext";
import axios from "../../axios";
import { useRouter } from "next/router";
import { RoomContext } from "../../contexts/RoomContext";
import { OVER_MAX_NUMBER_OF_IMAGES } from "../../constants/common";

export const UploadModal = ({ isOpen, onClose }) => {
  const { selectedImages, resetImages } = useContext(ImagesContext);
  const { updateRoom, setLoading, currentRoom } = useContext(RoomContext);
  const toast = useToast();

  const router = useRouter();

  const alert = (message) =>
    toast({
      title: message,
      status: "error",
      duration: 5000,
      isClosable: true,
    });

  const handleUpload = async () => {
    if (
      currentRoom?.numberOfImage + selectedImages.length >
      currentRoom?.maximumImage
    ) {
      alert(OVER_MAX_NUMBER_OF_IMAGES);
      return;
    }

    const roomId = router.asPath.split("/").pop();
    setLoading(true);
    await axios
      .post("/images", {
        roomId,
        images: selectedImages,
      })
      .then(async (res) => {
        // Todo: error時のハンドリングが機能していない
        if (res.data.code === "-1") {
          alert(res.data.message);
          throw new Error(res.data.message);
        }
        onCustomClose();
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
    <Modal
      isOpen={isOpen}
      onClose={onCustomClose}
      size={`sm`}
      isCentered={true}
    >
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
              marginBottom={`8px`}
              fontSize={`xl`}
              //{todo} disabled時のhoverアクションを消す
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
