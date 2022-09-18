import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/common/Footer/Footer";
import Header from "../Components/common/Header/Header";

function AuthLayout({ children }) {
  const { user } = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.email) {
      navigate("/");
      return;
    }
  });
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default AuthLayout;
