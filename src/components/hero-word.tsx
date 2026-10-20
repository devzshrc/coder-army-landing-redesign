import { useEffect, useState } from "react";
import { TextMorph } from "torph/react";

// One pass through what Coder Army is, settling back on the headline's real word.
const words = ["future.", "community.", "journey.", "army.", "future."];

/** The last word of the hero headline morphs, letter by letter, then rests. */
export function HeroWord() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (index >= words.length - 1) return;
    const timer = setTimeout(() => setIndex((i) => i + 1), index === 0 ? 1800 : 1600);
    return () => clearTimeout(timer);
  }, [index]);
  return (
    <>
      <TextMorph
        as="span"
        className="hero-word"
        duration={700}
        ease={{ stiffness: 160, damping: 22 }}
        aria-hidden="true"
      >
        {words[index]!}
      </TextMorph>
      <span className="sr-only">future.</span>
    </>
  );
}
