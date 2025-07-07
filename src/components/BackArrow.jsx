import { Link } from "react-router-dom";
import "./BackArrow.css";

export default function BackArrow() {
  return (
    <Link to="/" className="back-arrow">
      <span>⬅️</span>
    </Link>
  );
}
