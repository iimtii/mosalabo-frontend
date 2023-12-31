import { Button, Center, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { INSTAGRAM_URL } from "../../constants/common";
import { RoomContext } from "../../contexts/RoomContext";
import { colors } from "../../styles/common";

export const Footer = () => {
  const { currentRoom } = useContext(RoomContext);
  const router = useRouter();

  const handleGallary = () => {
    const { id } = router.query;
    router.push({
      pathname: "/gallary/[id]",
      query: { id: id },
    });
  };

  const onSaveMosaic = async () => {
    await fetch(currentRoom.mosaicImagePath)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `mosaic.jpg`);
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
      marginTop={
        !!currentRoom && currentRoom.originalFlg && !!currentRoom.themeImagePath
          ? 0
          : 5
      }
    >
      <Flex gap={`68px`}>
        <Button
          bgColor={colors.white}
          variant="link"
          _focus={{}}
          onClick={handleGallary}
        >
          <Image
            alt="gallary"
            src={`/icons/gallary.svg`}
            width={`40px`}
            height={`40px`}
          />
        </Button>

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
