import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { CLIPPED_SUCCESS } from "../constants/room";
import { colors } from "../styles/common";
import QRCode from "qrcode.react";
import { css } from "@emotion/react";

export const ShareButton = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = typeof window !== "undefined" ? location.pathname : "";

  const copyLink = () => {
    navigator.clipboard.writeText(location.href);
    toast({
      title: CLIPPED_SUCCESS,
      status: "success",
      duration: "3000",
      isClosable: true,
      position: "top",
    });
  };

  const style = {
    qr_code: css`
      margin: 23px auto 0 auto;
    `,
  };

  return (
    <>
      <Button
        onClick={onOpen}
        paddingY={`30px`}
        borderRadius={`16px`}
        color={colors.white}
        bgGradient={`linear(to-r, ${colors.pink} 2.08%, ${colors.purple} 45.11%, ${colors.blue} 100%)`}
        height={`90px`}
        width={`137px`}
        fontSize={`19px`}
      >
        このラボを
        <br />
        シェア
      </Button>

      <Modal size={`xs`} isOpen={isOpen} borderRadius={`16px`}>
        <ModalOverlay />
        <ModalContent top={`26rem`}>
          <ModalBody>
            <Box m={`3px`}>
              <Box>
                <QRCode value={pathname} css={style.qr_code} />
              </Box>
              <Button
                marginTop={`30px`}
                color={colors.white}
                bgGradient={`linear(to-r, ${colors.pink} 2.08%, ${colors.purple} 45.11%, ${colors.blue} 100%)`}
                width={`100%`}
                onClick={copyLink}
              >
                Copy Link
              </Button>

              <Button
                marginTop={`30px`}
                color={colors.black}
                width={`100%`}
                onClick={onClose}
              >
                Cancel
              </Button>
            </Box>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
