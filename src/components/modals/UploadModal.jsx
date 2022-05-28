import { useContext } from "react";
import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import { colors, typography } from "../../styles/common";
import { DragAndDropFiles } from "../DragAndDropFiles";
import { ImagesContext } from "../../contexts/ImagesContext";
import axios from "../../axios";
import { useRouter } from "next/router";
import { RoomContext } from "../../contexts/RoomContext";
import { OVER_MAX_NUMBER_OF_IMAGES } from "../../constants/common";
import { css } from "@emotion/react";
import { MAX_NUMBER_OF_IMAGES } from "../../constants/room";
import { DragAndDropErrorContext } from "../../contexts/DragAndDropErrorContext";

const style = {
  text: css`
    ${typography.text}
  `,
};

export const UploadModal = ({ isOpen, onClose }) => {
  const { selectedImages, resetImages } = useContext(ImagesContext);
  const { updateRoom, setLoading, currentRoom } = useContext(RoomContext);
  const { hasOverNumberError } = useContext(DragAndDropErrorContext);
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
        currentRoom?.maximumImage ||
      hasOverNumberError
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
        if (res.data.code === "-1") {
          alert(res.data.message);
          throw new Error(res.data.message);
        }
        onCustomClose();
        await updateRoom(res.data);
      })
      .catch((err) => {
        console.log(err);
        router.reload();
      })
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
        <ModalBody css={style.text}>
          <Center paddingY={`30px`} css={style.modal_title}>
            写真をアップロード(最大{MAX_NUMBER_OF_IMAGES}枚まで)
          </Center>
          <Center>
            <Box
              display={`inline`}
              color={hasOverNumberError ? colors.error : colors.black}
              fontWeight={hasOverNumberError ? `bold` : `normal`}
            >
              {selectedImages.length}&nbsp;
            </Box>
            /&nbsp;{MAX_NUMBER_OF_IMAGES}
          </Center>
          <DragAndDropFiles />
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
              // Todo: disabled時のhoverアクションを消す
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
