import {
  Grid,
  Center,
  Flex,
  Box,
  Button,
  onOpen,
  Image,
  isOpen,
  onClose,
  src,
  handleSubmit,
} from "@chakra-ui/react";
import { colors } from "../styles/common";
import { useEffect } from "react";
import { useContext } from "react";
import { Layout } from "../components/common/Layout";
import { Title } from "../components/Title";
import { Room } from "../components/Room";
import { TemplateContext } from "../contexts/TemplateContext";
import { RoomCreateModal } from "../components/modals/RoomCreateModal";

const Home = () => {
  const { templates, fetchTemplates } = useContext(TemplateContext);

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
          <Box m={`auto`}>
            <Image width={`60px`} height={`60px`} objectFit={`contain`} />
          </Box>
          <Box m={`auto`}>
            <Button
              onClick={onOpen}
              borderRadius={`24px`}
              width={`172px`}
              bgColor={colors.primary}
              color={colors.white}
            >
              自分でテーマを作る
            </Button>
          </Box>

          <RoomCreateModal
            isOpen={isOpen}
            onClose={onClose}
            src={src}
            handleSubmit={handleSubmit}
          />
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
    </Layout>
  );
};

export default Home;
