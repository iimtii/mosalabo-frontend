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
import { colors } from "../../styles/common";
import Image from "next/image";

export const RoomCreateModal = ({ isOpen, onClose, iconSrc, handleSubmit }) => {
  return (
    <Modal size={`xs`} isOpen={isOpen} onClose={onClose} isCentered={`true`}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Center paddingY={`30px`}>このテーマで作成する？</Center>
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
