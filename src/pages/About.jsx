import AnimatedPage from "../components/AnimatedPage";
import ImageLoader from "../components/ImageLoader";
import SoundPlayer from "../components/SoundPlayer";
import "../pages/About.css";
import aboutBackground from "../assets/images/New_about.png";
import cat from "../assets/animations/Pouch.json";
import Lottie from "lottie-react";
import cracklyVintageSound from "../assets/sounds/crackly-vintage.mp3";

export default function About() {
  return (
    <AnimatedPage>
      <ImageLoader
        src={aboutBackground}
        alt="Cozy cabin interior"
        className="about-background"
      >
        <Lottie animationData={cat} loop={true} className="cat-animation" />

        <SoundPlayer soundFile={cracklyVintageSound} volume={0.1} />

        <section className="about-content">
          <h1>About Me</h1>
          <p>
            Hey there! I'm a passionate developer who loves building immersive,
            thoughtful websites — like the one you're exploring now. Whether
            it's creating magical environments with React or crafting clean,
            accessible interfaces, I thrive at the intersection of code and
            creativity.
          </p>
          <p>
            My current toolkit includes HTML, CSS, JavaScript, React, and
            Node.js. In my downtime, you'll find me sketching ideas, gaming, or
            cuddled up with my cat next to a warm screen.
          </p>
        </section>
      </ImageLoader>
    </AnimatedPage>
  );
}
