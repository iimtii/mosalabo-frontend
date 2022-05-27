import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
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
      <ModalContent paddingY={`7px`}>
        <ModalHeader>
          <Flex direction={`column`} gap={`5px`}>
            <Heading size={`md`} marginLeft={`10px`} color={colors.primary}>
              本当に移動しますか？
            </Heading>
            <Heading size={`xs`} opacity={`0.5`} margin={`10px`}>
              リンクをコピーせずにホームへ戻るとこのroomへは戻れなくなります
            </Heading>
          </Flex>

          <Flex justifyContent="space-between" paddingTop={`10px`}>
            <Flex>
              <Button
                bgColor={colors.primary}
                mr={3}
                onClick={onClose}
                color={colors.white}
                marginLeft={`15px`}
              >
                Cancel
              </Button>
            </Flex>
            <Flex marginRight={`15px`}>
              <Link href={`/`}>
                <Button variant="outline">move</Button>
              </Link>
            </Flex>
          </Flex>
        </ModalHeader>
      </ModalContent>
    </Modal>
  );
};
