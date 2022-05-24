import { Box, Button, Center } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

export const GallaryHeader = () => {
  const router = useRouter();
  const handleClick = () => {
    const { id } = router.query;
    router.push({
      pathname: "/room/[id]",
      query: { id },
    });
  };
  return (
    <Center as="header" height={`120px`}>
      <Button variant={`unstyled`} onClick={handleClick}>
        <Image
          alt="left-arrow"
          src="/icons/left-arrow.svg"
          width={`12px`}
          height={`12px`}
        />
      </Button>

      <Box>
        <Image
          height={`46px`}
          width={`266px`}
          src="/title/mosalabo_title.svg"
          alt="title"
        />
      </Box>
    </Center>
  );
};
