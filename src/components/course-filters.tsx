import { useLayoutEffect, useRef, useState } from "react";
import "./course-filters.css";

type Props = {
  options: string[];
  value: string;
  count: number;
  onChange: (value: string) => void;
};

/**
 * Filter tabs with one connected highlight. A filled copy of the row sits on top,
 * clipped to the active tab; changing tabs slides the clip, so the fill and its
 * text colour travel together instead of two pills cross-fading.
 */
export function CourseFilters({ options, value, count, onChange }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [clip, setClip] = useState<string>();

  useLayoutEffect(() => {
    const row = rowRef.current;
    const update = () => {
      const active = row?.querySelector<HTMLElement>(`[data-value="${CSS.escape(value)}"]`);
      if (!row || !active) return;
      const top = active.offsetTop;
      const left = active.offsetLeft;
      const right = row.offsetWidth - left - active.offsetWidth;
      const bottom = row.offsetHeight - top - active.offsetHeight;
      setClip(`inset(${top}px ${right}px ${bottom}px ${left}px round 999px)`);
    };
    update();
    // Tabs can wrap onto a new line on narrow screens, so re-measure on resize.
    const observer = new ResizeObserver(update);
    if (row) observer.observe(row);
    return () => observer.disconnect();
  }, [value]);

  const label = (x: string) => (
    <>
      {x}
      {x === "All courses" && <span>{count}</span>}
    </>
  );

  return (
    <div className="filter-tabs" aria-label="Filter courses">
      <div className="filter-row" ref={rowRef}>
        {options.map((x) => (
          <button key={x} data-value={x} aria-pressed={value === x} onClick={() => onChange(x)}>
            {label(x)}
          </button>
        ))}
      </div>
      <div className="filter-row filter-row-active" aria-hidden="true" style={{ clipPath: clip }}>
        {options.map((x) => (
          <span key={x}>{label(x)}</span>
        ))}
      </div>
    </div>
  );
}
