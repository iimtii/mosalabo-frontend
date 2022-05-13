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
import Image from "next/image";
import { useRouter } from "next/router";
import { colors } from "../styles/common";
import axios from "../axios";

const style = {
  box: css`
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  `,
};

export const Room = ({ id, src, maximum_image }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const createRoom = async () => {
    try {
      const res = await axios.post("/api/rooms", {
        theme_image_path: src,
        maximum_image: maximum_image,
      });
      return res.data.id;
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = () => {
    createRoom().then((res) => {
      router.push({
        pathname: "/room/[id]",
        query: { id: res },
      });
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
        paddingTop={`40px`}
        paddingBottom={`16px`}
        borderRadius={`12px`}
      >
        <Box textAlign={`center`}>
          <Image alt={`img${id}`} src={src} width={`120px`} height={`90px`} />
        </Box>
        <Box m={`auto`}>
          <Button
            onClick={onOpen}
            bgColor={colors.primary}
            color={colors.white}
          >
            選ぶ
          </Button>
        </Box>

        <Modal size={`xs`} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Center paddingY={`30px`}>このテーマで作成する？</Center>
              <Center>
                <Image
                  alt={`selected`}
                  src={src}
                  width={`270px`}
                  height={`350px`}
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
      </Flex>
    </Center>
  );
};
