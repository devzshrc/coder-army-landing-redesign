import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Expand, X } from "lucide-react";
import { testimonials, type Testimonial } from "../../lib/testimonials";
import "./testimonial.css";
function ReviewCard({
  review,
  featured,
  accent,
  onOpen,
}: {
  review: Testimonial;
  featured?: boolean;
  accent?: boolean;
  onOpen: (review: Testimonial) => void;
}) {
  return (
    <article
      className={`testimonial-card reveal ${featured ? "testimonial-featured" : ""} ${accent ? "testimonial-accent" : ""}`}
    >
      <div className="testimonial-card-top">
        <span>{review.topic}</span>
        <a
          href={review.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Read ${review.name}’s original post on X`}
        >
          X <ArrowUpRight size={13} />
        </a>
      </div>
      <blockquote>
        <p>“{review.quote}”</p>
      </blockquote>
      {featured && (
        <button
          className="testimonial-proof"
          onClick={() => onOpen(review)}
          aria-label={`View original screenshot of ${review.name}’s post`}
        >
          <img
            src={review.screenshot}
            alt={`Original X post by ${review.name}`}
            loading="lazy"
          />
          <span>
            <Expand size={12} />
            Original post
          </span>
        </button>
      )}
      <div className="testimonial-person">
        <img src={review.avatar} alt="" loading="lazy" width="42" height="42" />
        <div>
          <b>{review.name}</b>
          <a href={review.url} target="_blank" rel="noreferrer">
            {review.handle}
          </a>
        </div>
        <button
          onClick={() => onOpen(review)}
          className="testimonial-expand"
          aria-label={`View screenshot of ${review.name}’s post`}
        >
          <Expand size={15} />
        </button>
      </div>
      <span className="testimonial-date">{review.date} · Public post on X</span>
    </article>
  );
}
export default function ClientFeedback() {
  const [selected, setSelected] = useState<Testimonial | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (selected) dialog.current?.showModal();
    else dialog.current?.close();
  }, [selected]);
  const groups = [
    [0, 1],
    [2, 3, 4],
    [5, 6],
  ];
  return (
    <section className="student-testimonials section-pad" id="testimonials">
      <div className="section-top reveal">
        <div>
          <p className="eyebrow">
            <span>06</span> FROM THE COMMUNITY
          </p>
          <h2>Students, in their own words.</h2>
        </div>
        <p className="section-description">
          Real posts from our students. Tap a card to read more or see the original post.
        </p>
      </div>
      <div className="testimonials-masonry">
        {groups.map((group, col) => (
          <div className="testimonial-column" key={col}>
            {group.map((i, j) => (
              <ReviewCard
                key={testimonials[i]!.id}
                review={testimonials[i]!}
                featured={(col === 0 && j === 0) || (col === 2 && j === 1)}
                accent={(col === 0 && j === 1) || (col === 2 && j === 0)}
                onOpen={setSelected}
              />
            ))}
          </div>
        ))}
      </div>
      <p className="testimonials-footnote">
        Excerpts from public X posts. Open any screenshot to read the original
        in context.
      </p>
      <dialog
        className="review-dialog"
        ref={dialog}
        onCancel={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === dialog.current) setSelected(null);
        }}
        aria-labelledby="review-dialog-title"
      >
        {selected && (
          <>
            <div className="review-dialog-heading">
              <div>
                <h3 id="review-dialog-title">
                  {selected.name}’s original post
                </h3>
                <p>
                  {selected.handle} · {selected.date}
                </p>
              </div>
              <button
                className="icon-button"
                onClick={() => setSelected(null)}
                aria-label="Close testimonial screenshot"
              >
                <X size={20} />
              </button>
            </div>
            <img
              className="review-original-image"
              src={selected.screenshot}
              alt={`Screenshot of ${selected.name}’s public post on X`}
            />
            <a
              className="button secondary"
              href={selected.url}
              target="_blank"
              rel="noreferrer"
            >
              View original on X<ArrowUpRight size={15} />
            </a>
          </>
        )}
      </dialog>
    </section>
  );
}
