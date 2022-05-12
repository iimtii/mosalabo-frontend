import { NextSeo } from "next-seo";
import { APP_DESCRIPTION, APP_NAME } from "../../constants/common";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <>
      <NextSeo title={APP_NAME} description={APP_DESCRIPTION} />
      <Header />
      <main>{children}</main>
    </>
  );
};
