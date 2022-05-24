import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { APP_DESCRIPTION, APP_NAME } from "../../constants/common";
import { GallaryHeader } from "./GallaryHeader";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <NextSeo title={APP_NAME} description={APP_DESCRIPTION} />
      {router.pathname === "/gallary/[id]" ? <GallaryHeader /> : <Header />}
      <main>{children}</main>
    </>
  );
};
