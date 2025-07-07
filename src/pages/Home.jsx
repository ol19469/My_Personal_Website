import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import ImageLoader from "../components/ImageLoader";
import "./Home.css";
import homeBg from "../assets/images/campfire_background.png";
import fire from "../assets/animations/fire.json";
import Lottie from "lottie-react";
import AnimatedPage from "../components/AnimatedPage";
import Fireflies from "../components/Fireflies";
import campfireSound from "../assets/sounds/campfire_sounds.mp3";

export default function Home() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing]);

  return (
    <AnimatedPage>
      <ImageLoader src={homeBg} alt="Forest background" className="home-bg">
        <Lottie animationData={fire} loop={true} className="fire-animation" />

        <Fireflies count={8} />

        <audio ref={audioRef} src={campfireSound} preload="auto" />

        <button className="sound-toggle" onClick={() => setPlaying(!playing)}>
          {playing ? "🔇 Mute" : "🔊 Sound"}
        </button>

        <Link to="/projects" className="nav-button telescope-btn" />
        <Link to="/about" className="nav-button cabin-btn" />
        <Link to="/contact" className="nav-button dock-btn" />
      </ImageLoader>
    </AnimatedPage>
  );
}
