import uber from "../assets/uber.svg";
import ola from "../assets/ola.svg";
import oxyzo from "../assets/oxyzo.svg";
import iitg from "../assets/iitg.png";
export function LogoCloud() {
  return (
    <section
      className="instructor-logo-cloud section-pad"
      id="community"
      aria-label="Your instructors’ experience"
    >
      <div className="community-numbers">
        <div>
          <b>202K+</b>
          <span>Students in the Coder Army community</span>
        </div>
        <div>
          <b>6</b>
          <span>Premium courses to build your skills</span>
        </div>
        <div>
          <b>2</b>
          <span>Experienced instructors</span>
        </div>
      </div>
      <div className="logo-cloud-heading">
        <span className="eyebrow">WHO TEACHES YOU</span>
        <p>
          Your teachers built software at Uber, Ola, and Oxyzo, and studied at IIT Guwahati.
        </p>
      </div>
      <div className="logo-cloud-row">
        {[
          { src: uber, name: "Uber", class: "logo-uber" },
          { src: ola, name: "Ola", class: "logo-ola" },
          { src: oxyzo, name: "Oxyzo Financial Services", class: "logo-oxyzo" },
        ].map((l) => (
          <div key={l.name}>
            <img src={l.src} alt={l.name} className={l.class} loading="lazy" />
          </div>
        ))}
        <div className="logo-iitg">
          <img src={iitg} alt="IIT Guwahati emblem" loading="lazy" />
          <span>IIT GUWAHATI</span>
        </div>
      </div>
    </section>
  );
}
