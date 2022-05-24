import { useContext } from "react";
import { GallaryContext } from "../contexts/GallaryContext";
import Image from "next/image";
import { Center } from "@chakra-ui/react";

export const GallaryDisplay = () => {
  const { currentGallary } = useContext(GallaryContext);
  if (!currentGallary || currentGallary.length === 0)
    return <Center>No images exist...</Center>;
  return currentGallary.map((path, index) => (
    <Image
      key={index}
      alt={`img${index}`}
      src={path}
      width="200px"
      height="200px"
    />
  ));
};
