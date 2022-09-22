import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/dashboard/partials/Header";
import Sidebar from "../Components/dashboard/partials/Sidebar";

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user?.email) {
      return navigate("/login", { state: location?.pathname });
    }
    if (user?.email && user?.role !== "admin") {
      return navigate("/");
    }
  }, [user, location, navigate]);
  return (
    <>
      <Toaster />
      {user?.role !== "admin" ? (
        "loading..."
      ) : (
        <>
          <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />

            {/* Content area */}
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              {/*  Site header */}
              <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />

              <main>{children}</main>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DashboardLayout;
