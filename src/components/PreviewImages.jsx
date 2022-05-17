import Image from "next/image";
import { AspectRatio, Box, CloseButton, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { ImagesContext } from "../contexts/ImagesContext";

export const PreviewImages = () => {
  const { selectedImages, deleteImage } = useContext(ImagesContext);
  const handleDelete = (index) => {
    deleteImage(index);
  };
  return (
    <>
      {/* Todo: indexではなく、objectのidをkeyにする */}
      <Flex minWidth="max-content" alignItems="center" gap="2">
        {selectedImages?.map((img, index) => (
          <Box
            key={index}
            position={`relative`}
            paddingTop={8}
            borderRadius={`16px`}
          >
            <AspectRatio width={`70px`} ratio={1 / 1}>
              <Image
                alt={`img${index}`}
                src={img.data}
                layout={`fill`}
                objectFit={`cover`}
              />
            </AspectRatio>
            {/* <Box>{img.name}</Box> */}
            <CloseButton
              position={`absolute`}
              right={`4%`}
              top={`35%`}
              border={`2px`}
              borderStyle={`solid`}
              borderRadius={`full`}
              size={`xs`}
              onClick={() => handleDelete(index)}
              bgColor={`white`}
            />
          </Box>
        ))}
      </Flex>
    </>
  );
};
