import { Link } from "react-router-dom";
import ImageLoader from "../components/ImageLoader";
import "./Home.css";
import homeBg from "../assets/images/campfire_background.png";
import fire from "../assets/animations/fire.json";
import Lottie from "lottie-react";
import AnimatedPage from "../components/AnimatedPage";

export default function Home() {
  return (
    <AnimatedPage>
      <ImageLoader src={homeBg} alt="Forest background" className="home-bg">
        <Lottie animationData={fire} loop={true} className="fire-animation" />
        <Link to="/projects" className="nav-button telescope-btn" />
        <Link to="/about" className="nav-button cabin-btn" />
        <Link to="/contact" className="nav-button dock-btn" />
      </ImageLoader>
    </AnimatedPage>
  );
}
