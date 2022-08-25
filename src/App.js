import { Route, Routes } from "react-router-dom";
import Category from "./pages/Category/Category";
import Home from "./pages/Homepage/Home";
import LatestNews from "./pages/LatestNews/LatestNews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/latestNews" element={<LatestNews />} />
      <Route path="/categories" element={<Category />} />
    </Routes>
  );
}

export default App;
