import { Routes, Route } from "react-router-dom";
import ForestLayout from "./components/ForestLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App() {
  return (
    <Routes>
      <Route element={<ForestLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> {/* ✅ This one */}
      </Route>
    </Routes>
  );
}
