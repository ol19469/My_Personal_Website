import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import firefliesAnim from "../assets/animations/fireflies.json";
import "./Fireflies.css";

export default function Fireflies({ count = 8 }) {
  const [fireflies, setFireflies] = useState([]);
  const [visibleFireflies, setVisibleFireflies] = useState([]);

  useEffect(() => {
    const newFireflies = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 25 + 65, // 65% to 90% from top
      left: Math.random() * 80 + 10, // 10% to 90% from left
      delay: Math.random() * 8, // 0 to 8 seconds initial delay
      scale: 0.2 + Math.random() * 0.3, // 0.2 to 0.5 scale
      opacity: 0.6 + Math.random() * 0.4, // 0.6 to 1.0 opacity
      speed: 1, // Normal speed (1x)
      restartInterval: 8 + Math.random() * 12, // 8 to 20 seconds between restarts
    }));
    setFireflies(newFireflies);
    setVisibleFireflies([]); // Reset on count change

    // Stagger their appearance
    newFireflies.forEach((firefly) => {
      setTimeout(() => {
        setVisibleFireflies((prev) => [...prev, firefly]);
      }, firefly.delay * 1000);
    });
  }, [count]);

  return (
    <>
      {visibleFireflies.map((firefly) => (
        <Firefly
          key={firefly.id}
          firefly={firefly}
          animationData={firefliesAnim}
        />
      ))}
    </>
  );
}

// Individual firefly component to handle its own restart cycle
function Firefly({ firefly, animationData }) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setKey((prev) => prev + 1); // Force re-render to restart animation
    }, firefly.restartInterval * 1000);

    return () => clearTimeout(timer);
  }, [key, firefly.restartInterval]);

  return (
    <Lottie
      key={`${firefly.id}-${key}`}
      animationData={animationData}
      loop={true}
      autoplay={true}
      className="firefly"
      style={{
        position: "absolute",
        top: `${firefly.top}%`,
        left: `${firefly.left}%`,
        width: "60px",
        height: "60px",
        transform: `scale(${firefly.scale})`,
        opacity: firefly.opacity,
        animationDelay: `${firefly.delay}s`,
        animationDuration: `${2 + firefly.restartInterval}s`,
        pointerEvents: "none",
        zIndex: 3,
      }}
    />
  );
}
