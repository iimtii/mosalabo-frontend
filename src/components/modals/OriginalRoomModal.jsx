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
import { colors } from "../../styles/common";
import Image from "next/image";
import { useState } from "react";
import { css } from "@emotion/react";
import { isSmartPhone } from "../../utils/isSmartPhone";
import { useContext } from "react";
import { RoomContext } from "../../contexts/RoomContext";

const styles = {
  input: css`
    opacity: 0;
    width: 100%;
    height: 100%;
  `,
};

export const OriginalRoomModal = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { createOriginalRoom } = useContext(RoomContext);

  const handleSubmit = async () => {
    await createOriginalRoom({ ...selectedImage, maximumImage: 100 });
  };

  const handleChange = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage({
        fileName: event.target.files[0].name,
        themeImageData: reader.result,
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
        <ModalBody>
          <Center paddingY={`30px`}>テーマを選択してね</Center>
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
                  css={styles.input}
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
