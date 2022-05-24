import { AspectRatio, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { colors } from "../styles/common";
import { GallaryDisplayModal } from "./modals/GallaryDisplayModal";

export const Gallary = ({ src }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <AspectRatio
        maxW={`400px`}
        ratio={1 / 1}
        onClick={onOpen}
        borderStyle={`solid`}
        borderColor={colors.black}
        borderWidth={`1px`}
      >
        <Image alt={`img`} src={src} layout={`fill`} objectFit={`cover`} />
      </AspectRatio>
      <GallaryDisplayModal isOpen={isOpen} onClose={onClose} src={src} />
    </>
  );
};
