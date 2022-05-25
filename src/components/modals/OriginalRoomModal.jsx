import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Center,
  Box,
  Button,
  Flex,
  AspectRatio,
} from "@chakra-ui/react";
import { colors, typography } from "../../styles/common";
import Image from "next/image";
import { useState } from "react";
import { css } from "@emotion/react";
import { isSmartPhone } from "../../utils/isSmartPhone";
import { useContext } from "react";
import { RoomContext } from "../../contexts/RoomContext";
import { MAX_ORIGINAL_HEIGHT, MAX_ORIGINAL_WIDTH } from "../../constants/room";

const style = {
  input: css`
    opacity: 0;
    width: 100%;
    height: 100%;
  `,
  text: css`
    ${typography.text}
  `,
  modal_title: css`
    ${typography.modal_title}
  `,
};

export const OriginalRoomModal = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { createOriginalRoom } = useContext(RoomContext);

  const handleSubmit = async () => {
    await createOriginalRoom({
      ...selectedImage,
      maximumImage: 100,
      originalFlg: true,
    });
  };

  // Todo: 共通化
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

  const handleChange = (event) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      // Todo: 共通化
      loadImage(e.target.result).then((img) => {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0);

        let width = img.width;
        let height = img.height;

        if (width > height && width > MAX_ORIGINAL_WIDTH) {
          height *= MAX_ORIGINAL_WIDTH / width;
          width = MAX_ORIGINAL_WIDTH;
        } else if (width <= height && height > MAX_ORIGINAL_HEIGHT) {
          width *= MAX_ORIGINAL_HEIGHT / height;
          height = MAX_ORIGINAL_HEIGHT;
        }
        canvas.height = height;
        canvas.width = width;
        ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, width, height);

        const data = canvas.toDataURL(event.target.files[0].type);

        setSelectedImage({
          fileName: event.target.files[0].name,
          themeImageData: data,
        });
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const onCustomClose = () => {
    setSelectedImage(null);
    onClose();
  };

  const onChangeImage = () => {
    const input = document.getElementById("input");
    input.click();
  };

  return (
    <Modal size={`xs`} isOpen={isOpen} onClose={onCustomClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody css={style.text}>
          <Center paddingY={`30px`} css={style.modal_title}>
            テーマを選択してね
          </Center>
          <Center>
            <Box
              position={`relative`}
              height={`260px`}
              width={`260px`}
              border={`1px`}
              borderStyle={`dotted`}
              borderColor={colors.black}
              zIndex={1}
            >
              <label>
                <input
                  id="input"
                  accept=".jpg, .jpeg, .png"
                  css={style.input}
                  type={`file`}
                  onChange={handleChange}
                />
              </label>
            </Box>
            {selectedImage ? (
              <AspectRatio
                width={`260px`}
                ration={4 / 3}
                minHeight={`260px`}
                position={`absolute`}
              >
                <Image
                  src={selectedImage.themeImageData}
                  alt={`selected`}
                  layout={`fill`}
                  objectFit={`contain`}
                />
              </AspectRatio>
            ) : (
              <>
                <Box position={`absolute`}>
                  <Flex
                    justifyContent={`center`}
                    flexDirection={`column`}
                    gap={`8px`}
                  >
                    <Image
                      alt="plus"
                      src={`/icons/plus.svg`}
                      height={`100px`}
                      width={`100px`}
                    />
                    <Box>
                      {isSmartPhone ? <>タップ</> : <>クリック</>}
                      して選択
                    </Box>
                  </Flex>
                </Box>
              </>
            )}
          </Center>
        </ModalBody>
        <ModalFooter>
          <Flex gap={`40px`} margin={`auto`}>
            <Box>
              <Button
                bgColor={colors.primary}
                color={colors.white}
                isDisabled={!selectedImage}
                onClick={onChangeImage}
              >
                変更
              </Button>
            </Box>
            <Box>
              <Button
                onClick={handleSubmit}
                color={colors.white}
                bgGradient={`linear(to-r, ${colors.pink} 2.08%, ${colors.purple} 45.11%, ${colors.blue} 100%)`}
                isDisabled={!selectedImage}
              >
                作成
              </Button>
            </Box>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
