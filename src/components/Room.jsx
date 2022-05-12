import { Box, Button, Center, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { colors } from "../styles/common";

export const Room = () => {
  const style = {
    box: css`
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.06);
    `,
  };

  return (
    <Center>
      <Flex
        css={style.box}
        flexDirection={`column`}
        gap={`54px`}
        border={`1px`}
        paddingX={`24px`}
        paddingTop={`40px`}
        paddingBottom={`16px`}
        borderRadius={`12px`}
      >
        <Box textAlign={`center`}>icon</Box>
        <Box>
          <Button bgColor={colors.primary} color={colors.white}>
            選ぶ
          </Button>
        </Box>
      </Flex>
    </Center>
  );
};
