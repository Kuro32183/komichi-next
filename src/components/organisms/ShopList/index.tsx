/* eslint-disable import/order */
import React from "react";
import {
  Box,
  Image,
  /* 追加 */
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import ShopListLink from "components/molecules/ShopListLink";

export default function ShopList() {
  return (
    <>
      <Box>
        <ShopListLink
          href="https://www.yamatoyashiki.co.jp/k_harimamonogatari.html"
          title={"ヤマトヤシキ~播磨もの語り~(JR加古川駅)"}
          src="/shop/event-harima.webp"
        />
        <ShopListLink
          href="http://www.jibasan.or.jp/specialty/bansankan.html"
          title={"播産館 (JR姫路駅)"}
          src="/shop/event-bansankan.webp"
        />
        <ShopListLink
          href="https://yumenosoba.com/"
          title={"夢乃そば (ヤマサ蒲鉾)"}
          src="/shop/event-yumeno.webp"
        />
      </Box>
    </>
  );
}
