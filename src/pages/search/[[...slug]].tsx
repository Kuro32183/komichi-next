import {
  Button,
  Link as ChakraLink,
  LinkProps,
  useColorModeValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Children } from "react";
import styled from "styled-components";
import ActiveLink from "components/atoms/ActiveLink";
import BreadcrumbItem from "components/atoms/BreadcrumbItem";
import Text from "components/atoms/Text";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";
import Breadcrumb from "components/molecules/Breadcrumb";
import NavLink from "components/molecules/NavLink";
// import FilterGroup from "components/molecules/FilterGroup";
import Layout from "components/template/Layout";
import ProductCardListContainer from "containers/ProductCardListContainer";
import type { Category, Condition } from "types";

const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const categoryNameDict: Record<Category, string> = {
  clothes: "鞄",
  book: "がま口",
  shoes: "その他",
};

const SearchPage: NextPage = () => {
  const router = useRouter();
  const isActive = router.pathname === "/search/${category";
  // 商品のカテゴリーをクエリから取得
  const slug: Category[] = Array.isArray(router.query.slug)
    ? (router.query.slug as Category[])
    : [];
  // 商品の状態をクエリから取得
  const conditions = (() => {
    if (Array.isArray(router.query.condition)) {
      return router.query.condition as Condition[];
    } else if (router.query.condition) {
      return [router.query.condition as Condition];
    } else {
      return [];
    }
  })();

  // const handleChange = (selected: string[]) => {
  //   router.push({
  //     pathname: router.pathname,
  //     query: {
  //       slug,
  //       condition: selected,
  //     },
  //   });
  // };

  // const child = Children.only(children);

  return (
    <Layout>
      <Box
        paddingLeft={{
          base: 2,
          lg: 3,
        }}
        paddingRight={{
          base: 2,
          lg: 3,
        }}
        paddingTop={2}
        paddingBottom={2}
      >
        <Box marginBottom={1}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/">
                <a>トップ</a>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/search">
                <a>検索</a>
              </Link>
            </BreadcrumbItem>
            {/* パンくずリストを選択したカテゴリから生成 */}
            {slug.slice(0, slug.length - 1).map((category, i) => (
              <BreadcrumbItem key={i}>
                <Link href={`/search/${slug.slice(0, i + 1).join("/")}`}>
                  <a>{categoryNameDict[category] ?? "Unknown"}</a>
                </Link>
              </BreadcrumbItem>
            ))}
            {slug.length == 0 && <BreadcrumbItem>すべて</BreadcrumbItem>}
            {slug.length > 0 && (
              <BreadcrumbItem>
                {categoryNameDict[slug[slug.length - 1]] ?? "Unknown"}
              </BreadcrumbItem>
            )}
          </Breadcrumb>
        </Box>
        <Flex>
          <Flex flexDirection={{ base: "column", lg: "row" }}>
            <Box as="aside" minWidth="200px" marginBottom={{ base: 2, md: 0 }}>
              {/* 商品の状態のフィルタ */}
              {/* <FilterGroup
                title="商品の状態"
                items={[
                  { label: "新品", name: "new" },
                  { label: "中古", name: "used" },
                ]}
                value={conditions}
                onChange={handleChange}
              /> */}
              <Box>
                <Text
                  as="h2"
                  fontWeight="bold"
                  variant="mediumLarge"
                  paddingTop={2}
                  paddingBottom={2}
                >
                  カテゴリ
                </Text>
                <Box>
                  <Link href="/search/" passHref>
                    <Button as="a">すべて</Button>
                    {/* <Anchor as="a">すべて</Anchor> */}
                  </Link>
                </Box>
                {/* カテゴリのリンク */}
                {Object.keys(categoryNameDict).map(
                  (category: string, i: number) => (
                    <Box key={i} marginTop={0}>
                      <NavLink ml={4} to={`/search/${category}`}>
                        {categoryNameDict[category as Category]}
                      </NavLink>
                      {/* <Link href={`/search/${category}`}> */}
                      {/* <Link _hover={{}} className="nav"> */}
                      {/* <a> {categoryNameDict[category as Category]}</a> */}
                      {/* </Link> */}
                      {/* </Link> */}
                      {/* <Link
                        href={`/search/${category}`}
                        passHref
                        className="nav"
 
                      > */}
                      {/* <a>{categoryNameDict[category as Category]}</a> */}
                      {/* <Link
                        href={`/search/${category}`}
                        className={`${category}`}
                        scroll={false}
                      >
                        <Button>
                          {categoryNameDict[category as Category]}
                        </Button>
                      </Link> */}
                      {/* </Link> */}
                    </Box>
                  )
                )}
              </Box>
            </Box>
            <Box>
              {/* <Text
                as="h2"
                display={{ base: "block", md: "none" }}
                fontWeight="bold"
                variant="mediumLarge"
              >
                商品一覧
              </Text> */}
              {/*
                商品カードリストコンテナ
                検索クエリから商品カードリストを表示
               */}
              <ProductCardListContainer
                category={slug.length > 0 ? slug[slug.length - 1] : undefined}
                conditions={conditions}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
};

export default SearchPage;
function href(href: any) {
  throw new Error("Function not implemented.");
}
