import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Progress,
  useDisclosure,
} from "@chakra-ui/react";
import NotFound from "../404";
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
import { TemplateDisplay } from "../../components/TemplateDisplay";
import { ArtDisplay } from "../../components/ArtDisplay";
import { NotFoundContext } from "../../contexts/NotFoundContext";
import { LoadingContext } from "../../contexts/LoadingContext";
import react from "react";

const Room = () => {
  const { currentRoom, fetchRoom } = useContext(RoomContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { progressValue, hasStripe, isIndeterminate } =
    useContext(ProgressBarContext);
  const router = useRouter();
  const { id } = router.query;
  const { isNotFound } = useContext(NotFoundContext);
  const remainNumner = currentRoom?.maximumImage - currentRoom?.numberOfImage;
  const { isLoading } = useContext(LoadingContext);

  useEffect(() => {
    if (!id) return;
    fetchRoom(id);
  }, [id]);

  const Loading = () => (isLoading ? <LoadingModal /> : null);

  if (isNotFound) return <NotFound />;

  return (
    <react.Fragment>
      <Layout>
        <Loading />
        <Box marginTop={`5px`}>
          {!!currentRoom && !!currentRoom.mosaicImagePath ? (
            <ArtDisplay />
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
          marginTop={
            !!currentRoom &&
            currentRoom.originalFlg &&
            !!currentRoom.themeImagePath
              ? 10
              : 12
          }
          marginBottom={`9px`}
          direction={`column`}
          gap={
            !!currentRoom &&
            currentRoom.originalFlg &&
            !!currentRoom.themeImagePath
              ? 4
              : 7
          }
        >
          <Flex gap={5} justifyContent={`space-around`} marginTop={`2px`}>
            {!!currentRoom &&
            currentRoom.originalFlg &&
            !!currentRoom.themeImagePath ? (
              <Box>
                <TemplateDisplay />
              </Box>
            ) : null}
            <Flex direction={`column`} justifyContent={`end`}>
              {remainNumner <= 0 ? (
                <Box color={`#8EA6ED`}>アート完成！！</Box>
              ) : (
                <Box color={`#8EA6ED`} marginTop={`20px`}>
                  あと{remainNumner}枚！
                </Box>
              )}
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
    </react.Fragment>
  );
};

export default Room;
