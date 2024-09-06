import { Stack, Link, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const HoverLink = (props: LinkProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Link
      rounded="base"
      _hover={{ bg: useColorModeValue("gray.200", "gray.600") }}
      p={2}
      {...props}
    />
  );
};

const Navigation = () => {
  return (
    <Stack as="nav">
      <HoverLink href="/search">すべて</HoverLink>
      <HoverLink href="/search/clothes">鞄</HoverLink>
      <HoverLink href="/search/book">がま口</HoverLink>
      <HoverLink href="/search/shoes">その他</HoverLink>
    </Stack>
  );
};

export default Navigation;
