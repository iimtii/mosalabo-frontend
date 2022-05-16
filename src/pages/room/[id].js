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
import { UploadModal } from "../../components/uploadModal";
import { RoomContext } from "../../contexts/RoomContext";
import { colors } from "../../styles/common";

const Room = () => {
  const { currentRoom, fetchRoom } = useContext(RoomContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetchRoom();
  }, [id]);

  return (
    <Layout>
      <Box>
        {!!currentRoom ? (
          <AspectRatio maxW={`400px`} ratio={4 / 3} margin={`auto`}>
            <Image
              alt="mosaic"
              src={currentRoom?.mosaicImagePath}
              layout={`fill`}
              objectFit={`cover`}
            />
          </AspectRatio>
        ) : null}
      </Box>
      <Flex paddingY={`44px`} justifyContent={`center`}>
        {/* Todo: apiから取得されるdataからvalueを生成 */}
        <Progress height={`40px`} width={`288px`} value={70} isAnimated />
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
