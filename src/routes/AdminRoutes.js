import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import ImageUpload from "../pages/Dashboard/ImageUpload/ImageUpload";

function AdminRoutes() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/image-upload" element={<ImageUpload />} />
    </Routes>
  );
}

export default AdminRoutes;
