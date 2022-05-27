import Image from "next/image";
import { AspectRatio, Box, CloseButton, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { ImagesContext } from "../contexts/ImagesContext";
import { css } from "@emotion/react";

const style = {
  img: css`
    border-radius: 10px;
  `,
};

export const PreviewImages = () => {
  const { selectedImages, deleteImage } = useContext(ImagesContext);
  const handleDelete = (index) => {
    deleteImage(index);
  };
  return (
    <>
      <Flex alignItems="center" gap="2" overflowX={`scroll`}>
        {selectedImages?.map((img, index) => (
          <Box key={index} position={`relative`} paddingTop={8}>
            <AspectRatio width={`70px`} ratio={1 / 1}>
              <Image
                alt={`img${index}`}
                src={img.data}
                layout={`fill`}
                objectFit={`cover`}
                css={style.img}
              />
            </AspectRatio>
            <CloseButton
              position={`absolute`}
              right={`4%`}
              top={`35%`}
              border={`1px`}
              borderStyle={`solid`}
              borderRadius={`full`}
              size={`sm`}
              onClick={() => handleDelete(index)}
              bgColor={`white`}
              _active={{
                bgColor: "white",
              }}
            />
          </Box>
        ))}
      </Flex>
    </>
  );
};
