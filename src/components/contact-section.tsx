import { useState, type FormEvent } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { InstagramIcon, LinkedInIcon, YouTubeIcon } from "./brand-icons";
import "./contact-section.css";

const channels = [
  { icon: YouTubeIcon, label: "YouTube", value: "@CoderArmy9", href: "https://www.youtube.com/@CoderArmy9" },
  { icon: LinkedInIcon, label: "LinkedIn", value: "company/coderarmy", href: "https://www.linkedin.com/company/coderarmy" },
  { icon: InstagramIcon, label: "Instagram", value: "@coder_army9", href: "https://www.instagram.com/coder_army9/" },
];

// The live form on coderarmy.in is the one wired to the team's inbox.
const LIVE_FORM = "https://coderarmy.in/#contact-us";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  // This redesign has no mail backend, so a submit never pretends to have sent anything:
  // it hands the visitor to the live form instead.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="contact-card reveal">
        {["tl", "tr", "bl", "br"].map((c) => (
          <span key={c} className={`contact-corner corner-${c}`} aria-hidden="true" />
        ))}

        <div className="contact-info">
          <p className="eyebrow">
            <span>10</span> CONTACT US
          </p>
          <h2>Get in touch.</h2>
          <p className="contact-lead">
            Have a question about a course, or not sure where to start? Send us a
            message and the team will get back to you.
          </p>
          <ul className="contact-channels">
            {channels.map((c) => (
              <li key={c.label}>
                <a href={c.href} target="_blank" rel="noreferrer">
                  <span className="contact-channel-icon">
                    <c.icon size={18} />
                  </span>
                  <span className="contact-channel-text">
                    <b>{c.label}</b>
                    <span>{c.value}</span>
                  </span>
                  <ArrowUpRight size={15} className="contact-channel-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="contact-row">
            <label>
              <span>Full name</span>
              <input name="user_name" required autoComplete="name" placeholder="Your full name" />
            </label>
            <label>
              <span>Email</span>
              <input name="user_email" type="email" required autoComplete="email" placeholder="you@example.com" />
            </label>
          </div>
          <div className="contact-row">
            <label>
              <span>Phone</span>
              <input name="phone_number" type="tel" required autoComplete="tel" inputMode="tel" placeholder="Your phone number" />
            </label>
            <label>
              <span>Subject</span>
              <input name="subject" required placeholder="What’s this about?" />
            </label>
          </div>
          <label>
            <span>Message</span>
            <textarea name="message" required rows={5} placeholder="Tell us a little more…" />
          </label>

          {submitted ? (
            <p className="contact-handoff" role="status">
              Messages go through the contact form on coderarmy.in.{" "}
              <a href={LIVE_FORM} target="_blank" rel="noreferrer">
                Open it <ArrowUpRight size={14} />
              </a>
            </p>
          ) : (
            <button className="button primary contact-submit" type="submit">
              Send message <Send size={15} />
            </button>
          )}
        </form>
      </div>
    </section>
  );
}
