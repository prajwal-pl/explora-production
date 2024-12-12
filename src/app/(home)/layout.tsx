import Footer from "@/components/footer";
import Header from "@/components/header";
import { AnimatePresence } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div>
      <AnimatePresence>
        <Header />
        <main>{children}</main>
        <Footer />
      </AnimatePresence>
    </div>
  );
};
export default layout;
