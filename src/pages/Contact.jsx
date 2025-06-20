// src/pages/Contact.jsx
import AnimatedPage from "../components/AnimatedPage";
import Lottie from "lottie-react";
import dockBackground from "../assets/images/dock-background.png"; // You'll generate or add this image
import fishJumpAnim from "../assets/animations/fish.json";
import splashAnim from "../assets/animations/splash.json";

import "../pages/Contact.css";

export default function Contact() {
  return (
    <AnimatedPage>
      <div className="contact-page">
        <img
          src={dockBackground}
          alt="Dock on a calm lake"
          className="background-image"
        />

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

        <section className="contact-content">
          <h1>Contact Me</h1>
          <p>
            I’d love to connect! Feel free to reach out via the links below.
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
      </div>
    </AnimatedPage>
  );
}
