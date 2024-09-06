import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Link,
  Text,
  Heading,
  /* 追加 */
  useColorMode,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
// import Link from "next/link";
import NextLink from "next/link";
import { FC, useEffect, useState, useCallback } from "react";
import { HiShoppingCart, HiMenu } from "react-icons/hi";
// import Button from "components/atoms/Button";
import {
  SearchIcon,
  // PersonIcon,
  // ShoppingCartIcon,
} from "components/atoms/IconButton";
// import ShapeImage from "components/atoms/ShapeImage";
// import Spinner from "components/atoms/Spinner";
// import Text from "components/atoms/Text";
// import Box from "components/layout/Box";
// import Flex from "components/layout/Flex";
import BadgeIconButton from "components/molecules/BadgeIconButton";
// import { useAuthContext } from "contexts/AuthContext";
import { DrawerMenu } from "components/organisms/DrawerMenu";
import { useShoppingCartContext } from "contexts/ShoppingCartContext";

/**
 * ヘッダー
 */
const MobileHeader: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { cart } = useShoppingCartContext();
  // const { authUser, isLoading } = useAuthContext();

  return (
    <>
      <Box id="scroll" as="header" bg={useColorModeValue("white", "gray.800")}>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex justifyContent="center" flexGrow="1" py="0">
            {/* <HiMenu size="1.4rem" /> */} <DrawerMenu />
          </Flex>
          <Flex justifyContent="center" flexGrow="1" py="0">
            <Flex justifyContent="center" flexGrow="1">
              <Button
                // badgeContent={cart.length === 0 ? undefined : cart.length}
                size="lg"
              >
                {/* <BadgeIconButton></BadgeIconButton> */}
                <HiShoppingCart size="1.4rem" />
              </Button>
            </Flex>
            {/* </Box> */}
            {/* </NextLink> */}
          </Flex>
          <Flex justifyContent="center" flexGrow="1">
            <Button
              as="a"
              href="/search"
              // badgeContent={cart.length === 0 ? undefined : cart.length}
              size="lg"
            >
              {/* <BadgeIconButton></BadgeIconButton> */}
              <SearchIcon />
            </Button>
          </Flex>

          <Flex justifyContent="center" flexGrow="1" py="2">
            <Button size="lg" onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <MoonIcon h="5" w="5" />
              ) : (
                <SunIcon h="5" w="5" />
              )}
            </Button>
          </Flex>

          {/* <Box display="inline"> */}
          {/* <Box display={{ base: "block", md: "none" }}>
                <Link href="/search" passHref>
                  <Text as="a">
                    <SearchIcon />
                  </Text>
                </Link>
              </Box>
            </Box> */}
          {/* <NavLink>
              {(() => {
                // 認証していたらアイコンを表示
                if (authUser) {
                  return (
                    <Link href={`/users/${authUser.id}`} passHref>
                      <Anchor as="a">
                        <ShapeImage
                          shape="circle"
                          src={authUser.profileImageUrl}
                          width={24}
                          height={24}
                          data-testid="profile-shape-image"
                        />
                      </Anchor>
                    </Link>
                  );
                } else if (isLoading) {
                  // ロード中はスピナーを表示
                  return <Spinner size={20} strokeWidth={2} />;
                } else {
                  // サインインしてない場合はアイコンを表示
                  return (
                    <Link href="/signin" passHref>
                      <Anchor as="a">
                        <PersonIcon size={24} />
                      </Anchor>
                    </Link>
                  );
                }
              })()}
            </NavLink>
            <NavLink>
              <Link href="/sell" passHref>
                <Button as="a">出品</Button>
              </Link>
            </NavLink> */}
        </Flex>
      </Box>
      {/* <Box bg={useColorModeValue("white", "gray.800")} py="0" px="6">
        <NextLink href="/" passHref>
          <Heading
            textAlign="center"
            as="h1"
            fontSize="xl"
            fontWeight="normal"
            cursor="pointer"
            letterSpacing="1px"
            color={useColorModeValue("gray.900", "white")}
          >
            手作り工房『こみち』
          </Heading>
        </NextLink>
      </Box> */}
    </>
  );
};

export default MobileHeader;
