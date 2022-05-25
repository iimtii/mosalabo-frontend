import { useContext } from "react";
import { useDisclosure, AspectRatio } from "@chakra-ui/react";
import { TemplateDisplayModal } from "./modals/TemplateDisplayModal";
import { RoomContext } from "../contexts/RoomContext";
import Image from "next/image";

export const TemplateDisplay = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentRoom } = useContext(RoomContext);

  return (
    <>
      <AspectRatio
        width={`90px`}
        height={`90px`}
        onClick={onOpen}
        ratio={1 / 1}
      >
        <Image
          alt="mosaic"
          src={currentRoom.themeImagePath}
          layout={`fill`}
          objectFit={`cover`}
        />
      </AspectRatio>
      <TemplateDisplayModal
        isOpen={isOpen}
        onClose={onClose}
        src={currentRoom.themeImagePath}
      />
    </>
  );
};
