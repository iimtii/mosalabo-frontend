import { Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useContext } from "react";
import { Layout } from "../components/common/Layout";
import { Heading } from "../components/Heading";
import { Room } from "../components/Room";
import { TemplateContext } from "../contexts/TemplateContext";

const Home = () => {
  const { templates, fetchTemplates } = useContext(TemplateContext);

  useEffect(() => {
    fetchTemplates();
  }, []);

  return (
    <Layout>
      <Heading />
      <Grid
        templateColumns={`repeat(2, 1fr)`}
        width={`80%`}
        margin={`auto`}
        gap={`40px`}
      >
        {templates.map((template) => (
          <Room
            key={template.id}
            id={template.id}
            src={template.theme_image_path}
            maximum_image={template.maximum_image}
          />
        ))}
      </Grid>
    </Layout>
  );
};

export default Home;
