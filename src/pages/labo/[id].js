import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Layout } from "../../components/common/Layout";

const Room = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Todo: room情報をfetch
  }, [id]);

  return (
    <Layout>
      <Box>{id}の部屋</Box>
    </Layout>
  );
};

export default Room;
