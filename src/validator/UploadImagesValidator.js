import {
  MAX_IMAGE_BYTES,
  MAX_NUMBER_OF_SELECTED_IMAGES,
} from "../constants/room";

export const isMoreThanAndEqual20Images = (selectedImages) => {
  return selectedImages.length >= MAX_NUMBER_OF_SELECTED_IMAGES;
};

export const isOverImagesSize = (selectedImages, newImages) => {
  let totalByte = 0;
  selectedImages.map((f) => {
    totalByte += calcByte(f.data);
  });
  newImages.map((f) => {
    totalByte += calcByte(f.data);
  });
  return totalByte > MAX_IMAGE_BYTES;
};

const calcByte = (str) => {
  return encodeURI(str).replace(/%../g, "*").length;
};
