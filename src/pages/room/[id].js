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
        ) : (
          <AspectRatio maxW={`400px`} ratio={4 / 3} margin={`auto`}>
            <Box
              bgColor={`#6495ED`}
              color={`white`}
              fontWeight={`extrabold`}
              opacity={`0.8`}
            >
              写真をアップロードしてね！
            </Box>
          </AspectRatio>
        )}
      </Box>
      <Flex
        maxW={`292.5px`}
        marginX={`auto`}
        marginY={`45px`}
        direction={`column`}
        gap={4}
      >
        <Flex gap={5} justifyContent={`space-around`}>
          <Box>
            {!!currentRoom &&
            currentRoom.originalFlg &&
            !!currentRoom.themeImagePath ? (
              <AspectRatio width={`90px`} height={`90px`}>
                <Image
                  alt="mosaic"
                  src={currentRoom?.themeImagePath}
                  layout={`fill`}
                  objectFit={`cover`}
                />
              </AspectRatio>
            ) : (
              <Box height={`45px`}></Box>
            )}
          </Box>
          <Flex direction={`column`} justifyContent={`end`} mx={`auto`}>
            <Box color={`#8EA6ED`}>
              {remainNumner <= 0 ? (
                <>アート完成！！</>
              ) : (
                <>あと{remainNumner}枚！</>
              )}
            </Box>
          </Flex>
        </Flex>

        {/* Todo: animation from prev state to next state */}
        {/* ref: https://github.com/chakra-ui/chakra-ui/issues/68 */}
        <Box marginY={`20px`}>
          <Progress
            as={motion.div}
            height={`8px`}
            width={`292.5px`}
            borderRadius={`10px`}
            value={progressValue}
            isAnimated={true}
            hasStripe={hasStripe}
            isIndeterminate={isIndeterminate}
          />
        </Box>
        <Flex justifyContent={"center"} maxW={`292.5px`} gap={6}>
          <Box>
            <Button
              paddingY={`30px`}
              borderRadius={`16px`}
              color={colors.white}
              bgGradient={`linear(to-r, ${colors.pink} 2.08%, ${colors.purple} 45.11%, ${colors.blue} 100%)`}
              onClick={onOpen}
              height={`90px`}
              width={`137px`}
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
      </Flex>
      <Footer />

      <UploadModal isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
};

export default Room;
