import AOS from "aos";
import "aos/dist/aos.css";
import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./styles/css/style.css";

import { useSelector } from "react-redux";
import LoadingButton from "./Components/custom/Buttons/LoadingButton";
import "./Components/dashboard/charts/ChartjsConfig";
import useCheckUser from "./hooks/useCheckUser";
import NotFound from "./pages/NotFound";
// import AdminRoutes from "./routes/AdminRoutes";
// import PublicRoutes from "./routes/PublicRoutes";

const AdminRoutes = lazy(() => import("./routes/AdminRoutes"));
const PublicRoutes = lazy(() => import("./routes/PublicRoutes"));

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
    if (user?.token) {
      checkUser();
    }
  }, [user]);

  return (
    <Suspense
      fallback={
        <div className="flex h-screen justify-center space-y-4">
          <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
        </div>
      }
    >
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
