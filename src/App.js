import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage/Home";

const LatestNews = React.lazy(() => import("./pages/LatestNews/LatestNews"));
const Category = React.lazy(() => import("./pages/Category/Category"));
const BlogPage = React.lazy(() => import("./pages/BlogPage/BlogPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latestNews" element={<LatestNews />} />
        <Route path="/blogPage" element={<BlogPage />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </Suspense>
  );
}

export default App;
