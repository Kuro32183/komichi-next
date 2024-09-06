import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import styled from "styled-components";
import ScaleImage from "components/atoms/ScaleImage";
// import Text from "components/atoms/Text";
// import Box from "components/layout/Box";

interface ProductCardProps {
  /**
   * 商品タイトル
   */
  title: string;
  /**
   * 商品価格
   */
  price: number;
  /**
   * 商品画像URL
   */
  imageUrl: string;
  /**
   * 商品のぼかし画像のデータURIスキーム
   */
  blurDataUrl?: string;
  /**
   * バリアント（表示スタイル）
   */
  variant?: "listing" | "small" | "detail";
}

/**
 * 商品カード
 */
const ProductCard = ({
  title,
  price,
  imageUrl,
  blurDataUrl,
  variant = "listing",
}: ProductCardProps) => {
  const { size, imgSize } = (() => {
    switch (variant) {
      case "detail":
        return { size: { base: "320px", md: "540px" }, imgSize: 540 };
      case "listing":
        return { size: { base: "160px", md: "240px" }, imgSize: 240 };
      default:
        return { size: { base: "160px" }, imgSize: 160 };
    }
  })();

  return (
    <Box position="relative">
      {variant !== "small" && (
        <Box position="absolute" zIndex="10" top="0" left="0">
          <Box>
            <Text
              as="h2"
              fontSize={{ base: "small", md: "mediumLarge" }}
              letterSpacing={{ base: 2, md: 3 }}
              lineHeight={{ base: "32px", md: "48px" }}
              bg="gray.400"
              margin={0}
              paddingRight={2}
              paddingLeft={2}
              paddingTop={0}
              paddingBottom={0}
            >
              {title}
            </Text>
            <Text
              as="span"
              fontWeight=" semi-bold"
              display="inline-block"
              bg="gray.400"
              fontSize={{ base: "extraSmall", md: "medium" }}
              lineHeight={{ base: "8px", md: "12px" }}
              letterSpacing={{ base: 2, md: 4 }}
              margin={0}
              padding={{ base: 2, md: 2 }}
            >
              {price}円
            </Text>
          </Box>
        </Box>
      )}
      <Box zIndex="9">
        {blurDataUrl && (
          <ScaleImage
            src={imageUrl}
            width={imgSize ?? 240}
            height={imgSize ?? 240}
            containerWidth={size}
            containerHeight={size}
            objectFit="cover"
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
        )}
        {!blurDataUrl && (
          <ScaleImage
            src={imageUrl}
            width={imgSize ?? 240}
            height={imgSize ?? 240}
            containerWidth={size}
            containerHeight={size}
            objectFit="cover"
          />
        )}
      </Box>
      {variant === "small" && (
        <Box marginTop={1}>
          <Text as="h2" variant="medium" margin={0} padding={0}>
            {title}
          </Text>
          <Text as="span" variant="medium">
            {price}円
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default ProductCard;
