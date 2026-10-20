import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import "./pricing.css";

type Years = 2 | 3 | 4;

const plans = [
  {
    id: "plus",
    name: "Strike Plus",
    desc: "Every course we have today.",
    prices: { 2: 9999, 3: 11999, 4: 12499 },
    cta: "Get Strike Plus",
    heading: "Includes:",
    features: [
      "All existing Strike courses",
      "Live class access during your plan",
      "HD recordings and notes",
      "Certificates",
      "Resume review",
    ],
  },
  {
    id: "ultra",
    name: "Strike Ultra",
    desc: "Every course we have today, plus every new one we launch.",
    prices: { 2: 11999, 3: 12999, 4: 13499 },
    cta: "Get Strike Ultra",
    heading: "Everything in Plus, and:",
    features: ["Upcoming courses included", "Upcoming batches included"],
    badge: "Most complete",
  },
] as const;

const inr = (n: number) => n.toLocaleString("en-IN");

export function Pricing() {
  const [years, setYears] = useState<Years>(4);
  return (
    <section className="membership section-pad" id="membership">
      <div className="pricing-head reveal">
        <p className="eyebrow">
          <span>06</span> OUR MEMBERSHIP
        </p>
        <h2>Pay once. Keep learning with Strike.</h2>
        <p className="section-description">
          Pay one time and get Strike courses for the years you pick. Nothing renews.
        </p>
        <div
          className="pricing-toggle"
          role="radiogroup"
          aria-label="Membership length"
          style={{ "--i": years - 2 } as React.CSSProperties}
        >
          <span className="pricing-toggle-thumb" aria-hidden="true" />
          {([2, 3, 4] as const).map((y) => (
            <button key={y} role="radio" aria-checked={years === y} onClick={() => setYears(y)}>
              {y} years
            </button>
          ))}
        </div>
      </div>

      <div className="pricing-grid">
        {plans.map((p) => {
          const featured = "badge" in p;
          return (
            <article key={p.id} className="plan reveal" data-featured={featured}>
              {featured && <span className="plan-badge">{p.badge}</span>}
              <h3>{p.name}</h3>
              <p className="plan-desc">{p.desc}</p>
              <div className="plan-price">
                <span className="plan-amount">₹{inr(p.prices[years])}</span>
                <span className="plan-term">
                  one-time,
                  <br />
                  for {years} years
                </span>
              </div>
              <a
                className={`button ${featured ? "primary" : "secondary"} plan-cta`}
                href={`https://strikes.in/membership/${p.id}?duration=${years}%20Years&price=${p.prices[years]}`}
                target="_blank"
                rel="noreferrer"
              >
                {p.cta} <ArrowUpRight size={16} />
              </a>
              <div className="plan-features">
                <p>{p.heading}</p>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>
                      <Check size={15} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      <p className="membership-footnote">
        Payments and access are managed on{" "}
        <a href="https://strikes.in" target="_blank" rel="noreferrer">
          strikes.in
        </a>
        . Check there for current pricing.
      </p>
    </section>
  );
}
