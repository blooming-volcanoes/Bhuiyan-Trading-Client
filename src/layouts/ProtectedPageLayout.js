import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/common/Footer/Footer";
import Header from "../Components/common/Header/Header";

function ProtectedPageLayout({ children }) {
  const { user } = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) {
      navigate("/login", { replace: true });
      return;
    }
  }, [user]);
  return (
    <>
      <Header />
      {user?.email ? children : "Loading"}
      <Footer />
    </>
  );
}

export default ProtectedPageLayout;
