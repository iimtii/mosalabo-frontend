import { Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useContext } from "react";
import { Layout } from "../components/common/Layout";
import { Title } from "../components/Title";
import { Room } from "../components/Room";
import { TemplateContext } from "../contexts/TemplateContext";
import { OriginalRoom } from "../components/OriginalRoom";

const Home = () => {
  const { templates, fetchTemplates } = useContext(TemplateContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    fetchTemplates();
  }, []);

  return (
    <Layout>
      <Title />
      <OriginalRoom />

      <Grid
        templateColumns={`repeat(2, 1fr)`}
        width={`68%`}
        margin={`auto`}
        gap={`40px`}
        paddingBottom={`91px`}
      >
        {templates.map((template) => (
          <Room
            key={template.id}
            id={template.id}
            src={template.themeImagePath}
            iconSrc={template.iconImagePath}
            maximumImage={template.maximumImage}
          />
        ))}
      </Grid>

      <EnterOriginalModal isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
};

export default Home;
