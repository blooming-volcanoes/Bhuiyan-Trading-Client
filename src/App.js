import { Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import LatestNews from "./pages/LatestNews/LatestNews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/latestNews" element={<LatestNews />} />
    </Routes>
  );
}

export default App;
