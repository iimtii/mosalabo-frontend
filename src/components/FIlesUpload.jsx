import { useState, useContext } from "react";
import { Box, Center } from "@chakra-ui/react";
import { colors, typography } from "../styles/common";
import { MAX_NUMBER_OF_IMAGES } from "../constants/room";
import { css } from "@emotion/react";
import { PreviewImages } from "./PreviewImages";
import { isSmartPhone } from "../utils/isSmartPhone";
import Image from "next/image";
import { ImagesContext } from "../contexts/ImagesContext";
import { MAX_HEIGHT, MAX_WIDTH } from "../constants/room";
import {
  canUploadMoreImages,
  isOverImagesSize,
} from "../validator/UploadImagesValidator";

// ref: https://www.section.io/engineering-education/nextjs-dnd-file-upload/
export const FilesUpload = () => {
  // Memo: isDropZoneで枠のcssを変える??
  const [isDropZone, setDropZone] = useState(false);
  const [hasError, setError] = useState(false);
  const { selectedImages, setSelectedImages } = useContext(ImagesContext);

  const loadImage = (src) => {
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
      let img = document.createElement("img");
      img.src = src;
      img.onload = () => {
        resolve(img);
      };
      img.onerror = () => {
        reject(img);
      };
    });
  };

  const convertToBase64WithResize = (f) => {
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onabort = reject;
      reader.onload = (e) => {
        loadImage(e.target.result).then((img) => {
          let canvas = document.createElement("canvas");
          let ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0);

          let width = img.width;
          let height = img.height;

          if (width > height && width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          } else if (width <= height && height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
          canvas.height = height;
          canvas.width = width;
          ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, width, height);

          const data = canvas.toDataURL(f.type);

          resolve({
            filename: f.name,
            data: data,
          });
        });
      };
      reader.readAsDataURL(f);
    });
  };

  const onChangeImages = (e) => {
    let files = [...e.target.files];
    if (files && files.length > 0) {
      const existingFiles = selectedImages?.map((f) => f.name);
      files = files.filter((f) => !existingFiles.includes(f.name));

      if (!canUploadMoreImages(selectedImages, files)) {
        setError(true);
        return;
      }

      convertToBase64WithResize(files[0])
        .then((res) => {
          // 今の状態と新しいファイル含めて最大値チェック
          if (isOverImagesSize(selectedImages, [res])) {
            setError(true);
            return;
          }
          setError(false);
          setSelectedImages(selectedImages.concat(res));
        })
        .catch((e) => {
          console.log(e);
        });
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

      const allowExtensions = ".(jpeg|jpg|png)$";
      files = files.filter((f) => !!f.name.match(allowExtensions));

      if (!canUploadMoreImages(selectedImages, files)) {
        setError(true);
        return;
      }

      // eslint-disable-next-line no-undef
      Promise.all(files.map((f) => convertToBase64WithResize(f)))
        .then((res) => {
          // 今の状態と新しいファイル含めて最大値チェック
          if (isOverImagesSize(selectedImages, res)) {
            setError(true);
            return;
          }
          setSelectedImages(selectedImages.concat(res));
          setError(false);
        })
        .catch((e) => {
          console.log(e);
        });
      setDropZone(false);
    }
  };

  const style = {
    input: css`
      opacity: 0;
      width: 100%;
      height: 100%;
    `,
    file_upload_text: css`
      ${typography.file_upload_text}
    `,
    modal_title: css`
      ${typography.modal_title}
    `,
  };

  return (
    <>
      <Center paddingY={`30px`} css={style.modal_title}>
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
          <Center css={style.file_upload_text}>
            {isSmartPhone ? <>タップ</> : <>クリック</>}
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
              accept="image/png, image/jpeg, image/jpg"
            />
          </label>
        </Box>
      </Box>
      <PreviewImages />
    </>
  );
};
