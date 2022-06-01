import { useContext } from "react";
import { GallaryContext } from "../contexts/GallaryContext";
import { Grid, Box, AspectRatio } from "@chakra-ui/react";
import { Gallary } from "./Gallary";
import Image from "next/image";

export const GallaryDisplay = () => {
  const { currentGallary } = useContext(GallaryContext);

  if (!currentGallary || currentGallary.length === 0)
    return (
      <Box paddingTop={`19%`} m={`auto`} maxW={`250px`}>
        <AspectRatio ratio={2 / 3}>
          <Image
            layout={`fill`}
            objectFit={`cover`}
            src={`/Gallary/NoImages.svg`}
            alt="NoImages"
          />
        </AspectRatio>
      </Box>
    );

  return (
    <Grid templateColumns={`repeat(3, 1fr)`}>
      {currentGallary.map((img, index) => (
        <Gallary src={img.path} key={index} />
      ))}
    </Grid>
  );
};
