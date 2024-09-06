import {
  Heading,
  /* 追加 */
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { FC } from "react";

type SectionTitleProps = {
  title: string;
};

const SectionTitle: FC<SectionTitleProps> = (props) => {
  return (
    <Heading
      my="10vh"
      fontWeight="200"
      letterSpacing="1.5px"
      as="h1"
      fontSize="1rem"
      className="section-border"
    >
      {props.title}
    </Heading>
  );
};

export default SectionTitle;
