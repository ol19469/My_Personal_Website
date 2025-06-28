import { useState } from "react";
import "./ImageLoader.css";

export default function ImageLoader({ src, alt, className, children }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="image-loader-container">
      {!imageLoaded && <div className="loading-spinner"></div>}
      <img
        src={src}
        alt={alt}
        className={`${className} ${imageLoaded ? "loaded" : ""}`}
        onLoad={handleImageLoad}
      />
      {imageLoaded && children}
    </div>
  );
}
