import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  Heading,
  /* 追加 */
  useColorMode,
  useColorModeValue,
  Button,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { HiShoppingCart, HiMenu } from "react-icons/hi";
import styled from "styled-components";
// import Button from "components/atoms/Button";
import {
  SearchIcon,
  PersonIcon,
  ShoppingCartIcon,
} from "components/atoms/IconButton";
import ShapeImage from "components/atoms/ShapeImage";
// import Spinner from "components/atoms/Spinner";
// import Text from "components/atoms/Text";
// import Box from "components/layout/Box";
// import Flex from "components/layout/Flex";
import BadgeIconButton from "components/molecules/BadgeIconButton";
// import { useAuthContext } from "contexts/AuthContext";
import { useShoppingCartContext } from "contexts/ShoppingCartContext";

// // ナビゲーション
// const Nav = styled(Flex)`
//   & > span:not(:first-child) {
//     margin-left: ${({ theme }) => theme.space[2]};
//   }
// `;

/**
 * ヘッダー
 */
const DesktopHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { cart } = useShoppingCartContext();
  // const { authUser, isLoading } = useAuthContext();

  return (
    <Box
      h="88px"
      borderBottom="1px solid"
      as="header"
      bg={useColorModeValue("white", "gray.800")}
    >
      <Flex paddingLeft={3} paddingRight={3} justifyContent="space-between">
        <Flex as="nav" height="56px" alignItems="center">
          <Box display={{ base: "none", md: "inline" }}>
            <Link href="/" passHref>
              <Text as="a">
                <Text>手作り工房『こみち』</Text>
              </Text>
            </Link>
          </Box>
          <Box display="inline">
            <Box display={{ base: "none", md: "block" }}>
              <Link href="/search" passHref>
                <Text as="a">すべて</Text>
              </Link>
            </Box>
          </Box>
          <Box display="inline">
            <Box display={{ base: "none", md: "block" }}>
              <Link href="/search/clothes" passHref>
                <Text as="a">バッグ</Text>
              </Link>
            </Box>
          </Box>
          <Box display="inline">
            <Box display={{ base: "none", md: "block" }}>
              <Link href="/search/book" passHref>
                <Text as="a">がま口</Text>
              </Link>
            </Box>
          </Box>
          <Box display="inline">
            <Box display={{ base: "none", md: "block" }}>
              <Link href="/search/shoes" passHref>
                <Text as="a">その他</Text>
              </Link>
            </Box>
          </Box>
        </Flex>
        <Flex as="nav" height="56px" alignItems="center">
          <Box display="inline">
            <Box display={{ base: "block", md: "none" }}>
              <HiMenu size="1.4rem" />
              <Heading pl="2" fontSize="md">
                メニュー
              </Heading>
            </Box>
          </Box>
          <Box display="inline">
            <Box display={{ base: "block", md: "none" }}>
              <Link href="/search" passHref>
                <Text as="a">
                  <SearchIcon />
                </Text>
              </Link>
            </Box>
          </Box>

          <Box display="inline">
            <Link href="/cart" passHref>
              <Text as="a">
                <BadgeIconButton
                  icon={<HiShoppingCart size="1.4rem" />}
                  size="1.4rem"
                  badgeContent={cart.length === 0 ? undefined : cart.length}
                  badgeBackgroundColor="primary"
                />
                <Heading pl="2" fontSize="md">
                  カート
                </Heading>
              </Text>
            </Link>
          </Box>
          <Box display="inline">
            <Box display={{ base: "block", md: "none" }}>
              <Button size="lg" onClick={toggleColorMode} bg="transparent">
                {colorMode === "light" ? (
                  <MoonIcon h="5" w="5" />
                ) : (
                  <SunIcon h="6" w="6" />
                )}
              </Button>
            </Box>
          </Box>
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
      </Flex>
    </Box>
  );
};

export default DesktopHeader;
