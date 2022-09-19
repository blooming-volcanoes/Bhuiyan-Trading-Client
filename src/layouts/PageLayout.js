import React from "react";

import Header from "./../components/common/Header/Header";

function PageLayout({ children, color }) {
  return (
    <>
      <Header color={color} />
      {children}
    </>
  );
}

export default PageLayout;
