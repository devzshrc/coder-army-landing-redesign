import { useEffect, useRef } from "react";
import { X, Check, ArrowUpRight } from "lucide-react";
import type { Course } from "../lib/courses";
import rohit from "../assets/rohit-negi.jpg";
import aditya from "../assets/aditya-tandon.jpg";
export function CourseDialog({
  course,
  onClose,
}: {
  course: Course | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (course) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [course]);
  return (
    <dialog
      ref={ref}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      className="course-dialog"
      aria-labelledby="course-dialog-title"
    >
      {course && (
        <>
          <button
            className="dialog-close icon-button"
            onClick={onClose}
            aria-label="Close course details"
          >
            <X size={19} />
          </button>
          <img
            className="dialog-course-image"
            src={course.image}
            alt={course.title}
            width="1200"
            height="750"
            decoding="async"
          />
          <p className="eyebrow">YOUR NEXT CHAPTER</p>
          <h2 id="course-dialog-title">{course.title}</h2>
          <p className="muted">{course.subtitle}</p>
          <div className="dialog-instructor">
            <img
              src={course.instructor === "Rohit Negi" ? rohit : aditya}
              alt=""
            />
            <div>
              <b>{course.instructor}</b>
              <span>{course.type}</span>
            </div>
          </div>
          <h3>What you’ll learn</h3>
          <ol className="curriculum">
            {course.topics.map((x, i) => (
              <li key={x}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {x}
                <Check size={15} />
              </li>
            ))}
          </ol>
          <p className="dialog-note">
            See the current batch, schedule, pricing, and access details on our
            learning platform, Strike.
          </p>
          <a
            className="button primary"
            href={course.url}
            target="_blank"
            rel="noreferrer"
          >
            Explore course on Strike <ArrowUpRight size={16} />
          </a>
        </>
      )}
    </dialog>
  );
}
