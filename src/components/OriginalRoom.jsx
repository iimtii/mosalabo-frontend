import { Center, Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { colors } from "../styles/common";
import { OriginalRoomModal } from "./modals/OriginalRoomModal";

export const OriginalRoom = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center paddingBottom={`40px`}>
        <Flex
          flexDirection={`column`}
          gap={`9px`}
          border={`1px`}
          borderColor={`#D9DFE7`}
          paddingTop={`18px`}
          paddingBottom={`16px`}
          borderRadius={`12px`}
          height={`149px`}
          width={`292px`}
          onClick={onOpen}
        >
          <Box m={`auto`}>
            <Image
              alt="original"
              src={`/icons/smile-icon.svg`}
              width={`60px`}
              height={`60px`}
              objectFit={`contain`}
            />
          </Box>
          <Box m={`auto`}>
            <Button
              borderRadius={`24px`}
              height={`38px`}
              width={`196px`}
              bgColor={colors.primary}
              color={colors.white}
              fontWeight={`semibold`}
              fontSize={`15px`}
              padding={`auto`}
            >
              自分でテーマを作る
            </Button>
          </Box>
        </Flex>
      </Center>

      <OriginalRoomModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
