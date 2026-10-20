import {
  ArrowUpRight,
  LockKeyhole,
  Radio,
  MessageCircle,
  Play,
} from "lucide-react";
import { YouTubeIcon } from "./brand-icons";
import bloom from "../assets/members/bloom-filter.jpg";
import gateway from "../assets/members/api-gateway.jpg";
import spring from "../assets/members/spring-boot.jpg";
import hashing from "../assets/members/consistent-hashing.jpg";
const videos = [
  {
    title: "Bloom Filter in System Design",
    series: "HIGH LEVEL DESIGN · #3",
    id: "ZJAOMFct_XA",
    duration: "48 min",
    image: bloom,
  },
  {
    title: "Consistent Hashing in System Design",
    series: "HIGH LEVEL DESIGN · #2",
    id: "hqQpKjBpYPY",
    duration: "1 hr 8 min",
    image: hashing,
  },
  {
    title: "Building a Production-Style API Gateway in Spring Boot",
    series: "GATEKEEPER PROJECT · #2",
    id: "ZxCcYHL96x8",
    duration: "1 hr 9 min",
    image: gateway,
  },
  {
    title: "Build a Production-Grade Full Stack Project with Spring Boot",
    series: "MICROSERVICES · KAFKA · REDIS",
    id: "-Wv5uCu2PIg",
    duration: "1 hr 34 min",
    image: spring,
  },
];
export function MemberVideos() {
  return (
    <section className="youtube-members section-pad" id="youtube-members">
      <div className="section-top reveal">
        <div>
          <p className="eyebrow">
            <span>08</span> YOUTUBE CHANNEL MEMBERSHIP
          </p>
          <h2>Go a little further. Become a channel member.</h2>
        </div>
        <div className="section-aside">
          <p className="section-description">
            Join the YouTube channel for extra lessons, live streams, and project walkthroughs. Here’s a peek inside.
          </p>
          <a
            className="button secondary"
            href="https://www.youtube.com/@CoderArmy9/membership"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeIcon size={16} />
            Explore YouTube membership
            <ArrowUpRight size={16} />
          </a>
          <span className="members-note">
            Channel membership is a separate subscription from Strike.
          </span>
        </div>
      </div>
      <div className="members-perks">
        <span>
          <LockKeyhole size={14} />
          Members-only lessons
        </span>
        <span>
          <Radio size={14} />
          Members-only live streams
        </span>
        <span>
          <MessageCircle size={14} />
          Members-only live chats
        </span>
      </div>
      <div className="member-video-grid">
        {videos.map((v) => (
          <a
            key={v.id}
            className="member-video-card reveal"
            href={"https://www.youtube.com/watch?v=" + v.id}
            target="_blank"
            rel="noreferrer"
          >
            <div className="member-video-image">
              <img
                src={v.image}
                alt={v.title + " — original Coder Army thumbnail"}
                loading="lazy"
                width="480"
                height="360"
              />
              <span className="members-only-badge">
                <LockKeyhole size={10} />
                Members only
              </span>
              <span className="video-duration">{v.duration}</span>
              <span className="video-play">
                <Play size={18} fill="currentColor" />
              </span>
            </div>
            <span className="member-video-series">{v.series}</span>
            <h3>{v.title}</h3>
            <span className="member-video-link">
              View on YouTube <ArrowUpRight size={13} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
