import logo from "../assets/coder-army-logo.png";
export function Logo({ small = false }: { small?: boolean }) {
  return (
    <a
      href="#"
      aria-label="Coder Army home"
      className={`brand ${small ? "brand-small" : ""}`}
    >
      <img src={logo} alt="Coder Army" width="160" height="40" />
    </a>
  );
}
