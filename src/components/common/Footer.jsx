import { Button, Center, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { INSTAGRAM_URL } from "../../constants/common";
import { RoomContext } from "../../contexts/RoomContext";
import { colors } from "../../styles/common";

export const Footer = () => {
  const { currentRoom } = useContext(RoomContext);

  const onSaveMosaic = async () => {
    await fetch(currentRoom.mosaicImagePath).then((response) => {
      const blob = response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `mosaic.jpeg`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    });
  };

  return (
    <Center
      height={`104px`}
      as="footer"
      width={`100%`}
      zIndex={`banner`}
      position={`fixed`}
      bottom={`0`}
    >
      <Flex gap={`68px`}>
        <Button
          bgColor={colors.white}
          variant="link"
          _focus={{}}
          onClick={onSaveMosaic}
          isDisabled={!currentRoom?.mosaicImagePath}
        >
          <Image
            alt="save"
            src={`/icons/save.svg`}
            width={`40px`}
            height={`40px`}
          />
        </Button>
        <Link href={INSTAGRAM_URL} passHref>
          <a target="_blank" style={{ display: "flex" }}>
            <Image
              alt="save"
              src={`/icons/instagram.svg`}
              width={`40px`}
              height={`40px`}
            />
          </a>
        </Link>
      </Flex>
    </Center>
  );
};
