import { Text, Box } from "@chakra-ui/react";
import React, { FC } from "react";

type FooterLinkProps = {
  content: string;
};

const HeroContent: FC<FooterLinkProps> = (props) => {
  return (
    <Box px="2">
      <Text as="p">{props.content}</Text>
    </Box>
  );
};

export default HeroContent;
