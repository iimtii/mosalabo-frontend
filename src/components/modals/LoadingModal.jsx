import { useState, useEffect } from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { colors } from "../../styles/common";
import { sleep } from "../../utils/sleep";

export const LoadingModal = () => {
  const [isOpacity, setOpacity] = useState(false);
  useEffect(() => {
    sleep(2000).then(() => {
      setOpacity(true);
    });
  }, []);
  return (
    <>
      <Box
        position={`absolute`}
        width={`100vw`}
        height={`100vh`}
        top={0}
        opacity={isOpacity ? `0.6` : `0`}
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
          src="/gif/loading.gif"
          alt="loading"
        />
      </Box>
    </>
  );
};
