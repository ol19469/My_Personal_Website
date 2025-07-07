import AnimatedPage from "../components/AnimatedPage";
import ImageLoader from "../components/ImageLoader";
import Lottie from "lottie-react";
import dockBackground from "../assets/images/dock-background.png";
import fishJumpAnim from "../assets/animations/fish.json";
import splashAnim from "../assets/animations/splash.json";
import { useRef, useEffect, useState } from "react";
import lakeNightSound from "../assets/sounds/lake_night.mp3";
import "../pages/Contact.css";
import SoundPlayer from "../components/SoundPlayer";

export default function Contact() {
  return (
    <AnimatedPage>
      <ImageLoader
        src={dockBackground}
        alt="Dock on a calm lake"
        className="background-image"
      >
        <Lottie
          animationData={fishJumpAnim}
          loop={true}
          className="fish fish-1"
        />
        <Lottie
          animationData={fishJumpAnim}
          loop={true}
          className="fish fish-2"
        />
        <Lottie
          animationData={fishJumpAnim}
          loop={true}
          className="fish fish-3"
        />

        <Lottie
          animationData={splashAnim}
          loop={true}
          className="splash splash-1"
        />
        <Lottie
          animationData={splashAnim}
          loop={true}
          className="splash splash-2"
        />
        <Lottie
          animationData={splashAnim}
          loop={true}
          className="splash splash-3"
        />
        <Lottie
          animationData={splashAnim}
          loop={true}
          className="splash splash-4"
        />
        <SoundPlayer soundFile={lakeNightSound} />

        <section className="contact-content">
          <h1>Contact Me</h1>
          <p>
            I'd love to connect! Feel free to reach out via the links below.
          </p>
          <ul className="contact-links">
            <li>
              <a href="mailto:ol19469@gmail.com">📧 ol19469@gmail.com</a>
            </li>
            <li>
              <a
                href="https://github.com/ol19469"
                target="_blank"
                rel="noopener noreferrer"
              >
                💻 GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/oscar-lopez-592534240/"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼 LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </ImageLoader>
    </AnimatedPage>
  );
}
