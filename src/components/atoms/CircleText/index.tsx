import {
  Text,
  Box,
  Image,
  useColorMode,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import React from "react";
import { Link as Scroll } from "react-scroll";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});

export const CircleText = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // if (typeof window === "object") {
  //   const text: any = document.querySelector(".circle");
  //   text.innerHTML = text.textContent.replace(/\S/g, "<strong>$&</strong>");
  //   const element: any = document.querySelectorAll("strong");
  //   for (let i: number = 0; i < element.length; i++) {
  //     element[i].style.transform = "rotate(" + i * 13.5 + "deg)";
  //   }
  // }

  return (
    <Scroll to="top" smooth={true}>
      <Box cursor="pointer">
        {/* <MotionBox
          position="relative"
          cursor="pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        > */}
        {/* <Text
          fontSize="0.6rem"
          fontWeight="bold"
          className="circle"
          position="fixed"
          zIndex="999"
          right="50"
          bottom="85"
        >
          HANDMADE - WORKSHOP - KOMICHI -
        </Text> */}
        {colorMode === "light" ? (
          <Image
            width="72px"
            position="fixed"
            zIndex="999"
            right="13.5px"
            bottom="48.5px"
            src="/title/title-black.webp"
            alt=""
          />
        ) : (
          <Image
            width="72px"
            position="fixed"
            zIndex="999"
            right="13.5px"
            bottom="48.5px"
            src="/title/title-white.webp"
            alt=""
          />
        )}
        {/* </MotionBox> */}
      </Box>
    </Scroll>
  );
};
