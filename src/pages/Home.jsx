import { Link } from "react-router-dom";
import ImageLoader from "../components/ImageLoader";
import SoundPlayer from "../components/SoundPlayer";
import "./Home.css";
import homeBg from "../assets/images/campfire_background.png";
import fire from "../assets/animations/fire.json";
import Lottie from "lottie-react";
import AnimatedPage from "../components/AnimatedPage";
import Fireflies from "../components/Fireflies";
import campfireSound from "../assets/sounds/campfire_sounds.mp3";

export default function Home() {
  return (
    <AnimatedPage>
      <ImageLoader src={homeBg} alt="Forest background" className="home-bg">
        <Lottie animationData={fire} loop={true} className="fire-animation" />

        <Fireflies count={4} />

        <SoundPlayer soundFile={campfireSound} />

        {/* Welcome Content */}
        <section className="home-content">
          <h1>Welcome to My Digital Campfire</h1>
          <p>Explore my world through the telescope, cabin, and dock</p>
        </section>

        <Link to="/projects" className="nav-button telescope-btn" />
        <Link to="/about" className="nav-button cabin-btn" />
        <Link to="/contact" className="nav-button dock-btn" />
      </ImageLoader>
    </AnimatedPage>
  );
}
