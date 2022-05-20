import Image from "next/image";
import { Box, Center, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { typography } from "../../styles/common";
import Link from "next/link";
import { useRouter } from "next/router";

const style = {
  font: css`
    ${typography.ibm_title}
  `,
};

export const Header = () => {
  const router = useRouter();

  return (
    <Center as="header" height={"130px"} paddingTop={`40px`}>
      <Link href={`/`}>
        <a>
          <Flex gap={`0px`} justifyContent={`left`}>
            {router.pathname !== "/" ? (
              <Flex>
                <Image
                  alt="home"
                  src={`/icons/home.svg`}
                  width={`40px`}
                  height={`40px`}
                  css={style.home}
                  paddingTop={`50px`}
                />
              </Flex>
            ) : null}
            <Box>
              <Image
                height={`46px`}
                width={`266px`}
                src="/title/mosalabo_title.svg"
                alt="title"
              />
            </Box>
          </Flex>
        </a>
      </Link>
    </Center>
  );
};
