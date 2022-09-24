import React from "react";
import { Route, Routes } from "react-router-dom";
import CateGoryUpload from "../pages/Dashboard/CategoryUpload/CateGoryUpload";
import Dashboard from "../pages/Dashboard/Dashboard";
import ImageUpload from "../pages/Dashboard/ImageUpload/ImageUpload";
import ProductUpload from "../pages/Dashboard/ProductUpload/ProductUpload";
import NotFound from "../pages/NotFound";

function AdminRoutes() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/image-upload" element={<ImageUpload />} />
      <Route path="/product/upload" element={<ProductUpload />} />
      <Route path="/category/upload" element={<CateGoryUpload />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AdminRoutes;
