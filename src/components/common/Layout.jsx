import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { APP_DESCRIPTION, APP_NAME } from "../../constants/common";
import { GallaryHeader } from "./GallaryHeader";
import { Header } from "./Header";
import { css } from "@emotion/react";
import { typography } from "../../styles/common";

export const Layout = ({ children }) => {
  const router = useRouter();
  const style = {
    text: css`
      ${typography.text}
    `,
  };

  return (
    <>
      <NextSeo title={APP_NAME} description={APP_DESCRIPTION} />
      {router.pathname === "/gallary/[id]" ? <GallaryHeader /> : <Header />}
      <main css={style.text}>{children}</main>
    </>
  );
};
