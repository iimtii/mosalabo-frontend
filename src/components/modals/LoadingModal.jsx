import Image from "next/image";

export const LoadingModal = () => {
  return (
    <Image
      layout={`fill`}
      objectFit={`cover`}
      src="/gif/loading.gif"
      alt="loading"
      zIndex={`1000`}
      position={`absolute`}
      bottom={`0`}
    />
  );
};
