import type { NextPage } from "next";
import { useRouter } from "next/router";
import Flex from "components/layout/Flex";
import AccessContent from "components/organisms/AccessContent";
import Layout from "components/template/Layout";

const AccessPage: NextPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
        justifyContent="center"
      >
        <Flex
          width="400px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <AccessContent />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default AccessPage;
