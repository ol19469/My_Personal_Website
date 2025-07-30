import AnimatedPage from "../components/AnimatedPage";
import ImageLoader from "../components/ImageLoader";
import Lottie from "lottie-react";
import BackArrow from "../components/BackArrow";
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

        <BackArrow />

        <section className="projects-content">
          <h1>Projects</h1>
          <p>
            Here are some of the web applications and tools I've built. Click to
            explore the code on GitHub!
          </p>

          <ul className="project-list">
            <li>
              <h3>💐 Las Flores Jasmin</h3>
              <p>
                Built a boutique flower shop website using Astro and Tailwind
                CSS, featuring a responsive design, a scroll-triggered image
                slideshow, and a custom Instagram feed powered by the Graph API.
                The site includes a styled contact form with email delivery via
                Resend, an embedded Google Map, and subtle animations to enhance
                the user experience. Deployed and configured with a custom
                domain through Cloudflare.
              </p>
              <a
                href="https://lasfloresjasmin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out the website
              </a>
              <br />
              <br />

              <a
                href="https://github.com/ol19469/LasFloresJasmin"
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
            <li>
              <h3>🏠 My Personal Website</h3>
              <p>This is the website you're currently on!</p>
              <a
                href="https://github.com/ol19469/My_Personal_Website"
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
