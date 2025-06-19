import AnimatedPage from "../components/AnimatedPage";
import "./Home.css";

export default function Home() {
  return (
    <AnimatedPage>
      <section className="home-page">
        <h1>Welcome to My Campfire</h1>
        <p>Warm yourself by the fire and explore the forest.</p>
      </section>
    </AnimatedPage>
  );
}
