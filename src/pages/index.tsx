import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Text, Flex, Heading, Spacer } from "@chakra-ui/react";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";

import SectionTitle from "components/atoms/SectionTitle";
// import Text from "components/atoms/Text";
// import Box from "components/layout/Box";
// import Flex from "components/layout/Flex";
import MoreLink from "components/molecules/MoreLink";
import Hero from "components/organisms/Hero";
import ProductCard from "components/organisms/ProductCard";
import ProductCardCarousel from "components/organisms/ProductCardCarousel";
import ShopList from "components/organisms/ShopList";
import Layout from "components/template/Layout";
import getAllProducts from "services/products/get-all-products";
import { ApiContext, Product } from "types";

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const HomePage: NextPage<HomePageProps> = ({
  bookProducts,
  clothesProducts,
  shoesProducts,
}: HomePageProps) => {
  // 商品カードカルーセルをレンダリング
  const renderProductCardCarousel = (products: Product[]) => {
    return (
      <ProductCardCarousel>
        {products.map((p: Product, i: number) => (
          <Box paddingLeft={i === 0 ? 0 : 2} key={p.id}>
            <Link href={`/products/${p.id}`} passHref>
              <a>
                <ProductCard
                  variant="small"
                  title={p.title}
                  price={p.price}
                  imageUrl={p.imageUrl}
                  blurDataUrl={p.blurDataUrl}
                />
              </a>
            </Link>
          </Box>
        ))}
      </ProductCardCarousel>
    );
  };

  return (
    <Layout>
      <Hero />

      <Spacer h="15vh" />

      <Flex paddingBottom={2} justifyContent="center">
        <Box px={{ base: 2, md: 0 }} width={{ base: "100%", md: "1040px" }}>
          <SectionTitle title="商品リスト" />
          <Box>
            <Flex>
              <Heading
                fontWeight="normal"
                paddingBottom={2}
                fontSize="xl"
                as="h3"
              >
                バッグ
              </Heading>
              <Spacer />
              <MoreLink href="/search/clothes" />
            </Flex>

            {renderProductCardCarousel(clothesProducts)}
          </Box>
          <Box marginBottom={8}>
            <Flex>
              <Heading
                fontWeight="normal"
                paddingBottom={2}
                fontSize="xl"
                as="h3"
              >
                がま口
              </Heading>
              <Spacer />
              <MoreLink href="/search/book" />
            </Flex>

            {renderProductCardCarousel(bookProducts)}
          </Box>
          <Box>
            <Flex>
              <Heading
                fontWeight="normal"
                paddingBottom={2}
                fontSize="xl"
                as="h3"
              >
                その他
              </Heading>
              <Spacer />
              <MoreLink href="/search/shoes" />
            </Flex>

            {renderProductCardCarousel(shoesProducts)}
          </Box>
          <Spacer h="15vh" />
          <SectionTitle title="出店情報" />
          <ShopList />
          <Spacer h="15vh"></Spacer>
          <SectionTitle title="アクセス" />
        </Box>
      </Flex>
      {/* <SectionTitle title="最近見た商品" /> */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || "http://localhost:5000",
  };
  // 各商品のトップ6個を取得し、静的ページを作成
  // 60秒でrevalidateな状態にし、静的ページを更新する
  const [clothesProducts, bookProducts, shoesProducts] = await Promise.all([
    getAllProducts(context, { category: "clothes", limit: 6, page: 1 }),
    getAllProducts(context, { category: "book", limit: 6, page: 1 }),
    getAllProducts(context, { category: "shoes", limit: 6, page: 1 }),
  ]);

  return {
    props: {
      clothesProducts,
      bookProducts,
      shoesProducts,
    },
    revalidate: 60,
  };
};

export default HomePage;
