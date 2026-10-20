import { ArrowUpRight, BookOpen, Check } from "lucide-react";
import { freeCourses } from "../lib/courses";
import { YouTubeIcon } from "./brand-icons";
export function FreeCourseLibrary() {
  return (
    <section className="free-course-library section-pad" id="free-learning">
      <div className="section-top reveal">
        <div>
          <p className="eyebrow">
            <span>07</span> SUGGESTED STARTING POINTS
          </p>
          <h2>Not ready yet? Start with a free course.</h2>
        </div>
        <p className="section-description">
          Five full courses, free: Java, web development, generative AI, system design, and DSA in C++.
        </p>
      </div>
      <div className="free-catalog-note">
        <span>
          <Check size={14} />
          {freeCourses.length} free courses to make your next step easier.
        </span>
        <a href="https://coderarmy.in/courses" target="_blank" rel="noreferrer">
          Browse free learning <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="course-grid catalog-grid free-catalog-grid">
        {freeCourses.map((c) => (
          <article key={c.id} className="course-card free-course-card">
            <a
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="course-thumbnail-button"
              aria-label={`Start ${c.title}`}
            >
              <img
                className="course-thumbnail"
                src={c.image}
                alt={c.title}
                loading="lazy"
                decoding="async"
                width="1200"
                height="750"
              />
              <span className="thumbnail-open">
                <ArrowUpRight size={17} />
              </span>
            </a>
            <div className="course-card-body">
              <div className="course-mode">
                <span className="free-course-label">Free course</span>
                <span className="course-category">{c.level}</span>
              </div>
              <h3>
                <a href={c.url} target="_blank" rel="noreferrer">
                  {c.title}
                </a>
              </h3>
              <p>{c.subtitle}</p>
              <div className="free-course-meta">
                <BookOpen size={14} />
                {c.lectures} lectures<span>•</span>
                <span>Learn at your pace</span>
              </div>
              <div className="course-tags">
                {c.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="course-card-footer">
                <span>
                  with <b>{c.instructor}</b>
                </span>
                <a href={c.url} target="_blank" rel="noreferrer">
                  Start learning <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </article>
        ))}
        <a
          className="free-library-guide"
          href="https://www.youtube.com/@CoderArmy9"
          target="_blank"
          rel="noreferrer"
        >
          <div className="free-guide-icon">
            <YouTubeIcon size={37} />
          </div>
          <span className="eyebrow">WATCH ON YOUTUBE</span>
          <h3>
            Learn with
            <br />
            Coder Army on YouTube.
          </h3>
          <p>
            Watch coding lessons and problem walkthroughs from Rohit Negi and
            Aditya Tandon.
          </p>
          <span className="free-guide-action">
            Watch on YouTube <ArrowUpRight size={17} />
          </span>
        </a>
      </div>
    </section>
  );
}
