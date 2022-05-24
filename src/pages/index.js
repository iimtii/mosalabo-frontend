import {
  Grid,
  Center,
  Flex,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { colors } from "../styles/common";
import { useEffect } from "react";
import { useContext } from "react";
import { Layout } from "../components/common/Layout";
import { Title } from "../components/Title";
import { Room } from "../components/Room";
import { TemplateContext } from "../contexts/TemplateContext";
import { EnterOriginalModal } from "/Users/imtiar.jahan/Desktop/teamf-frontend/src/components/modals/EnterOriginalModal.jsx";

const Home = () => {
  const { templates, fetchTemplates } = useContext(TemplateContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    fetchTemplates();
  }, []);

  return (
    <Layout>
      <Title />
      <Center paddingBottom={`55px`}>
        <Flex
          flexDirection={`column`}
          gap={`22px`}
          border={`1px`}
          borderColor={`#E2E8F0`}
          paddingTop={`30px`}
          paddingBottom={`16px`}
          borderRadius={`12px`}
          height={`180px`}
          width={`266px`}
        >
          <Box m={`auto`}></Box>
          <Box m={`auto`} onClick={onOpen}>
            <Button
              m={`auto`}
              borderRadius={`24px`}
              width={`172px`}
              bgColor={colors.primary}
              color={colors.white}
            >
              自分でテーマを作る
            </Button>
          </Box>
        </Flex>
      </Center>

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
