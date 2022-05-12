import { Box, Center } from "@chakra-ui/react";
import { colors, typography } from "../styles/common";
import { css } from "@emotion/react";

export const Heading = () => {
  const style = {
    font: css`
      ${typography.ibm_heading}
      color: ${colors.white}
    `,
    box: css`
      border: 1px solid #e2e8f0;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.06);
    `,
  };
  return (
    <Center paddingTop={`28px`}>
      <Box
        css={style.box}
        borderRadius={`16px`}
        bgGradient="linear(to-r, #FBA49F 2.08%, #CBA4EA 45.11%, #58A6EF 100%)"
      >
        <Box css={style.font} paddingX={`36px`} paddingY={`8px`}>
          モザイクにするテーマ
          <br />
          を選んでね！
        </Box>
      </Box>
    </Center>
  );
};
