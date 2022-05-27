import { useContext } from "react";
import { TemplateDisplayModal } from "./modals/TemplateDisplayModal";
import { AspectRatio, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { RoomContext } from "../contexts/RoomContext";

export const ArtDisplay = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentRoom } = useContext(RoomContext);

  return (
    <>
      <AspectRatio
        maxW={`400px`}
        ratio={4 / 3}
        margin={`auto`}
        onClick={onOpen}
      >
        <Image
          alt="mosaic"
          src={currentRoom?.mosaicImagePath}
          layout={`fill`}
          objectFit={`cover`}
        />
      </AspectRatio>
      <TemplateDisplayModal
        isOpen={isOpen}
        onClose={onClose}
        src={currentRoom?.mosaicImagePath}
      />
    </>
  );
};
