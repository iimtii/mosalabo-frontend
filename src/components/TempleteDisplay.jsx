import { useContext } from "react";
import { useDisclosure, AspectRatio, Image } from "@chakra-ui/react";
import { TempleteDisplayModal } from "./modals/TempleteDisplayModal";
import { RoomContext } from "../contexts/RoomContext";

export const TempleteDisplay = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentRoom } = useContext(RoomContext);

  return (
    <>
      <AspectRatio width={`90px`} height={`90px`} onClick={onOpen}>
        <Image
          alt="mosaic"
          src={currentRoom.themeImagePath}
          layout={`fill`}
          objectFit={`cover`}
        />
      </AspectRatio>
      <TempleteDisplayModal
        isOpen={isOpen}
        onClose={onClose}
        src={currentRoom.themeImagePath}
      />
    </>
  );
};
