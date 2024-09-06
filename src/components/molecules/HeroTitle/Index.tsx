import { Text, Box } from "@chakra-ui/react";
import React, { FC } from "react";

type FooterLinkProps = {
  title: string;
};

const HeroTitle: FC<FooterLinkProps> = (props) => {
  return (
    <Box px="4" py="4">
      <Text as="h2" fontSize="1.8rem">
        {props.title}
      </Text>
    </Box>
  );
};

export default HeroTitle;
