import Image from "next/image";
import { Box, Center, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { typography } from "../../styles/common";

export const Header = () => {
  const style = {
    font: css`
      ${typography.IBM_PLEX_SANS}
    `,
  };

  return (
    <header>
      <Center height={"100px"}>
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
      </Center>
    </header>
  );
};
