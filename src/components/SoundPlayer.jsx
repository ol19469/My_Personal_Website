import { useRef, useState, useEffect } from "react";
import "./SoundPlayer.css";

export default function SoundPlayer({
  soundFile,
  volume = 0.3,
  autoPlay = true,
}) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(autoPlay);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;

      if (playing && autoPlay) {
        // Try to play, but handle the error if it fails
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Audio started playing successfully
            })
            .catch((error) => {
              // Autoplay was prevented, but that's okay
              console.log("Autoplay prevented:", error);
              setPlaying(false); // Update state to show muted button
            });
        }
      } else if (!playing) {
        audioRef.current.pause();
      }
    }
  }, [playing, volume, autoPlay]);

  const handleToggle = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        audioRef.current.play().catch((error) => {
          console.log("Play failed:", error);
        });
        setPlaying(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src={soundFile} preload="auto" />
      <button className="sound-toggle" onClick={handleToggle}>
        {playing ? "🔇 Mute" : "🔊 Sound"}
      </button>
    </>
  );
}
