import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";

function adminRoutes() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/gio" element={<h1>GIO</h1>} />
    </Routes>
  );
}

export default adminRoutes;
