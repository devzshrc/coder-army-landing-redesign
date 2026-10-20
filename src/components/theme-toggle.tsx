import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

const storageKey = "coder-army-theme";

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", dark ? "#000000" : "#ffffff");
}

/** Sun that morphs into a moon; the new theme spreads out from the button in a circle. */
export function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const system = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      let preference: string | null = null;
      try {
        preference = localStorage.getItem(storageKey);
      } catch {}
      const next = preference === "dark" || (preference !== "light" && system.matches);
      applyTheme(next);
      setDark(next);
    };
    sync();
    system.addEventListener("change", sync);
    window.addEventListener("storage", sync);
    return () => {
      system.removeEventListener("change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = !dark;
    try {
      localStorage.setItem(storageKey, next ? "dark" : "light");
    } catch {}
    const commit = () => {
      applyTheme(next);
      setDark(next);
    };

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduced) {
      commit();
      return;
    }

    // Grow a circle from the button's center until it covers the farthest corner.
    const r = e.currentTarget.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    const transition = document.startViewTransition(() => flushSync(commit));
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        {
          duration: 650,
          easing: "cubic-bezier(0.32, 0.72, 0, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  return (
    <button
      className="theme-morph"
      type="button"
      data-dark={dark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      onClick={toggle}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <mask id="theme-morph-mask">
          <rect x="0" y="0" width="24" height="24" fill="#fff" />
          <circle className="tm-cutout" cx="18" cy="6" r="8" fill="#000" />
        </mask>
        <circle className="tm-core" cx="12" cy="12" r="9" fill="currentColor" mask="url(#theme-morph-mask)" />
        <g className="tm-rays" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <line key={a} x1="12" y1="1.5" x2="12" y2="3.5" transform={`rotate(${a} 12 12)`} />
          ))}
        </g>
      </svg>
    </button>
  );
}
