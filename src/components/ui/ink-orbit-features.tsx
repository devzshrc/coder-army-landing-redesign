import { useState } from "react";
import { ArrowUpRight, Plus, RotateCcw } from "lucide-react";
import "./ink-orbit-features.css";

const hash = (key: string) =>
  [
    Array.from(key).reduce((a, c) => a + c.charCodeAt(0), 0) % 12,
    Array.from(key).reduce((a, c, i) => a + (i + 1) * c.charCodeAt(0), 0) % 12,
  ] as const;
const stored = ["user:42", "user:24"];
const bitSet = new Set(stored.flatMap((k) => [...hash(k)]));

const pt = (angle: number, r = 64) => ({
  x: 110 + Math.cos(((angle - 90) * Math.PI) / 180) * r,
  y: 92 + Math.sin(((angle - 90) * Math.PI) / 180) * r,
});

function HashRing() {
  const [extra, setExtra] = useState(false);
  const servers = [
    { name: "A", angle: 30 },
    { name: "B", angle: 150 },
    ...(extra ? [{ name: "D", angle: 210 }] : []),
    { name: "C", angle: 270 },
  ];
  const routes = [
    ["key 1", "B"],
    ["key 2", extra ? "D" : "C"],
    ["key 3", "C"],
    ["key 4", "A"],
  ] as const;
  return (
    <article className="concept-card reveal">
      <div className="concept-stage">
        <div className="hash-layout">
          <svg
            viewBox="0 0 220 184"
            className="hash-ring"
            role="img"
            aria-label={
              extra
                ? "Four servers on a hash ring. Only key 2 moves, from server C to the new server D."
                : "Three servers on a consistent hash ring."
            }
          >
            <circle cx="110" cy="92" r="64" className="hash-ring-line" />
            {[70, 180, 245, 320].map((angle, i) => {
              const p = pt(angle);
              return (
                <circle
                  key={angle}
                  cx={p.x}
                  cy={p.y}
                  r="3"
                  className={"hash-key " + (i === 1 && extra ? "moved" : "")}
                />
              );
            })}
            {servers.map((s) => {
              const p = pt(s.angle);
              return (
                <g key={s.name} className={s.name === "D" ? "hash-server is-new" : "hash-server"}>
                  <rect x={p.x - 13} y={p.y - 13} width="26" height="26" rx="8" />
                  <text x={p.x} y={p.y + 4} textAnchor="middle">
                    {s.name}
                  </text>
                </g>
              );
            })}
            <text x="110" y="96" textAnchor="middle" className="ring-center">
              {servers.length} servers
            </text>
          </svg>
          <dl className="hash-routes">
            {routes.map(([k, server]) => (
              <div key={k} data-moved={extra && k === "key 2"}>
                <dt>{k}</dt>
                <dd>{server}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="concept-control">
          <span aria-live="polite">
            {extra ? "Only key 2 moved." : "Add a server and watch what moves."}
          </span>
          <button onClick={() => setExtra(!extra)}>
            {extra ? <RotateCcw size={13} /> : <Plus size={13} />}
            {extra ? "Reset" : "Add server"}
          </button>
        </div>
      </div>
      <div className="concept-copy">
        <span className="concept-label">Consistent hashing</span>
        <h3>Scale with a reason.</h3>
        <p>
          Many servers share the work. When you add one, only a few things have to move. Press “Add server” and watch.
        </p>
        <a href="https://www.youtube.com/watch?v=hqQpKjBpYPY" target="_blank" rel="noreferrer">
          Watch the lesson <ArrowUpRight size={14} />
        </a>
      </div>
    </article>
  );
}

function BloomFilter() {
  const [key, setKey] = useState("user:42");
  const positions = hash(key);
  const possible = positions.every((p) => bitSet.has(p));
  return (
    <article className="concept-card reveal">
      <div className="concept-stage">
        <div className="bloom-bits" aria-label="12-bit Bloom filter">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} data-checked={positions.includes(i)} data-set={bitSet.has(i)}>
              <b>{bitSet.has(i) ? 1 : 0}</b>
              <span>{i}</span>
            </div>
          ))}
        </div>
        <p className="bloom-result" aria-live="polite">
          <span data-maybe={possible}>{possible ? "Possibly present" : "Definitely not"}</span>
          {!possible
            ? "A zero bit rules it out."
            : stored.includes(key)
              ? "Stored, and both bits are set."
              : "A false positive — never stored."}
        </p>
        <div className="concept-control">
          <span>
            h₁ = {positions[0]} · h₂ = {positions[1]}
          </span>
          <div className="bloom-keys" role="group" aria-label="Look up a key">
            {["user:42", "user:99", "user:33"].map((k) => (
              <button key={k} aria-pressed={key === k} onClick={() => setKey(k)}>
                {k}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="concept-copy">
        <span className="concept-label">Bloom filters</span>
        <h3>Understand the trade-off.</h3>
        <p>
          A fast check that answers “definitely not here” or “maybe here.” It’s quick because it’s allowed to be a little unsure. Try a key.
        </p>
        <a href="https://www.youtube.com/watch?v=ZJAOMFct_XA" target="_blank" rel="noreferrer">
          Watch the lesson <ArrowUpRight size={14} />
        </a>
      </div>
    </article>
  );
}

export default function InkOrbitFeatures() {
  return (
    <section className="technical-depth section-pad" id="technical-depth">
      <div className="section-top reveal">
        <div>
          <p className="eyebrow">
            <span>03</span> FROM FIRST PRINCIPLES TO SYSTEM DESIGN
          </p>
          <h2>
            Go beyond the answer. <span>Understand the system.</span>
          </h2>
        </div>
        <p className="section-description">
          Good engineers know why code works, not just that it works. Play with two ideas from our system design lessons.
        </p>
      </div>
      <div className="concept-grid">
        <HashRing />
        <BloomFilter />
      </div>
    </section>
  );
}
