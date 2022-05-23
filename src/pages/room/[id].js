import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Progress,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { Footer } from "../../components/common/Footer";
import { Layout } from "../../components/common/Layout";
import { ShareButton } from "../../components/ShareButton";
import { UploadModal } from "../../components/modals/UploadModal";
import { ProgressBarContext } from "../../contexts/ProgressBarContext";
import { RoomContext } from "../../contexts/RoomContext";
import { colors } from "../../styles/common";
import { motion } from "framer-motion";
import { LoadingModal } from "../../components/modals/LoadingModal";

const Room = () => {
  const { currentRoom, fetchRoom, isLoading } = useContext(RoomContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { progressValue, hasStripe, isIndeterminate } =
    useContext(ProgressBarContext);
  const router = useRouter();
  const { id } = router.query;
  const remainNumner = currentRoom?.maximumImage - currentRoom?.numberOfImage;

  useEffect(() => {
    if (!id) return;
    fetchRoom(id);
  }, [id]);

  const Loading = () => (isLoading ? <LoadingModal /> : null);

  return (
    <Layout>
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
            borderRadius={`10px`}
            value={progressValue}
            isAnimated={true}
            hasStripe={hasStripe}
            isIndeterminate={isIndeterminate}
          />
        </Box>
        {remainNumner <= 0 ? (
          <Box m={`auto`}>アート完成！！</Box>
        ) : (
          <Box m={`auto`}>アート完成まで：{remainNumner}枚</Box>
        )}
      </Flex>
      <Flex justifyContent={`center`} gap={7}>
        <Box>
          <Button
            paddingY={`30px`}
            borderRadius={`16px`}
            color={colors.white}
            bgGradient={`linear(to-r, ${colors.pink} 2.08%, ${colors.purple} 45.11%, ${colors.blue} 100%)`}
            onClick={onOpen}
            height={`93px`}
            width={`140px`}
            fontSize={`19px`}
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
