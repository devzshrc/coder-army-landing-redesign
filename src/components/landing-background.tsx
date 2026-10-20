import { useEffect, useState } from "react";
import grid from "../assets/code-grid.svg";

/** A single viewport-sized atmosphere continues behind every landing section. */
export function LandingBackground() {
  const [active, setActive] = useState(document.visibilityState === "visible");
  useEffect(() => {
    const update = () => setActive(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  return (
    <div className="hero-ambient" data-active={active} aria-hidden="true">
      <div className="hero-light hero-light-blue" />
      <div className="hero-light hero-light-cyan" />
      <img className="hero-code-field" src={grid} alt="" />
    </div>
  );
}
