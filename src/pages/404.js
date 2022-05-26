import { Header } from "../components/common/Header";
import { Layout } from "../components/common/Layout";
import { Center, Flex, Box, AspectRatio } from "@chakra-ui/react";
import Image from "next/image";

export default function Custom404() {
  return (
    <>
      <Center as="header" height={"120px"}>
        <Flex gap={`0px`}>
          <Box>
            <Image
              height={`46px`}
              width={`266px`}
              src="/title/mosalabo_title.svg"
              alt="title"
            />
          </Box>
        </Flex>
      </Center>
      <Box paddingTop={`30px`}>
        <AspectRatio maxH={`400px`} ratio={2 / 3}>
          <Image
            alt="404"
            src="/404/404.jpeg"
            layout={`fill`}
            objectFit={`contain`}
          ></Image>
        </AspectRatio>
      </Box>
      <Center>
        <Box fontWeight={`extrabold`} fontFamily={`sans-serif`} marginY={`10%`}>
          ラボを間違えています...
          <br />
          <br />
          危険な実験はしないように
        </Box>
      </Center>
    </>
  );
}
