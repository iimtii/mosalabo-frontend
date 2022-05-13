import { Button, Center, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { colors } from "../../styles/common";

export const Footer = () => {
  return (
    <Center height={`104px`} as="footer" width={`100%`} zIndex={`banner`}>
      <Flex gap={`68px`}>
        <Button
          bgColor={colors.white}
          variant="link"
          _focus={{ _focus: "none" }}
        >
          <Image
            alt="save"
            src={`/icons/save.svg`}
            width={`40px`}
            height={`40px`}
          />
        </Button>
        <Button
          bgColor={colors.white}
          variant="link"
          _focus={{ _focus: "none" }}
        >
          <Image
            alt="save"
            src={`/icons/instagram.svg`}
            width={`40px`}
            height={`40px`}
          />
        </Button>
      </Flex>
    </Center>
  );
};
