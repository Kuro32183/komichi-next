/* eslint-disable import/order */
import React from "react";
import {
  Box,
  Image,
  /* 追加 */
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function AccessContent() {
  return (
    <>
      <Box>
        <p>手作り工房『こみち』</p>
        <p>〒679-4166 兵庫県たつの市龍野町川原町134-4</p>
        <p>たつの市営観光駐車場(工房より東側)をご利用ください。</p>
        <p>駐車料金300円</p>
        <p>電話番号 090-6209-5639</p>
        <p>メールアドレス koubou.komichi@gmail.com</p>
        <p>11:00~17:00 (土,日曜日のみ営業)</p>
        <p>お問い合わせ</p>
      </Box>
    </>
  );
}
