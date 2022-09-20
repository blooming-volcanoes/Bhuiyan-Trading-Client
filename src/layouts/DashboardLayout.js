import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function DashboardLayout({ children }) {
  const { user } = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(user);
  useEffect(() => {
    if (!user?.email) {
      return navigate("/login", { state: location?.pathname });
    }
    if (user?.email && user?.role !== "admin") {
      return navigate("/");
    }
  }, [user, location, navigate]);
  return <>{user?.role !== "admin" ? "loading..." : children}</>;
}

export default DashboardLayout;
