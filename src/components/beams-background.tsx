/*
 * Soft diagonal light beams drifting upward behind the hero.
 * Each beam is blurred once and then only moved with `transform`, so the
 * animation runs on the compositor instead of redrawing a canvas every frame.
 */
const beams = [
  { left: 2.0, width: 120, hue: 205, duration: 14, delay: 0, opacity: 0.6 },
  { left: 9.4, width: 180, hue: 209, duration: 18, delay: -5.3, opacity: 0.45 },
  { left: 16.8, width: 100, hue: 213, duration: 12, delay: -10.6, opacity: 0.7 },
  { left: 24.2, width: 200, hue: 217, duration: 20, delay: -15.9, opacity: 0.4 },
  { left: 31.6, width: 140, hue: 220, duration: 15, delay: -1.2, opacity: 0.55 },
  { left: 39.0, width: 160, hue: 224, duration: 17, delay: -6.5, opacity: 0.5 },
  { left: 46.4, width: 110, hue: 228, duration: 13, delay: -11.8, opacity: 0.65 },
  { left: 53.8, width: 190, hue: 232, duration: 19, delay: -17.1, opacity: 0.4 },
  { left: 61.2, width: 130, hue: 236, duration: 16, delay: -2.4, opacity: 0.6 },
  { left: 68.6, width: 170, hue: 240, duration: 21, delay: -7.7, opacity: 0.45 },
  { left: 76.0, width: 150, hue: 243, duration: 14, delay: -13, opacity: 0.55 },
  { left: 83.4, width: 210, hue: 247, duration: 18, delay: -18.3, opacity: 0.4 },
  { left: 90.8, width: 120, hue: 251, duration: 15, delay: -3.6, opacity: 0.65 },
  { left: 98.2, width: 160, hue: 255, duration: 17, delay: -8.9, opacity: 0.5 },
];

export function BeamsBackground() {
  return (
    <div className="hero-beams" aria-hidden="true">
      <div className="hero-beams-field">
        {beams.map((b, i) => (
          <span
            key={i}
            className="hero-beam"
            style={
              {
                left: `${b.left}%`,
                width: b.width,
                "--hue": b.hue,
                "--o": b.opacity,
                animationDuration: `${b.duration}s`,
                animationDelay: `${b.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
