import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "./../pages/Register/Register";
const LatestNews = React.lazy(() => import("../pages/LatestNews/LatestNews"));
const Category = React.lazy(() => import("../pages/Category/Category"));
const Contact = React.lazy(() => import("../pages/Contact/Contact"));
const ClientsPage = React.lazy(() =>
  import("../pages/ClientsPage/ClientsPage")
);
const Home = React.lazy(() => import("../pages/Homepage/Home"));

function PublicRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/latestNews" element={<LatestNews />} />
      <Route path="/categories" element={<Category />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ClientsPage" element={<ClientsPage />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />

      {/* Dynamic pages */}
      {/* <Route path="/blogPage" element={<BlogPage />} /> */}
      {/* <Route path="/product-detail" element={<ProductDetail />} /> */}
    </Routes>
  );
}

export default PublicRoutes;
