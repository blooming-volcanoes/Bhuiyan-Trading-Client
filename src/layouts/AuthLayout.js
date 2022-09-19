import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";

function AuthLayout({ children }) {
  const { user } = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.email) {
      navigate("/");
      return;
    }
  }, [user]);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default AuthLayout;
