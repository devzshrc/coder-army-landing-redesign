import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { Check, CornerDownLeft, RotateCcw } from "lucide-react";
import rohit from "../assets/rohit-negi.jpg";
import "./learning-features.css";

const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

/** True once the element has been on screen; each scene plays a single time. */
function useInView<T extends HTMLElement>(threshold = 0.4) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, seen };
}

/* ---------- 01 · Binary search, one comparison at a time ---------- */
const values = [3, 8, 12, 17, 21, 26, 30, 35, 41];
const target = 35;
const steps = [
  { lo: 0, hi: 8, mid: 4, note: "a[4] = 21 < 35 — discard the left half" },
  { lo: 5, hi: 8, mid: 6, note: "a[6] = 30 < 35 — discard the left half" },
  { lo: 7, hi: 8, mid: 7, note: "a[7] = 35 — found in 3 comparisons" },
];

function SearchScene() {
  const { ref, seen } = useInView<HTMLDivElement>();
  const [step, setStep] = useState(0);
  const [run, setRun] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (reducedMotion()) {
      setStep(steps.length - 1);
      return;
    }
    setStep(0);
    const timers = [1, 2].map((s) => setTimeout(() => setStep(s), s * 1400));
    return () => timers.forEach(clearTimeout);
  }, [seen, run]);
  const { lo, hi, mid, note } = steps[step]!;
  const found = step === steps.length - 1;
  return (
    <div ref={ref} className="lf-stage lf-search">
      <div className="lf-search-head">
        <span>
          target <b>{target}</b>
        </span>
        <span className="lf-tabular">
          step {step + 1}/{steps.length}
        </span>
      </div>
      <div className="lf-array" style={{ "--n": values.length } as React.CSSProperties}>
        {values.map((v, i) => (
          <span
            key={v}
            className="lf-cell"
            data-out={i < lo || i > hi}
            data-mid={i === mid}
            data-found={found && i === mid}
          >
            {v}
            <i>{i}</i>
          </span>
        ))}
        <span className="lf-pointer" style={{ "--i": lo } as React.CSSProperties}>lo</span>
        <span className="lf-pointer is-mid" style={{ "--i": mid } as React.CSSProperties}>mid</span>
        <span className="lf-pointer" style={{ "--i": hi } as React.CSSProperties}>hi</span>
      </div>
      <div className="lf-search-foot">
        <p key={step} className="lf-note" aria-live="polite">
          {found && <Check size={13} />}
          {note}
        </p>
        <button className="lf-ghost" onClick={() => setRun(run + 1)} aria-label="Replay the search">
          <RotateCcw size={13} />
        </button>
      </div>
    </div>
  );
}

/* ---------- 02 · A tiny editor that actually runs ---------- */
const source = `function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need), i];
    seen.set(nums[i], i);
  }
}

twoSum([2, 7, 11, 15], 9);`;

function twoSum(nums: number[], goal: number) {
  const seen = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const need = goal - nums[i]!;
    if (seen.has(need)) return [seen.get(need)!, i];
    seen.set(nums[i]!, i);
  }
  return [];
}

function highlight(line: string): ReactNode[] {
  return line
    .split(/(\b(?:function|const|let|for|if|return|new)\b|\b\d+\b)/)
    .map((part, i) =>
      /^(function|const|let|for|if|return|new)$/.test(part) ? (
        <span key={i} className="tk-key">{part}</span>
      ) : /^\d+$/.test(part) ? (
        <span key={i} className="tk-num">{part}</span>
      ) : (
        part
      ),
    );
}

function EditorScene() {
  const [state, setState] = useState<"idle" | "running" | "done">("idle");
  const [ms, setMs] = useState(0);
  const run = () => {
    setState("running");
    const t0 = performance.now();
    const result = twoSum([2, 7, 11, 15], 9);
    void result;
    setMs(performance.now() - t0);
    setTimeout(() => setState("done"), reducedMotion() ? 0 : 520);
  };
  return (
    <div className="lf-stage lf-editor">
      <div className="lf-editor-tab">
        <span>two-sum.js</span>
        <button className="lf-run" onClick={run} disabled={state === "running"}>
          Run <kbd>⌘</kbd>
          <kbd>
            <CornerDownLeft size={10} />
          </kbd>
        </button>
      </div>
      <pre className="lf-code">
        {source.split("\n").map((line, i) => (
          <span key={i} className="lf-line">
            <i>{i + 1}</i>
            {highlight(line)}
            {"\n"}
          </span>
        ))}
      </pre>
      <div className="lf-terminal" data-state={state} aria-live="polite">
        <span className="lf-prompt">$ node two-sum.js</span>
        {state === "idle" && <span className="lf-dim">waiting to run…</span>}
        {state === "running" && <span className="lf-dim lf-spin">running</span>}
        {state === "done" && (
          <span>
            <b>[0, 1]</b>
            <span className="lf-dim lf-tabular"> · {Math.max(ms, 0.01).toFixed(2)}ms</span>
          </span>
        )}
      </div>
    </div>
  );
}

