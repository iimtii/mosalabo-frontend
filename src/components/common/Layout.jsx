import { NextSeo } from "next-seo";
import { APP_DESCRIPTION, APP_NAME } from "../../constants/common";
import { Box } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <>
      <NextSeo title={APP_NAME} description={APP_DESCRIPTION} />
      <header>
        <Box height={"80px"}>header</Box>
      </header>
      <main>{children}</main>
    </>
  );
};
