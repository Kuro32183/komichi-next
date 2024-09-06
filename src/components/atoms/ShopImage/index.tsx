import { Image } from "@chakra-ui/react";
import React, { FC } from "react";

type ShopImageProps = {
  src: string;
  alt: string;
};

const ShopImage: FC<ShopImageProps> = (props) => {
  return <Image src={props.src} alt={props.alt} />;
};

export default ShopImage;