/* ---------- 03 · A mentor thread ---------- */
function ThreadScene() {
  const { ref, seen } = useInView<HTMLDivElement>(0.5);
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (reducedMotion()) return setPhase(3);
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1100),
      setTimeout(() => setPhase(3), 2600),
    ];
    return () => timers.forEach(clearTimeout);
  }, [seen]);
  return (
    <div ref={ref} className="lf-stage lf-thread">
      <div className="lf-msg is-student" data-in={phase >= 1}>
        <p>My solution gets TLE on large inputs. Where should I look?</p>
        <span className="lf-meta">9:41</span>
      </div>
      <div className="lf-msg is-mentor" data-in={phase >= 2}>
        <img src={rohit} alt="" />
        {phase < 3 ? (
          <span className="lf-typing" aria-label="Rohit is typing">
            <i />
            <i />
            <i />
          </span>
        ) : (
          <div>
            <p>
              Check the inner loop. A hash map turns it into a single pass.
            </p>
            <span className="lf-complexity">
              O(n²) <span aria-hidden="true">→</span> O(n)
            </span>
          </div>
        )}
      </div>
      <span className="lf-receipt" data-in={phase >= 3}>
        Rohit Negi · replied
      </span>
    </div>
  );
}

/* ---------- 04 · The path to a role ---------- */
const milestones = [
  { label: "Learn", detail: "Concepts & DSA" },
  { label: "Build", detail: "Projects" },
  { label: "Prepare", detail: "Resume review" },
  { label: "Interview", detail: "Mock practice" },
];

function TrackScene() {
  const { ref, seen } = useInView<HTMLDivElement>(0.5);
  const [active, setActive] = useState(-1);
  useEffect(() => {
    if (!seen) return;
    if (reducedMotion()) return setActive(milestones.length - 1);
    const timers = milestones.map((_, i) => setTimeout(() => setActive(i), 250 + i * 450));
    return () => timers.forEach(clearTimeout);
  }, [seen]);
  return (
    <div ref={ref} className="lf-stage lf-track">
      <ol
        className="lf-milestones"
        style={{ "--progress": Math.max(active, 0) / (milestones.length - 1) } as React.CSSProperties}
      >
        {milestones.map((m, i) => (
          <li key={m.label} data-on={i <= active}>
            <button onClick={() => setActive(i)} aria-current={i === active ? "step" : undefined}>
              <span className="lf-dot">{i < active ? <Check size={10} strokeWidth={3} /> : null}</span>
              <b>{m.label}</b>
              <span>{m.detail}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="lf-offer" data-in={active === milestones.length - 1}>
        <span className="lf-offer-mark" aria-hidden="true">
          ϟ
        </span>
        <div>
          <b>Ready for your next role</b>
          <span>With a community of 202K+ students and alumni behind you.</span>
        </div>
      </div>
    </div>
  );
}

const cells = [
  {
    index: "02.1",
    kicker: "Understand",
    title: "See the idea before you code it.",
    body: "Big ideas are broken into tiny steps you can see, so they make sense before you write any code.",
    scene: <SearchScene />,
    span: "wide",
  },
  {
    index: "02.2",
    kicker: "Build",
    title: "Learn by writing real code.",
    body: "You don’t just watch. You solve problems and build projects yourself.",
    scene: <EditorScene />,
    span: "narrow",
  },
  {
    index: "02.3",
    kicker: "Guidance",
    title: "Get unstuck, faster.",
    body: "Stuck on a bug? Ask. Your teachers point you to the next step.",
    scene: <ThreadScene />,
    span: "narrow",
  },
  {
    index: "02.4",
    kicker: "Career",
    title: "Walk into the interview prepared.",
    body: "Make a strong resume, practise interviews, and learn from students who’ve done it.",
    scene: <TrackScene />,
    span: "wide",
  },
];

/** The pointer leaves a faint light on whichever cell it is over. */
const trackPointer = (e: MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
};

export function LearningFeatures() {
  return (
    <div className="lf-grid reveal">
      {cells.map((c) => (
        <article key={c.index} className={`lf-cell-card is-${c.span}`} onMouseMove={trackPointer}>
          <header className="lf-kicker">
            <span>{c.index}</span>
            <span>{c.kicker}</span>
          </header>
          {c.scene}
          <div className="lf-copy">
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
