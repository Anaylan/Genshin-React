import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const LayoutDefault = ({children}) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default LayoutDefault;
