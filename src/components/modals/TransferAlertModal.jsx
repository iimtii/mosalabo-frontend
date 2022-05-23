import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Flex,
  Button,
  Heading,
} from "@chakra-ui/react";
import { colors } from "../../styles/common";
import Link from "next/link";

export const TransferAlertModal = ({ isOpen, onClose }) => {
  return (
    <Modal size={`xs`} isOpen={isOpen} onClose={onClose} isCentered={`true`}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading size={`lg`}>本当に移動しますか？</Heading>
          <Heading size={`sm`} opacity={`0.5`}>
            リンクをコピーせずにホームへ戻るとこのroomへは戻れなくなります
          </Heading>
        </ModalHeader>

        <ModalFooter>
          <Flex gap={`5rem`}>
            <Button
              bgGradient={`linear(to-r, ${colors.pink} 2.08%, ${colors.purple} 45.11%, ${colors.blue} 100%)`}
              mr={3}
              onClick={onClose}
              color={colors.white}
            >
              Cancel
            </Button>
            <Link href={`/`}>
              <Button variant="outline">move</Button>
            </Link>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
