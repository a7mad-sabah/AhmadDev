import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
// import Skills from "../pages/skills";
import PageNotFound from "../pages/PageNotFound";

export default function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/skills" element={<Skills />} /> */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
