import { Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage/BlogPage";
import Home from "./pages/Homepage/Home";
import LatestNews from "./pages/LatestNews/LatestNews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/latestNews" element={<LatestNews />} />
      <Route path="/blogPage" element={<BlogPage />} />
    </Routes>
  );
}

export default App;
