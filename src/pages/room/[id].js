import { Box, Button, Flex, Progress } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { Footer } from "../../components/common/Footer";
import { Layout } from "../../components/common/Layout";
import { RoomContext } from "../../contexts/RoomContext";
import { colors } from "../../styles/common";

const Room = () => {
  const { currentRoom, fetchRoom } = useContext(RoomContext);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetchRoom();
  }, [id]);

  return (
    <Layout>
      <Box>
        {!!currentRoom ? (
          <Image
            alt="mosaic"
            src={currentRoom.themeImagePath}
            width={`390px`}
            height={`500px`}
          />
        ) : null}
      </Box>
      <Flex paddingY={`44px`} justifyContent={`center`}>
        <Progress height={`40px`} width={`288px`} value={70} isAnimated />
      </Flex>
      <Flex justifyContent={`center`} gap={10}>
        <Box>
          <Button
            paddingY={`30px`}
            borderRadius={`16px`}
            color={colors.white}
            bgGradient={`linear(to-r, #FBA49F 2.08%, #CBA4EA 45.11%, #58A6EF 100%)`}
          >
            写真を
            <br />
            アップロード
          </Button>
        </Box>
        <Box>
          <Button
            paddingY={`30px`}
            borderRadius={`16px`}
            color={colors.white}
            bgGradient={`linear(to-r, #FBA49F 2.08%, #CBA4EA 45.11%, #58A6EF 100%)`}
          >
            このラボを
            <br />
            シェア
          </Button>
        </Box>
      </Flex>
      <Footer />
    </Layout>
  );
};

export default Room;
