import AOS from "aos";
import "aos/dist/aos.css";
import React, { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./styles/css/style.css";

import { useSelector } from "react-redux";
import "./Components/dashboard/charts/ChartjsConfig";
import useCheckUser from "./hooks/useCheckUser";
import NotFound from "./pages/NotFound";
import AdminRoutes from "./routes/AdminRoutes";
import PublicRoutes from "./routes/PublicRoutes";

AOS.init();

// axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();
  const { checkUser } = useCheckUser();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  // Check if the token is expired or not
  useEffect(() => {
    checkUser();
  }, [user?.token]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Routes are here */}
        <Route path="/*" element={<PublicRoutes />} />
        {/* Admin Routes are here */}
        <Route path="/admin/dashboard/*" element={<AdminRoutes />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
