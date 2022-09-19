import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import React, { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Homepage/Home";
import Login from "./pages/Login/Login";
import ProductDetail from "./pages/ProductDetail/ProductDetail.js";
import Register from "./pages/Register/Register";

import "./css/style.css";

import "./charts/ChartjsConfig";
AOS.init();

const LatestNews = React.lazy(() => import("./pages/LatestNews/LatestNews"));
const Category = React.lazy(() => import("./pages/Category/Category"));
const BlogPage = React.lazy(() => import("./pages/BlogPage/BlogPage"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const ClientsPage = React.lazy(() => import("./pages/ClientsPage/ClientsPage"));

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
        <Route path="/" element={<Home />} />
        <Route path="/latestNews" element={<LatestNews />} />
        <Route path="/blogPage" element={<BlogPage />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/ClientsPage" element={<ClientsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}

export default App;
