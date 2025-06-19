import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./ForestLayout.css";

export default function ForestLayout() {
  return (
    <div className="forest-background">
      <Navbar />
      <Outlet />
    </div>
  );
}
