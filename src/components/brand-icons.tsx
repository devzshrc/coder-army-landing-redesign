import youtube from "../assets/youtube.svg";
export function YouTubeIcon({ size = 22 }: { size?: number }) {
  return (
    <img
      src={youtube}
      alt=""
      aria-hidden="true"
      width={size}
      height={Math.round((size * 110) / 159)}
      className="youtube-icon"
    />
  );
}
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
export function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <img
      src={linkedin}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className="social-brand-icon"
    />
  );
}
export function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <img
      src={instagram}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className="social-brand-icon"
    />
  );
}
export function SocialLinks() {
  return (
    <div className="hero-socials">
      <span>Follow along</span>
      <div aria-label="Coder Army social channels">
        <a
          href="https://www.linkedin.com/company/coderarmy"
          target="_blank"
          rel="noreferrer"
          aria-label="Coder Army on LinkedIn"
        >
          <LinkedInIcon size={18} />
        </a>
        <a
          href="https://www.youtube.com/@CoderArmy9"
          target="_blank"
          rel="noreferrer"
          aria-label="Coder Army on YouTube"
        >
          <YouTubeIcon size={22} />
        </a>
        <a
          href="https://www.instagram.com/coder_army9/"
          target="_blank"
          rel="noreferrer"
          aria-label="Coder Army on Instagram"
        >
          <InstagramIcon size={18} />
        </a>
      </div>
    </div>
  );
}
