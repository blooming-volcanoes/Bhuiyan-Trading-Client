import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import React, { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./styles/css/style.css";

import "./Components/dashboard/charts/ChartjsConfig";
import AdminRoutes from "./routes/AdminRoutes";
import PublicRoutes from "./routes/PublicRoutes";

AOS.init();

axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Routes are here */}
        <Route path="/*" element={<PublicRoutes />} />
        {/* Admin Routes are here */}
        <Route path="/admin/dashboard/*" element={<AdminRoutes />} />
      </Routes>
    </Suspense>
  );
}

export default App;
