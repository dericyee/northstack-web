import {
  proofStats,
  hiringPartners,
  pressFeatures,
  team,
} from "./socialProofData";

function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Counting stat band — the headline Sigmaschool track record. */
export function StatBand() {
  return (
    <div className="nx-statband reveal">
      {proofStats.map((s) => (
        <div className="nx-statband-item" key={s.label}>
          <strong
            data-count={s.value}
            data-prefix={s.prefix || ""}
            data-suffix={s.suffix || ""}
          >
            {s.prefix || ""}
            {s.value}
            {s.suffix || ""}
          </strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

/** Infinite marquee of real hiring-partner logos. */
export function HiringPartnersStrip() {
  const row = [...hiringPartners, ...hiringPartners];
  return (
    <div className="nx-marquee reveal" aria-label="A selection of hiring partners">
      <div className="nx-marquee-fade nx-marquee-fade-l" aria-hidden="true" />
      <div className="nx-marquee-fade nx-marquee-fade-r" aria-hidden="true" />
      <div className="nx-marquee-track">
        {row.map((p, i) => (
          <span className="nx-logo" key={`${p.name}-${i}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.logo} alt={p.name} loading="lazy" />
          </span>
        ))}
      </div>
    </div>
  );
}

/** The team behind Northstack — real human photos. */
export function TeamStrip() {
  return (
    <div className="nx-team">
      {team.map((m) => (
        <figure className="nx-team-card reveal" key={m.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={m.image} alt={m.name} loading="lazy" />
          <figcaption>
            <span className="nx-team-name">{m.name}</span>
            <span className="nx-team-role">{m.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** Press features as image-rich linked cards. */
export function PressStrip() {
  return (
    <div className="nx-press">
      {pressFeatures.map((p) => (
        <a
          className="nx-press-card reveal"
          key={p.link}
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="nx-press-shot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.preview} alt={`${p.name} — ${p.title}`} loading="lazy" />
          </span>
          <span className="nx-press-meta">
            <span className="nx-press-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.logo} alt={p.name} loading="lazy" />
            </span>
            <span className="nx-press-title">&ldquo;{p.title}&rdquo;</span>
            <span className="nx-press-cta">
              Read <ArrowRight />
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}

/** Full homepage social-proof section. */
export default function SocialProof() {
  return (
    <section id="proof" className="section section-alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Why trust us with this</span>
          <h2>
            Built by the team behind{" "}
            <span className="grad-text">Sigmaschool</span>.
          </h2>
          <p>
            Before Northstack, we built one of Southeast Asia&apos;s leading
            tech schools and programmes — taking complete beginners to working
            software developers, backed by a get-hired-or-money-back promise.
            We&apos;ve
            spent years turning AI from hype into outcomes. Now we bring that
            inside your company.
          </p>
        </div>

        <StatBand />

        <div className="nx-proof-sub reveal">
          <span className="eyebrow">Hiring partners</span>
          <p>
            Graduates of our school now build at companies that don&apos;t hire
            on faith — they hire on output.
          </p>
        </div>
        <HiringPartnersStrip />

        <div className="nx-proof-sub reveal">
          <span className="eyebrow">The team</span>
          <p>
            A small, senior team of builders and instructors — the same people
            who&apos;ll be in the room with you.
          </p>
        </div>
        <TeamStrip />

        <div className="nx-proof-sub reveal">
          <span className="eyebrow">As featured in</span>
          <p>Coverage from the publications that watch this space closely.</p>
        </div>
        <PressStrip />
      </div>
    </section>
  );
}
