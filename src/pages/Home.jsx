import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
import homeBg from "../assets/images/campfire_background.png";
import fire from "../assets/animations/fire.json";
import Lottie from "lottie-react";
import AnimatedPage from "../components/AnimatedPage";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <AnimatedPage>
      <div className="home-container">
        {!imageLoaded && <div className="loading-spinner"></div>}
        <img
          src={homeBg}
          alt="Forest background"
          className={`home-bg ${imageLoaded ? "loaded" : ""}`}
          onLoad={handleImageLoad}
        />
        <Lottie animationData={fire} loop={true} className="fire-animation" />
        <Link to="/projects" className="nav-button telescope-btn" />
        <Link to="/about" className="nav-button cabin-btn" />
        <Link to="/contact" className="nav-button dock-btn" />
      </div>
    </AnimatedPage>
  );
}
