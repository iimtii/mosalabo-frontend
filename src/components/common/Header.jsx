import Image from "next/image";
import { Box, Center, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { typography } from "../../styles/common";
import Link from "next/link";
import { useRouter } from "next/router";

const style = {
  font: css`
    ${typography.ibm_title}
  `,
};

export const Header = () => {
  const router = useRouter();

  return (
    <Center as="header" height={"100px"}>
      <Flex gap={`100px`}>
        <Box>
          <Link href={"/"}>
            <a>
              <Flex gap={`20px`}>
                <Flex alignItems={`center`} justifyContent={`center`}>
                  <Image
                    alt="logo"
                    src={`/icons/Logo.svg`}
                    width={`40px`}
                    height={`40px`}
                  />
                </Flex>
                <Box css={style.font}>Mosalabo</Box>
              </Flex>
            </a>
          </Link>
        </Box>
        {router.pathname !== "/" ? (
          <Flex
            alignItems={`center`}
            justifyContent={`center`}
            paddingTop={`3px`}
          >
            <Link href={`/`}>
              <a>
                <Image
                  alt="home"
                  src={`/icons/home.svg`}
                  width={`40px`}
                  height={`40px`}
                  css={style.home}
                />
              </a>
            </Link>
          </Flex>
        ) : null}
      </Flex>
    </Center>
  );
};
