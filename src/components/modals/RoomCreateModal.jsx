import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  Center,
  ModalFooter,
  Box,
  Button,
} from "@chakra-ui/react";
import { colors, typography } from "../../styles/common";
import Image from "next/image";
import { css } from "@emotion/react";

const style = {
  input: css`
    opacity: 0;
    width: 100%;
    height: 100%;
  `,
  text: css`
    ${typography.text}
  `,
  modal_title: css`
    ${typography.modal_title}
  `,
};

export const RoomCreateModal = ({ isOpen, onClose, iconSrc, handleSubmit }) => {
  return (
    <Modal size={`xs`} isOpen={isOpen} onClose={onClose} isCentered={`true`}>
      <ModalOverlay />
      <ModalContent css={style.text}>
        <ModalCloseButton />
        <ModalBody>
          <Center paddingY={`30px`} css={style.modal_title}>
            このテーマで作成する？
          </Center>
          <Center>
            <Image
              alt={`selected`}
              src={iconSrc}
              objectFit={`contain`}
              width={`270px`}
              height={`300px`}
            />
          </Center>
        </ModalBody>
        <ModalFooter>
          <Box m={`auto`}>
            <Button
              onClick={handleSubmit}
              bgColor={colors.primary}
              color={colors.white}
            >
              作成
            </Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
