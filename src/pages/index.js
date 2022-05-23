import {
  Grid,
  Center,
  Flex,
  Box,
  Button,
  Image,
  src,
  handleSubmit,
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { colors } from "../styles/common";
import { useEffect } from "react";
import { useContext } from "react";
import { Layout } from "../components/common/Layout";
import { Title } from "../components/Title";
import { Room } from "../components/Room";
import { TemplateContext } from "../contexts/TemplateContext";

const { isOpen, onOpen, onClose } = useDisclosure();

const Home = () => {
  const { templates, fetchTemplates } = useContext(TemplateContext);

  useEffect(() => {
    fetchTemplates();
  }, []);

  return (
    <>
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
      </Layout>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
