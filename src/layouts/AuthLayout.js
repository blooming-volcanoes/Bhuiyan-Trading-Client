import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./../Components/common/Footer/Footer";
import Header from "./../Components/common/Header/Header";

function AuthLayout({ children }) {
  const { user } = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  useEffect(() => {
    if (user?.email) {
      navigate(from, { replace: true });
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
