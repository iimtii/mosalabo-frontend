import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Center,
  Box,
  Button,
} from "@chakra-ui/react";
import { colors } from "../../styles/common";
import Image from "next/image";
import { useState } from "react";
import { css } from "@emotion/react";

const styles = {
  input: css`
    opacity: 0;
    viisbility: hidden;
    width: 100%;
    height: 100%;
  `,
};

export const OriginalRoomModal = ({ isOpen, onClose, handleSubmit }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedImage(e.target.value);
  };

  return (
    <Modal size={`xs`} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Center paddingY={`30px`}>テーマを選択してね</Center>
          <Center>
            <Box
              width={`270px`}
              height={`350px`}
              border={`1px`}
              borderStyle={`dashed`}
              borderColor={colors.black}
            >
              {selectedImage ? (
                <Image
                  src="/icons/home.svg"
                  alt={`selected`}
                  objectFit={`contain`}
                  width={`270px`}
                  height={`350px`}
                />
              ) : (
                <label>
                  <input
                    css={styles.input}
                    type={`file`}
                    onChange={handleChange}
                  />
                </label>
              )}
            </Box>
          </Center>
        </ModalBody>
        <ModalFooter>
          <Box m={`auto`}>
            <Button
              onClick={handleSubmit}
              bgColor={colors.primary}
              color={colors.white}
              isDisabled={!selectedImage}
            >
              作成
            </Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
