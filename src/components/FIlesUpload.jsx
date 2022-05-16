import { useState, useContext } from "react";
import { Box, Center } from "@chakra-ui/react";
import { colors, typography } from "../styles/common";
import { MAX_NUMBER_OF_IMAGES } from "../constants/room";
import { css } from "@emotion/react";
import { PreviewImages } from "./PreviewImages";
import { isSmartPhone } from "../utils/isSmartPhone";
import Image from "next/image";
import { ImagesContext } from "../contexts/ImagesContext";

// ref: https://www.section.io/engineering-education/nextjs-dnd-file-upload/
export const FilesUpload = () => {
  // isDropZoneで枠のcssを変える??
  const [isDropZone, setDropZone] = useState(false);
  const [hasError, setError] = useState(false);
  const { selectedImages, setSelectedImages } = useContext(ImagesContext);

  const onChangeImages = (e) => {
    let files = [...e.target.files];
    if (files && files.length > 0) {
      const existingFiles = selectedImages?.map((f) => f.name);
      files = files.filter((f) => !existingFiles.includes(f.name));

      // Todo: validationは独立させる
      if (selectedImages.concat(files).length > 5) {
        setError(true);
        return;
      }
      setSelectedImages(selectedImages.concat(files));
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDropZone(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // ref: https://developer.mozilla.org/ja/docs/Web/API/DataTransfer/dropEffect
    e.dataTransfer.dropEffect = "copy";
    setDropZone(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDropZone(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let files = [...e.dataTransfer.files];
    if (files && files.length > 0) {
      const existingFiles = selectedImages?.map((f) => f.name);
      files = files.filter((f) => !existingFiles.includes(f.name));

      // Todo: validationは独立させる
      if (selectedImages.concat(files).length > 5) {
        setError(true);
        return;
      }
      setSelectedImages(selectedImages.concat(files));
      setDropZone(false);
    }
  };

  const style = {
    input: css`
      opacity: 0;
      viisbility: hidden;
      width: 100%;
      height: 100%;
    `,
    text: css`
      ${typography.text}
    `,
  };

  return (
    <>
      <Center paddingY={`30px`}>
        写真をアップロード(最大{MAX_NUMBER_OF_IMAGES}枚まで)
      </Center>
      <Box
        position={`relative`}
        width={`100%`}
        height={`200px`}
        border={
          hasError
            ? colors.error
            : isDropZone
            ? colors.primary
            : colors.light_gray
        }
        borderStyle={`dotted`}
        borderRadius={`6px`}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDrop={(e) => handleDrop(e)}
      >
        <Box
          position={`absolute`}
          top={`50%`}
          left={`50%`}
          transform={`translate(-50%, -50%)`}
        >
          <Center>
            <Image
              src={`/icons/upload.svg`}
              alt="upload"
              width={`42px`}
              height={`42px`}
            />
          </Center>
          <Center css={style.text}>
            {isSmartPhone() ? <span>タップ</span> : <span>クリック</span>}
            してアップロード
          </Center>
        </Box>
        <Box width={`full`} height={`full`}>
          <label>
            <input
              type={`file`}
              multiple
              onChange={onChangeImages}
              name="images"
              css={style.input}
            />
          </label>
        </Box>
      </Box>
      <PreviewImages />
    </>
  );
};
