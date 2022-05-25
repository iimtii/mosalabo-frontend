import { useDisclosure, AspectRatio, Image } from "@chakra-ui/react";
import { TempleteDisplayModal } from "./modals/TempleteDisplayModal";

export const TempleteDisplay = ({ src }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <AspectRatio width={`90px`} height={`90px`} onClick={onOpen}>
        <Image alt="mosaic" src={src} layout={`fill`} objectFit={`cover`} />
      </AspectRatio>
      <TempleteDisplayModal isOpen={isOpen} onClose={onClose} src={src} />
    </>
  );
};
