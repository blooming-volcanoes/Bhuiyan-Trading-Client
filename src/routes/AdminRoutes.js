import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryEdit from "../pages/Dashboard/CategoryEdit/CategoryEdit";
import CateGoryUpload from "../pages/Dashboard/CategoryUpload/CateGoryUpload";
import Contact from "../pages/Dashboard/Contact/Contact";
import Dashboard from "../pages/Dashboard/Dashboard";
import ImageUpload from "../pages/Dashboard/ImageUpload/ImageUpload";
import Products from "../pages/Dashboard/Products/Products";
import ProductUpload from "../pages/Dashboard/ProductUpload/ProductUpload";
import NotFound from "../pages/NotFound";
import Categories from "./../pages/Dashboard/Categories/Categories";

function AdminRoutes() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/products/all" element={<Products />} />
      <Route path="/categories/all" element={<Categories />} />
      <Route path="/categories/edit/:id" element={<CategoryEdit />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/image-upload" element={<ImageUpload />} />
      <Route path="/product/upload" element={<ProductUpload />} />
      <Route path="/category/upload" element={<CateGoryUpload />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AdminRoutes;
