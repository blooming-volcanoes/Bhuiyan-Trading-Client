import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "../pages/Dashboard/Blog/Blogs";
import EditBlog from "../pages/Dashboard/Blog/EditBlog";
import CategoryEdit from "../pages/Dashboard/CategoryEdit/CategoryEdit";
import CateGoryUpload from "../pages/Dashboard/CategoryUpload/CateGoryUpload";
import Contact from "../pages/Dashboard/Contact/Contact";
import Dashboard from "../pages/Dashboard/Dashboard";
import GalleryUpload from "../pages/Dashboard/Gallery/GalleryUpload";
import BrandPage from "../pages/Dashboard/pages/BrandPage";
import HomePage from "../pages/Dashboard/pages/HomePage";
import ProductEdit from "../pages/Dashboard/Products/ProductEdit";
import Products from "../pages/Dashboard/Products/Products";
import ProductUpload from "../pages/Dashboard/ProductUpload/ProductUpload";
import NotFound from "../pages/NotFound";
import PostBlog from "./../pages/Dashboard/Blog/PostBlog";
import Categories from "./../pages/Dashboard/Categories/Categories";
import Gallery from "./../pages/Dashboard/Gallery/Gallery";
import UserProfile from "./../pages/Dashboard/Profile/UserProfile";

function AdminRoutes() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/products/all" element={<Products />} />
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/categories/all" element={<Categories />} />
      <Route path="/categories/edit/:id" element={<CategoryEdit />} />
      <Route path="/product/edit/:id" element={<ProductEdit />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/product/upload" element={<ProductUpload />} />
      <Route path="/category/upload" element={<CateGoryUpload />} />
      <Route path="/blog/new" element={<PostBlog />} />
      <Route path="/blog/edit/:slug" element={<EditBlog />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/pages/home" element={<HomePage />} />
      <Route path="/pages/brand" element={<BrandPage />} />
      <Route path="/gallery/upload" element={<GalleryUpload />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AdminRoutes;
