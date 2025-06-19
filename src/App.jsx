import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForestLayout from "./components/ForestLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ForestLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}
