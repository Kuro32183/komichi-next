/* eslint-disable import/order */
import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image, Flex, Button, Spacer } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import HeroImage from "components/molecules/HeroImage";
import HeroContent from "components/molecules/HeroContent";
import HeroTitle from "components/molecules/HeroTitle/Index";
import NextLink from "next/link";

export default function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Box
          px="4"
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent="center"
          alignItems={{ lg: "center" }}
          h={{ base: "85vh", lg: "80vh" }}
        >
          <HeroImage src="/hero/hero1.webp" alt={""} />
          <Box px={{ lg: "6" }}>
            <HeroTitle title={"手作り工房『こみち』のこと"} />
            <HeroContent
              content={
                "こみちはオリジナルにこだわった鞄屋です。どの商品も試行錯誤し辿り着いた形です。長く使ってもらえるように気持ちを込めてお作りします。老若男女問わず手に取って頂き、使っていくと楽しくなるような、そんな鞄を製作できるよう心掛けています。経年変化による修理にも可能な範囲で対応いたします。１人で製作している為、沢山ご用意する事が難しいですが、ひとつひとつ丁寧にを心掛けて製作しています。"
              }
            />
          </Box>
        </Box>
      </motion.div>

      <Spacer h="20vh"></Spacer>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Box
          px="4"
          display="flex"
          flexDirection={{ base: "column", lg: "row-reverse" }}
          justifyContent="center"
          alignItems={{ lg: "center" }}
          h={{ base: "85vh", lg: "80vh" }}
        >
          <HeroImage src="/hero/hero3.webp" alt={""} />
          <Box px={{ lg: "6" }}>
            <HeroTitle title={"布について"} />
            <HeroContent
              content={
                "昔の前垂れ風のデザインの布はオリジナルで作っています。パリパリと破れない印刷、洗っても縮まない生地、色落ちしにくい素材。お酒が飲めない私には、憧れの「酒」「ビール」の柄。地元である「播州」「播磨」を使った架空の屋号が並びます。使えば使うほど、いい風合いになる自慢の生地です。"
              }
            />
          </Box>
        </Box>
      </motion.div>

      <Spacer h="20vh"></Spacer>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Box
          px="4"
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent="center"
          alignItems={{ lg: "center" }}
          h={{ base: "85vh", lg: "80vh" }}
        >
          <HeroImage src="/hero/hero4.webp" alt={""} />
          <Box px={{ lg: "6" }}>
            <HeroTitle title={"オーダーをお考えの方へ"} />
            <HeroContent
              content={
                "龍野の革を使用しています。鞄の角や持ち手を丈夫にするための革の扱いを学ぶために教室に通いました。ひとつ、ひとつ、手で裁断しています。革の厚みを薄くする「革漉き機」があると、出来る事が広がります。あまり器用ではないので、私が出来る手作業を追及したいです。"
              }
            />
            <Box textAlign="center" py="4">
              <NextLink href={""} passHref>
                <Button as="a" fontWeight="light">
                  お問い合わせはこちら
                </Button>
              </NextLink>
            </Box>
          </Box>
        </Box>
      </motion.div>

      <Spacer h="20vh"></Spacer>
    </>
  );
}
