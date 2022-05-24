import { useContext } from "react";
import { GallaryContext } from "../contexts/GallaryContext";
import { Center, Grid } from "@chakra-ui/react";
import { Gallary } from "./Gallary";

export const GallaryDisplay = () => {
  const { currentGallary } = useContext(GallaryContext);

  if (!currentGallary || currentGallary.length === 0)
    return <Center>No images exist...</Center>;

  return (
    <Grid templateColumns={`repeat(3, 1fr)`}>
      {currentGallary.map((img, index) => (
        <>
          <Gallary src={img.path} key={index} />
        </>
      ))}
    </Grid>
  );
};
