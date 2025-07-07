import { useRef, useState, useEffect } from "react";
import AnimatedPage from "../components/AnimatedPage";
import ImageLoader from "../components/ImageLoader";
import Lottie from "lottie-react";
import cliffBackground from "../assets/images/cliff-background.png";
import alienSaucer from "../assets/images/alien.png";
import starsAnim from "../assets/animations/stars.json";
import shootingStarAnim from "../assets/animations/shooting_star.json";
import forestSound from "../assets/sounds/night-ambience.mp3";
import SoundPlayer from "../components/SoundPlayer";
import "../pages/Projects.css";

export default function Projects() {
  return (
    <AnimatedPage>
      <ImageLoader
        src={cliffBackground}
        alt="Telescope on cliff"
        className="background-image"
      >
        {[...Array(12)].map((_, i) => (
          <Lottie
            key={`star-${i + 1}`}
            animationData={starsAnim}
            loop={true}
            className={`stars-animation stars-${i + 1}`}
          />
        ))}

        <Lottie
          animationData={shootingStarAnim}
          loop={true}
          className="shooting-star"
        />

        <img
          src={alienSaucer}
          alt="Alien ship flying"
          className="alien-saucer"
        />

        <SoundPlayer soundFile={forestSound} />

        <section className="projects-content">
          <h1>Projects</h1>
          <p>
            Here are some of the web applications and tools I've built. Click to
            explore the code on GitHub!
          </p>

          <ul className="project-list">
            <li>
              <h3>🎮 Game Review Website</h3>
              <p>
                A full-stack app with authentication, game reviews, comments,
                and search functionality.
              </p>
              <a
                href="https://github.com/yourusername/game-review-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </li>

            <li>
              <h3>📚 Book Buddy</h3>
              <p>
                A React/Express app for tracking and reviewing books, with
                login/register functionality.
              </p>
              <a
                href="https://github.com/yourusername/book-buddy"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </li>
          </ul>
        </section>
      </ImageLoader>
    </AnimatedPage>
  );
}
