import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Play,
  Check,
  Code2,
  Layers,
  Terminal,
  Braces,
  GitBranch,
  GraduationCap,
  Menu,
  X,
  Users,
  Globe,
  CircleCheck,
  Sparkles,
} from "lucide-react";
import "./fonts";
import "./index.css";
import "./polish.css";
import "./theme.css";
import "./brand-refresh.css";
import "./site-evolution.css";
import "./design-system.css";
import { LogoCloud } from "./components/logo-cloud";
import { MemberVideos } from "./components/member-videos";
import InkOrbitFeatures from "./components/ui/ink-orbit-features";
import ClientFeedback from "./components/ui/testimonial";
import { ThemeToggle } from "./components/theme-toggle";
import {
  YouTubeIcon,
  LinkedInIcon,
  InstagramIcon,
} from "./components/brand-icons";
import { LandingBackground } from "./components/landing-background";
import { LearningFeatures } from "./components/learning-features";

import { courses, sourceCourseOrder, type Course } from "./lib/courses";
import { Logo } from "./components/logo";
import { FreeCourseLibrary } from "./components/free-course-library";
import { BeamsBackground } from "./components/beams-background";
import { Pricing } from "./components/pricing";
import { CourseFilters } from "./components/course-filters";
import { CourseDialog } from "./components/course-dialog";
import { Instructors } from "./components/instructors";
import { HeroWord } from "./components/hero-word";
export function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filter, setFilter] = useState("All courses");
  const [selected, setSelected] = useState<Course | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          // Also reveal anything already scrolled past, e.g. after a reload mid-page.
          if (e.isIntersecting || e.boundingClientRect.bottom < 0) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    const watch = (root: ParentNode) =>
      root.querySelectorAll(".reveal:not(.is-visible)").forEach((e) => observer.observe(e));
    watch(document);
    // Sections can mount or remount after this effect runs; watch those too,
    // otherwise they stay invisible.
    const mutations = new MutationObserver((records) =>
      records.forEach((r) =>
        r.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(".reveal:not(.is-visible)")) observer.observe(node);
          watch(node);
        }),
      ),
    );
    mutations.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);
  const filtered = courses.filter(
    (c) => filter === "All courses" || c.category === filter,
  );
  const visible = [...filtered].sort(
    (a, b) => sourceCourseOrder.indexOf(a.id) - sourceCourseOrder.indexOf(b.id),
  );
  return (
    <>
      <LandingBackground />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="announcement">
        <span className="announcement-tag">LEVEL UP WITH STRIKE</span>
        <span>
          Our premium learning platform, taught by Rohit Negi & Aditya Tandon.
        </span>
        <a href="#courses">
          Find your course <ArrowRight size={13} />
        </a>
      </div>
      <header className="site-header">
        <div className="nav-inner">
          <Logo />
          <nav
            className={mobileOpen ? "nav-links mobile-open" : "nav-links"}
            aria-label="Main navigation"
          >
            <a href="#approach" onClick={() => setMobileOpen(false)}>
              Our approach
            </a>
            <a href="#mentors" onClick={() => setMobileOpen(false)}>
              Meet your mentors
            </a>
            <a href="#courses" onClick={() => setMobileOpen(false)}>
              Courses
            </a>
            <a href="#testimonials" onClick={() => setMobileOpen(false)}>
              Student stories
            </a>
            <a href="#free-learning" onClick={() => setMobileOpen(false)}>
              Free learning <ArrowUpRight size={12} />
            </a>
            {/* Only rendered inside the open phone menu, so they can never duplicate the header buttons. */}
            {mobileOpen && (
              <>
                <a className="nav-mobile-only" href="https://strikes.in/" target="_blank" rel="noreferrer">
                  Log in
                </a>
                <a className="nav-mobile-only button primary" href="#courses" onClick={() => setMobileOpen(false)}>
                  Start learning <ArrowUpRight size={14} />
                </a>
              </>
            )}
          </nav>
          <div className="nav-actions">
            <ThemeToggle />
            <a
              href="https://strikes.in/"
              target="_blank"
              rel="noreferrer"
              className="login-link"
            >
              Log in
            </a>
            <a className="button primary nav-cta" href="#courses">
              Start learning <ArrowUpRight size={14} />
            </a>
            <button
              className="mobile-toggle icon-button"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      <main id="main" className="page-frame">
        <section className="hero">
          <BeamsBackground />
          <div className="hero-copy">
            <div className="hero-heading enter">
              <a href="#community" className="community-badge">
                <span className="badge-dot" /> A community of 202K+ students{" "}
                <ChevronRight size={12} />
              </a>
              <h1>
                Be a part of <br />
                our <HeroWord />
              </h1>
            </div>
            <div className="hero-description enter">
              <p>
                Learn to code one small step at a time with Rohit Negi and Aditya Tandon. Start with the basics, then build real things in DSA, web development, system design, and AI.
              </p>

              <div className="hero-buttons">
                <a href="#courses" className="button primary">
                  Explore courses <ArrowRight size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@CoderArmy9"
                  target="_blank"
                  rel="noreferrer"
                  className="button secondary youtube-button"
                >
                  <YouTubeIcon size={16} /> Watch on YouTube
                </a>
              </div>
              <div className="hero-note">
                <Check size={13} /> Live classes, recordings you can rewatch, and projects you build yourself.
              </div>
            </div>
          </div>
        </section>
        <LogoCloud />
        <section className="approach section-pad" id="approach">
          <div className="section-top reveal">
            <div>
              <p className="eyebrow">
                <span>01</span> EXPERT GUIDANCE
              </p>
              <h2>
                We teach it the way it sticks.
              </h2>
            </div>
            <p className="section-description">
              First you understand the idea. Then you build it. When you get stuck, someone helps. And when you’re ready, we help you get the job.
            </p>
          </div>
          <LearningFeatures />
        </section>
        <InkOrbitFeatures />
        <section className="mentors section-pad" id="mentors">
          <div className="section-top reveal">
            <div>
              <p className="eyebrow">
                <span>03</span> MEET YOUR INSTRUCTORS
              </p>
              <h2>
                Learn with Rohit Negi
                {" "}
                and Aditya Tandon.
              </h2>
            </div>
            <p className="section-description">
              Two engineers who studied at IIT Guwahati and worked at Uber, Ola, and Oxyzo. Now they teach what they learned.
            </p>
          </div>
          <Instructors
            onSelect={(id) => setSelected(courses.find((c) => c.id === id) ?? null)}
          />
        </section>
        <section className="courses-section section-pad" id="courses">
          <div className="section-top reveal">
            <div>
              <p className="eyebrow">
                <span>04</span> OUR PREMIUM COURSES
              </p>
              <h2>
                Pick a course. Learn one skill properly.
              </h2>
            </div>
            <p className="section-description">
              Live classes in DSA, development, system design, and DevOps. Each card shows what you’ll learn and who teaches it.
            </p>
          </div>
          <CourseFilters
            options={["All courses", "DSA", "Development", "System design", "AI & DevOps"]}
            value={filter}
            count={courses.length}
            onChange={setFilter}
          />
          <div className="course-grid catalog-grid" key={filter}>
            {visible.map((c) => (
              <article className="course-card" key={c.id}>
                <div className="course-thumbnail-button">
                  <img
                    className="course-thumbnail"
                    src={c.image}
                    alt=""
                    width="1600"
                    height="900"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="course-card-body">
                  <div className="course-mode">
                    <span className="course-category">{c.category}</span>
                    <span className="course-type">{c.type}</span>
                  </div>
                  <h3>
                    {/* Stretched over the whole card, so the card is one click target. */}
                    <button className="card-link" onClick={() => setSelected(c)}>
                      {c.title}
                    </button>
                  </h3>
                  <p>{c.subtitle}</p>
                  <div className="course-tags">
                    {c.tags.slice(0, 3).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="course-card-footer">
                    <span>
                      with <b>{c.instructor}</b>
                    </span>
                    <span className="course-card-cta" aria-hidden="true">
                      View course <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="catalog-footnote">
            <span>{courses.length} courses. Pick one and start.</span>
            <a href="#free-learning">
              Or try a free course <ArrowRight size={14} />
            </a>
          </div>
        </section>
        <ClientFeedback />
        <Pricing />
        <FreeCourseLibrary />
        <MemberVideos />
        <section className="faq section-pad" id="faq">
          <div className="faq-heading reveal">
            <p className="eyebrow">
              <span>09</span> COURSE QUESTIONS
            </p>
            <h2>
              Questions? Here are the answers.
            </h2>
            <p>Can’t find yours? Ask us and we’ll help.</p>
            <a
              href="https://coderarmy.in/#contact-us"
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              Get in touch <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="faq-list">
            {[
              {
                q: "I’m completely new to coding. Where should I start?",
                a: "Start with a free course: DSA in C++, Java, or web development. Once the basics feel easy, move on to DSA Mastermind. It takes you from the basics to hard problems, one step at a time.",
              },
              {
                q: "How do live classes and recordings work?",
                a: "Join a class live, or watch the recording later. Recordings let you rewatch anything you missed. Your course page on Strike shows class times and how long recordings stay available.",
              },
              {
                q: "What’s the difference between a course and a membership?",
                a: "A course teaches one skill. A membership gives you many courses at once. Strike Plus includes every course we have now. Strike Ultra also includes every new course we add during your plan.",
              },
              {
                q: "Who will be teaching the courses?",
                a: "Rohit Negi and Aditya Tandon. Each course card shows which of them teaches it.",
              },
              {
                q: "Where do I enroll and access my courses?",
                a: "On Strike, our learning website. Pick a course here, check the details on strikes.in, and sign up there. Not ready to pay? Try our free courses or watch on YouTube.",
              },
            ].map((f, i) => (
              <details key={f.q}>
                <summary>
                  <span className="faq-number">0{i + 1}</span>
                  {f.q}
                  <span className="faq-plus">+</span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="final-cta">
          <div className="final-grid" aria-hidden="true" />
          <div className="reveal">
            <div className="final-mark">
              <Logo small />
            </div>
            <p className="eyebrow">JOIN CODER ARMY</p>
            <h2>
              Ready to start? Pick your first step.
            </h2>
            <p>
              Join 202K+ students. Start with a course, or try one for free.
            </p>
            <div>
              <a className="button primary" href="#courses">
                Find your course <ArrowRight size={16} />
              </a>
              <a className="button secondary" href="#free-learning">
                Start for free <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <span className="cta-caption">
            &lt; a little better, every day /&gt;
          </span>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-main">
          <div>
            <Logo />
            <p>
              We help people learn to code, one clear step at a time.
            </p>
          </div>
          <div>
            <span>LEARN</span>
            <a href="#courses">Our courses</a>
            <a href="#free-learning">Free tutorials</a>
            <a href="#youtube-members">YouTube membership</a>
            <a href="#membership">Strike membership</a>
          </div>
          <div>
            <span>CODER ARMY</span>
            <a href="#approach">Our approach</a>
            <a href="#technical-depth">System design in practice</a>
            <a href="#mentors">Your mentors</a>
            <a href="#testimonials">Student stories</a>
            <a href="#faq">FAQs</a>
          </div>
          <div>
            <span>FIND US ELSEWHERE</span>
            <a
              href="https://www.youtube.com/@CoderArmy9"
              target="_blank"
              rel="noreferrer"
            >
              <YouTubeIcon size={19} /> YouTube <ArrowUpRight size={12} />
            </a>
            <a
              href="https://www.linkedin.com/company/coderarmy"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon size={18} /> LinkedIn <ArrowUpRight size={12} />
            </a>
            <a
              href="https://www.instagram.com/coder_army9/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon size={18} /> Instagram <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Coder Army. All rights reserved.
          </span>
          <div>
            <a
              href="https://coderarmy.in/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Privacy
            </a>
            <a
              href="https://coderarmy.in/terms"
              target="_blank"
              rel="noreferrer"
            >
              Terms
            </a>
            <a href="#">Back to top ↑</a>
          </div>
        </div>
      </footer>
      <CourseDialog course={selected} onClose={() => setSelected(null)} />
    </>
  );
}
function ArrowDownRight() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
    >
      <path d="M3 3 13 13M4 13h9V4" />
    </svg>
  );
}
export default App;
