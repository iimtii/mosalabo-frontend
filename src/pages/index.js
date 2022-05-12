import { Grid } from "@chakra-ui/react";
import { Layout } from "../components/common/Layout";
import { Heading } from "../components/Heading";
import { Room } from "../components/Room";

const Home = () => {
  return (
    <Layout>
      <Heading />
      <Grid
        templateColumns={`repeat(2, 1fr)`}
        width={`80%`}
        margin={`auto`}
        gap={`40px`}
      >
        <Room />
        <Room />
        <Room />
        <Room />
      </Grid>
    </Layout>
  );
};

export default Home;
