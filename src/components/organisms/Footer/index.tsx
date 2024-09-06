import { Box, useColorModeValue, List, ListItem } from "@chakra-ui/react";
import React from "react";
import CompanyTitle from "components/molecules/CompanyTitle";
import FooterLink from "components/molecules/FooterLink";

const Footer = () => {
  return (
    <Box
      px={{ base: 2, lg: 8 }}
      pt={8}
      pb={2}
      bg={useColorModeValue("gray.100", "gray.800")}
    >
      <List flexDirection="column">
        <ListItem>
          <FooterLink href="/" title={" ホームに戻る"} />
        </ListItem>
        {/* <ListItem>
          <FooterLink href="/footer/payment" title={"支払い方法について"} />
        </ListItem>
        <ListItem>
          <FooterLink href="/footer/delivery" title={"配送方法について"} />
        </ListItem> */}
        {/* <ListItem>
          <FooterLink href="/" title={"カートを見る"} />
        </ListItem> */}
        <ListItem>
          <FooterLink href="/hero/about" title={"こみちについて"} />
          {/* <FooterLink href="/hero
          /info" title={"出店情報"} /> */}
        </ListItem>
        <ListItem>
          <FooterLink
            href="/footer/terms"
            title={"特定商法取引法に基づく表記"}
          />
        </ListItem>
        <ListItem>
          <FooterLink href="/footer/privacy" title={"プライバシーポリシー"} />
        </ListItem>

        <ListItem>
          <FooterLink
            href="https://www.instagram.com/koubou_komichi"
            title={"Instagram"}
          />
        </ListItem>
        <ListItem>
          <FooterLink
            href="https://www.facebook.com/tatuno.komichi"
            title={"Facebook"}
          />
        </ListItem>
        <ListItem>
          <FooterLink href="/footer/access" title={"アクセス"} />
        </ListItem>
        <ListItem>
          <FooterLink href="/hero/order" title={"オーダーにあたり"} />
        </ListItem>
        <ListItem>
          <FooterLink href="/" title={"お問い合わせ"} />
        </ListItem>
      </List>
      <CompanyTitle />
    </Box>
  );
};

export default Footer;
