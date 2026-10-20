/*
 * Fonts are imported here rather than from CSS: Bun embeds files referenced by
 * CSS `url()` as base64, which put ~1.2 MB of fonts inside the stylesheet.
 * Imported from TypeScript they ship as separate, cacheable files.
 */
import geistRegular from "./assets/geist-regular.ttf";
import geistMedium from "./assets/geist-medium.ttf";
import geistSemibold from "./assets/geist-semibold.ttf";
import geistBold from "./assets/geist-bold.ttf";
import geistExtrabold from "./assets/geist-extrabold.ttf";
import interLatin from "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2";

const faces: [family: string, url: string, weight: string][] = [
  ["Geist", geistRegular, "400"],
  ["Geist", geistMedium, "500"],
  ["Geist", geistSemibold, "600"],
  ["Geist", geistBold, "700"],
  ["Geist", geistExtrabold, "800"],
  ["Inter Variable", interLatin, "100 900"],
];

for (const [family, url, weight] of faces) {
  const face = new FontFace(family, `url(${url})`, { weight, display: "swap" });
  document.fonts.add(face);
  face.load().catch(() => {});
}
