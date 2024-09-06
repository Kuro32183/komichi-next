/* eslint-disable jsx-a11y/alt-text */
import { Text, Flex, Link, Image } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { FC } from "react";

type ShopListProps = {
  href: string;
  title: string;
  src: string;
};

const ShopListLink: FC<ShopListProps> = (props) => {
  return (
    <Flex py="2" px="2" _hover={{ opacity: "0.7" }} transition="all 0.3s">
      <Link
        as={NextLink}
        href={props.href}
        passHref //prefetch
        legacyBehavior
      >
        <a>
          <Image src={props.src} />
          <Text marginTop={2}>{props.title}</Text>
        </a>
      </Link>
    </Flex>
  );
};

export default ShopListLink;
