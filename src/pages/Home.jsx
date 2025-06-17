import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I’m Oscar L.</h1>
        <h2>Full-Stack Developer</h2>
        <p>
          I build modern, responsive web applications that balance performance
          and design.
        </p>
        <Link to="/projects" className="cta-button">
          View My Work
        </Link>
      </div>
    </section>
  );
}

export default Home;
