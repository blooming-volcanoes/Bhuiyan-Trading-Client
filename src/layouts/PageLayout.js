import React from "react";
import Footer from "./../components/common/Footer/Footer";
import Header from "./../components/common/Header/Header";

function PageLayout({ children, color }) {
  return (
    <>
      <Header color={color} />
      {children}
      <Footer />
    </>
  );
}

export default PageLayout;
