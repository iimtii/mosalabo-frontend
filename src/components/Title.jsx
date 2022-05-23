import { Box, Center } from "@chakra-ui/react";
import { colors, typography } from "../styles/common";
import { css } from "@emotion/react";

export const Title = () => {
  const style = {
    font: css`
      ${typography.ibm_heading}
      color: ${colors.white}
    `,
    box: css`
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.06);
    `,
  };

  return (
    <Center paddingTop={`8px`} paddingBottom={`66px`}>
      <Box
        css={style.box}
        borderRadius={`16px`}
        borderColor={colors.light_gray}
        borderStyle={`solid`}
        borderWidth={`1px`}
        bgGradient={`linear(to-r, ${colors.pink} 2.08%, ${colors.purple} 45.11%, ${colors.blue} 100%)`}
        height={`95px`}
        width={`303px`}
      >
        <Box
          css={style.font}
          display={`flex`}
          alignContent={`center`}
          justifyContent={`center`}
          paddingTop={`15px`}
          fontWeight={`semibold`}
        >
          モザイクにするテーマを
          <br />
          選んでね！
        </Box>
      </Box>
    </Center>
  );
};
