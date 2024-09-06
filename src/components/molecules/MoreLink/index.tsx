import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Text, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { FC } from "react";

type FooterLinkProps = {
  href: string;
};

const MoreLink: FC<FooterLinkProps> = (props) => {
  return (
    <Flex>
      <Link
        as={NextLink}
        href={props.href}
        passHref //prefetch
        legacyBehavior
      >
        <a>
          もっと見る
          <ArrowForwardIcon />
        </a>
      </Link>
    </Flex>
  );
};

export default MoreLink;
