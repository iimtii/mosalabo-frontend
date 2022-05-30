import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { colors } from "../../styles/common";

export const LoadingModal = () => {
  const timestamp = new Date();
  return (
    <>
      <Box
        position={`absolute`}
        width={`100vw`}
        height={`100vh`}
        top={0}
        zIndex={5}
        bgColor={`${colors.white}`}
      />
      <Box
        position={`absolute`}
        width={`100vw`}
        height={`100vh`}
        top={0}
        zIndex={9999}
      >
        <Image
          layout={`fill`}
          objectFit={`cover`}
          src={`/gif/loading.gif?${timestamp.getTime()}`}
          alt="loading"
        />
      </Box>
    </>
  );
};
