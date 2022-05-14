import { Button, Center, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { RoomContext } from "../../contexts/RoomContext";
import { colors } from "../../styles/common";

export const Footer = () => {
  const { currentRoom } = useContext(RoomContext);

  const onSaveMosaic = async () => {
    // Todo: 画像データをfetchしてdownload(okがfalseになっている)
    console.log(currentRoom.mosaicImagePath);
    await fetch(currentRoom.mosaicImagePath, { mode: "no-cors" }).then((res) =>
      console.log(res.ok),
    );

    // .then((response) => response.blob())
    // .then((blob) => {
    //   console.log(blob)
    // Create blob link to download
    // const url = window.URL.createObjectURL(
    //   new Blob([blob]),
    // );
    // const link = document.createElement('a');
    // link.href = url;
    // link.setAttribute(
    //   'download',
    //   `test.jpg`,
    // );

    // // Append to html link element page
    // document.body.appendChild(link);

    // // Start download
    // link.click();

    // // Clean up and remove the link
    // link.parentNode.removeChild(link);
    // });
  };

  return (
    <Center height={`104px`} as="footer" width={`100%`} zIndex={`banner`}>
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
        <Link href="https://www.instagram.com/" passHref>
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
