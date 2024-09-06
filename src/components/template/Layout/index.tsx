import { Box, useColorModeValue, chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { CircleText } from "components/atoms/CircleText";
import Footer from "components/organisms/Footer";
import MobileHeader from "components/organisms/MobileHeader";
import VisibilitySection from "components/organisms/VisibilitySection";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box id="top" bg={useColorModeValue("white", "gray.900")}>
        <CircleText />
        <MobileHeader />
        <main>
          <VisibilitySection delay={0.2} chakraProps={{ mb: 10 }}>
            {children}
          </VisibilitySection>
        </main>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
