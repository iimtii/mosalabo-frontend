import Image from "next/image";
import { AspectRatio, Box, CloseButton } from "@chakra-ui/react";

export const PreviewImages = ({ selectedImages }) => {
  return (
    <>
      {selectedImages?.map((img, index) => (
        <Box key={index} position={`relative`} paddingTop={8}>
          <AspectRatio width={`300px`} ratio={4 / 3}>
            <Image
              alt={`img${index}`}
              src={URL.createObjectURL(img)}
              layout={`fill`}
              objectFit={`cover`}
            />
          </AspectRatio>
          <Box>{img.name}</Box>
          <CloseButton
            position={`absolute`}
            right={`8%`}
            top={`4%`}
            border={`1px`}
            borderStyle={`solid`}
            borderRadius={`full`}
            size={`md`}
          />
        </Box>
      ))}
    </>
  );
};
