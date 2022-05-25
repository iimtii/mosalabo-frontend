import { Center, Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { colors } from "../styles/common";
import { OriginalRoomModal } from "./modals/OriginalRoomModal";

export const OriginalRoom = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center paddingBottom={`55px`} onClick={onOpen}>
        <Flex
          flexDirection={`column`}
          gap={`22px`}
          border={`1px`}
          borderColor={`#E2E8F0`}
          paddingTop={`30px`}
          paddingBottom={`16px`}
          borderRadius={`12px`}
          height={`180px`}
          width={`266px`}
        >
          <Box m={`auto`}>
            <Image
              alt="original"
              src={`https://mosalabo-images.s3.ap-northeast-1.amazonaws.com/Smile-icon.png`}
              width={`60px`}
              height={`60px`}
              objectFit={`contain`}
            />
          </Box>
          <Box m={`auto`}>
            <Button
              borderRadius={`24px`}
              width={`172px`}
              bgColor={colors.primary}
              color={colors.white}
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
