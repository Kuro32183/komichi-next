import { Link, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

export const HoverLink = (props: LinkProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Link
      rounded="base"
      bg={useColorModeValue("red.800", "gray.800")}
      p={2}
      {...props}
    />
  );
};
