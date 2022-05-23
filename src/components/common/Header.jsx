import Image from "next/image";
import {
  Box,
  Center,
  Flex,
  useDisclosure,
  Modal,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  Button,
  Heading,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { typography, colors } from "../../styles/common";
import Link from "next/link";
import { useRouter } from "next/router";

const style = {
  font: css`
    ${typography.ibm_title}
  `,
};

export const Header = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {router.pathname !== "/" ? (
        <Center as="header" height={"130px"} paddingTop={`40px`}>
          <a onClick={onOpen}>
            <Flex gap={`0px`}>
              <Flex>
                <Image
                  alt="home"
                  src={`/icons/home.svg`}
                  width={`40px`}
                  height={`40px`}
                  css={style.home}
                  paddingTop={`50px`}
                />
              </Flex>
              <Box>
                <Image
                  height={`46px`}
                  width={`266px`}
                  src="/title/mosalabo_title.svg"
                  alt="title"
                />
              </Box>
            </Flex>
          </a>
        </Center>
      ) : (
        <Center as="header" height={"130px"} paddingTop={`40px`}>
          <Flex gap={`0px`}>
            <Box>
              <Image
                height={`46px`}
                width={`266px`}
                src="/title/mosalabo_title.svg"
                alt="title"
              />
            </Box>
          </Flex>
        </Center>
      )}

      <Modal size={`xs`} isOpen={isOpen} onClose={onClose} isCentered={`true`}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading size={`lg`} marginLeft={`10px`}>
              本当に移動しますか？
            </Heading>
            <Heading size={`sm`} opacity={`0.5`} margin={`10px`}>
              リンクをコピーせずにホームへ戻るとこのroomへは戻れなくなります
            </Heading>

            <Flex justifyContent="space-between" paddingTop={`10px`}>
              <Flex>
                <Button
                  bgColor={`#84A6EE`}
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
    </>
  );
};
