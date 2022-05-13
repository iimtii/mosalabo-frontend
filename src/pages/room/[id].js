import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { Layout } from "../../components/common/Layout";
import { RoomContext } from "../../contexts/RoomContext";

const Room = () => {
  const { currentRoom, fetchRoom } = useContext(RoomContext);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetchRoom();
    console.log(currentRoom);
  }, [id]);

  return (
    <Layout>
      <Box>{id}のRoom</Box>
    </Layout>
  );
};

export default Room;
