import Image from "next/image";
import { Box, Center, Flex, useDisclosure } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { typography } from "../../styles/common";

import { useRouter } from "next/router";
import { TransferAlertModal } from "../modals/TransferAlertModal";

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
        <Center as="header" height={"120px"}>
          <a onClick={onOpen}>
            <Flex gap={`0px`}>
              <Flex>
                <Image
                  alt="home"
                  src={`/icons/home.svg`}
                  width={`40px`}
                  height={`40px`}
                  css={style.home}
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
        <Center as="header" height={"120px"}>
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
      <TransferAlertModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
