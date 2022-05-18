import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Progress,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalFocusScope,
  ModalContextProvider,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { Footer } from "../../components/common/Footer";
import { Layout } from "../../components/common/Layout";
import { ShareButton } from "../../components/ShareButton";
import { UploadModal } from "../../components/uploadModal";
import { ProgressBarContext } from "../../contexts/ProgressBarContext";
import { RoomContext } from "../../contexts/RoomContext";
import { colors } from "../../styles/common";
import { motion } from "framer-motion";

const Room = () => {
  const { currentRoom, fetchRoom, isLoading } = useContext(RoomContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { progressValue, hasStripe, isIndeterminate } =
    useContext(ProgressBarContext);
  const router = useRouter();
  const { id } = router.query;
  const remainNumner = currentRoom.maximumImage - currentRoom.numberOfImage;

  useEffect(() => {
    if (!id) return;
    fetchRoom(id);
  }, [id]);

  const Loading = () =>
    isLoading ? (
      <Modal isOpen={1} isCentered={true} size={`xs`}>
        <ModalOverlay />
        <ModalContent>
          <AspectRatio ratio={1 / 1} zIndex={`1000`} top={`20%`} opacity={`1`}>
            <Image
              layout={`fill`}
              objectFit={`cover`}
              src="/gif/loading.gif"
              alt="loading_gif"
            />
          </AspectRatio>
        </ModalContent>
      </Modal>
    ) : null;

  return (
    <Layout>
      {/* Todo: over layでloading gifを流す */}
      <Loading />
      <Box>
        {!!currentRoom && !!currentRoom.mosaicImagePath ? (
          <AspectRatio maxW={`400px`} ratio={4 / 3} margin={`auto`}>
            <Image
              alt="mosaic"
              src={currentRoom?.mosaicImagePath}
              layout={`fill`}
              objectFit={`cover`}
            />
          </AspectRatio>
        ) : !!currentRoom && !!currentRoom.themeImagePath ? (
          <AspectRatio maxW={`400px`} ratio={4 / 3} margin={`auto`}>
            <Image
              alt="mosaic"
              src={currentRoom?.themeImagePath}
              layout={`fill`}
              objectFit={`cover`}
              style={{ opacity: 0.4 }}
            />
          </AspectRatio>
        ) : null}
      </Box>
      <Flex
        paddingY={`44px`}
        justifyContent={`center`}
        flexDirection={`column`}
      >
        {/* Todo: animation from prev state to next state */}
        {/* ref: https://github.com/chakra-ui/chakra-ui/issues/68 */}
        <Box margin={`auto`}>
          <Progress
            as={motion.div}
            height={`40px`}
            width={`288px`}
            value={progressValue}
            isAnimated={true}
            hasStripe={hasStripe}
            isIndeterminate={isIndeterminate}
            transition={`ease`}
            transitionDuration={`500ms`}
          />
        </Box>
        <Box m={`auto`}>アート完成まで：{remainNumner}枚</Box>
      </Flex>
      <Flex justifyContent={`center`} gap={10}>
        <Box>
          <Button
            paddingY={`30px`}
            borderRadius={`16px`}
            color={colors.white}
            bgGradient={`linear(to-r, ${colors.pink} 2.08%, ${colors.purple} 45.11%, ${colors.blue} 100%)`}
            onClick={onOpen}
          >
            写真を
            <br />
            アップロード
          </Button>
        </Box>
        <Box>
          <ShareButton />
        </Box>
      </Flex>
      <Footer />

      <UploadModal isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
};

export default Room;
