import { createContext, useState, useContext } from "react";
import {
  MAX_NUMBER_OF_IMAGES,
  MAX_NUMBER_OF_SELECTED_IMAGE,
} from "../constants/room";
import { DragAndDropErrorContext } from "./DragAndDropErrorContext";

export const ImagesContext = createContext();

export const ImagesContextProvider = ({ children }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const { setOverNumberError } = useContext(DragAndDropErrorContext);

  const deleteImage = (id) => {
    setSelectedImages(selectedImages.filter((image, index) => index !== id));
    if (selectedImages.length <= MAX_NUMBER_OF_IMAGES + 1)
      setOverNumberError(false);
  };

  const updateSelectedImages = (newImages) => {
    const nextImagesLength = selectedImages.length + newImages.length;
    if (nextImagesLength > MAX_NUMBER_OF_SELECTED_IMAGE) {
      // Todo: nextImagesが20になるようにnewImagesを減らす
      const nextImagesSize =
        MAX_NUMBER_OF_SELECTED_IMAGE - selectedImages.length;
      newImages = newImages.slice(0, nextImagesSize);
    }
    if (newImages.length === 0) return;

    const slicedNextImagesLength = selectedImages.length + newImages.length;
    if (
      MAX_NUMBER_OF_IMAGES < slicedNextImagesLength &&
      slicedNextImagesLength <= MAX_NUMBER_OF_SELECTED_IMAGE
    ) {
      setOverNumberError(true);
    } else {
      setOverNumberError(false);
    }
    setSelectedImages(selectedImages.concat(newImages));
  };

  const resetImages = () => {
    setSelectedImages([]);
  };

  return (
    <ImagesContext.Provider
      value={{
        selectedImages,
        updateSelectedImages,
        deleteImage,
        resetImages,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
};
