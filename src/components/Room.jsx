import {
  Box,
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { colors } from "../styles/common";

const style = {
  box: css`
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  `,
};

export const Room = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const handleSubmit = () => {
    router.push({
      pathname: "/room/[id]",
      query: { id: "123" },
    });
  };

  return (
    <Center>
      <Flex
        css={style.box}
        flexDirection={`column`}
        gap={`54px`}
        border={`1px`}
        borderColor={`#E2E8F0`}
        paddingX={`24px`}
        paddingTop={`40px`}
        paddingBottom={`16px`}
        borderRadius={`12px`}
      >
        <Box textAlign={`center`}>icon</Box>
        <Box>
          <Button
            onClick={onOpen}
            bgColor={colors.primary}
            color={colors.white}
          >
            選ぶ
          </Button>

          <Modal size={`xs`} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Box paddingY={`30px`}>このテーマでアルバムを作成します。</Box>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={handleSubmit}
                  bgColor={colors.primary}
                  color={colors.white}
                >
                  作成
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
    </Center>
  );
};
