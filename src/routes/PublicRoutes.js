import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound";
import Register from "./../pages/Register/Register";
const LatestNews = React.lazy(() => import("../pages/LatestNews/LatestNews"));
const Contact = React.lazy(() => import("../pages/Contact/Contact"));
const ClientsPage = React.lazy(() =>
  import("../pages/ClientsPage/ClientsPage")
);
const Home = React.lazy(() => import("../pages/Homepage/Home"));
const Product = React.lazy(() => import("../pages/Product/Product"));
const ProductDetail = React.lazy(() =>
  import("../pages/ProductDetail/ProductDetail")
);

function PublicRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/latestNews" element={<LatestNews />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ClientsPage" element={<ClientsPage />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />

      {/* Dynamic pages */}

      {/* <Route path="/blogPage" element={<BlogPage />} /> */}
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PublicRoutes;
