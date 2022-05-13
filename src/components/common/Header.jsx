import Image from "next/image";
import { Box, Center, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { typography } from "../../styles/common";
import Link from "next/link";

export const Header = () => {
  const style = {
    font: css`
      ${typography.ibm_title}
    `,
  };

  return (
    <header>
      <Center height={"100px"} marginTop={`40px`}>
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
        </Flex>
      </Center>
    </header>
  );
};
