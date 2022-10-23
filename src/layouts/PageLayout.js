import React from "react";
import Footer from "./../Components/common/Footer/Footer";
import Header from "./../Components/common/Header/Header";

function PageLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default PageLayout;
