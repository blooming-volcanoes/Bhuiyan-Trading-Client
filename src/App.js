import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail.js";
AOS.init();

const LatestNews = React.lazy(() => import("./pages/LatestNews/LatestNews"));
const Category = React.lazy(() => import("./pages/Category/Category"));
const BlogPage = React.lazy(() => import("./pages/BlogPage/BlogPage"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const ClientsPage = React.lazy(() => import("./pages/ClientsPage/ClientsPage"));

axios.defaults.withCredentials = true;

function App() {
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
            </Routes>
        </Suspense>
    );
}

export default App;
