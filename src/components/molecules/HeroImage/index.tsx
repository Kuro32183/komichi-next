import { Image, Box } from "@chakra-ui/react";
import React, { FC } from "react";

type ShopImageProps = {
  src: string;
  alt: string;
};

const ShopImage: FC<ShopImageProps> = (props) => {
  return (
    <Image
      top={{ lg: "50%" }}
      boxSize={{ base: "full", lg: "50%" }}
      maxHeight={{ base: "40vh" }}
      objectFit="cover"
      src={props.src}
      alt={props.alt}
    />
  );
};

export default ShopImage;
