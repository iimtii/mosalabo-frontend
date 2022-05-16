import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Button,
  Box,
  useToast,
} from "@chakra-ui/react";
import { CLIPPED_SUCCESS } from "../constants/room";
import { colors } from "../styles/common";

export const ShareButton = () => {
  const toast = useToast();

  const copyLink = () => {
    navigator.clipboard.writeText(location.href);
    toast({
      title: CLIPPED_SUCCESS,
      status: "success",
      duration: "3000",
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Popover placement="top">
      <PopoverTrigger>
        <Button
          paddingY={`30px`}
          borderRadius={`16px`}
          color={colors.white}
          bgGradient={`linear(to-r, ${colors.pink} 2.08%, ${colors.purple} 45.11%, ${colors.blue} 100%)`}
        >
          このラボを
          <br />
          シェア
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          {/* Todo: share linkのdesign書く */}
          <Box>
            <Button onClick={copyLink}>share link</Button>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
