import { createContext, useState } from "react";

export const ImagesContext = createContext();

export const ImagesContextProvider = ({ children }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const deleteImage = (id) => {
    setSelectedImages(selectedImages.filter((image, index) => index !== id));
  };

  const resetImages = () => {
    setSelectedImages([]);
  };

  return (
    <ImagesContext.Provider
      value={{
        selectedImages,
        setSelectedImages,
        deleteImage,
        resetImages,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
};
