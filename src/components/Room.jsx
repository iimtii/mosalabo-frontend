import { Box, Button, Center, Flex, useDisclosure } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { colors } from "../styles/common";
import axios from "../axios";
import { RoomCreateModal } from "./modals/RoomCreateModal";

const style = {
  box: css`
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  `,
};

export const Room = ({ id, src, iconSrc, maximumImage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const createRoom = async () => {
    try {
      const res = await axios.post("template/rooms", {
        themeImagePath: src,
        maximumImage: maximumImage,
        originalFlag: false,
      });
      return res.data.uuid;
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = () => {
    createRoom().then((res) => {
      router.push({
        pathname: "/room/[id]",
        query: { id: res },
      });
    });
  };

  return (
    <Center paddingBottom={`15px`}>
      <Flex
        css={style.box}
        flexDirection={`column`}
        gap={`22px`}
        border={`1px`}
        borderColor={`#E2E8F0`}
        paddingTop={`30px`}
        paddingBottom={`16px`}
        borderRadius={`12px`}
        height={`180px`}
        width={`113px`}
      >
        <Box textAlign={`center`}>
          <Image
            alt={`img${id}`}
            src={iconSrc}
            width={`60px`}
            height={`60px`}
            objectFit={`contain`}
          />
        </Box>
        <Box m={`auto`}>
          <Button
            onClick={onOpen}
            bgColor={colors.primary}
            color={colors.white}
            borderRadius={`24px`}
            width={`72px`}
          >
            選ぶ
          </Button>
        </Box>

        <RoomCreateModal
          isOpen={isOpen}
          onClose={onClose}
          src={src}
          handleSubmit={handleSubmit}
        />
      </Flex>
    </Center>
  );
};
