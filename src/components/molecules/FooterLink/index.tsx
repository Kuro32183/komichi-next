import { Text, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { FC } from "react";

type FooterLinkProps = {
  href: string;
  title: string;
};

const FooterLink: FC<FooterLinkProps> = (props) => {
  return (
    <Flex py="2" px="2">
      <Link
        as={NextLink}
        href={props.href}
        passHref //prefetch
        legacyBehavior
      >
        <a>
          <Text>{props.title}</Text>
        </a>
      </Link>
    </Flex>
  );
};

export default FooterLink;
