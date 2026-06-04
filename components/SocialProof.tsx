import {
  proofStats,
  hiringPartners,
  successStories,
  pressFeatures,
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

/** Counting stat band — the headline Sigma School track record. */
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

/** Infinite marquee of hiring-partner wordmarks. */
export function HiringPartnersStrip() {
  const row = [...hiringPartners, ...hiringPartners];
  return (
    <div className="nx-marquee reveal" aria-label="A selection of hiring partners">
      <div className="nx-marquee-fade nx-marquee-fade-l" aria-hidden="true" />
      <div className="nx-marquee-fade nx-marquee-fade-r" aria-hidden="true" />
      <div className="nx-marquee-track">
        {row.map((name, i) => (
          <span className="nx-logo" key={`${name}-${i}`}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Career-switch success stories. */
export function SuccessStories() {
  return (
    <div className="nx-stories">
      {successStories.map((s) => (
        <div className="nx-story reveal" key={s.name}>
          <div className="nx-story-avatar">{s.initials}</div>
          <div className="nx-story-body">
            <div className="nx-story-name">{s.name}</div>
            <div className="nx-story-path">
              <span className="nx-story-before">{s.before}</span>
              <span className="nx-story-arrow">
                <ArrowRight />
              </span>
              <span className="nx-story-after">
                {s.role}
                <em>@ {s.company}</em>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Press features as linked cards. */
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
          <span className="nx-press-name">{p.name}</span>
          <span className="nx-press-title">&ldquo;{p.title}&rdquo;</span>
          <span className="nx-press-cta">
            Read <ArrowRight />
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
            <span className="grad-text">Sigma School</span>.
          </h2>
          <p>
            Before Northstack, we built one of Southeast Asia&apos;s leading
            coding bootcamps — taking complete beginners to working software
            developers, backed by a get-hired-or-money-back promise. We&apos;ve
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
          <span className="eyebrow">Success stories</span>
          <p>
            Doctors, coaches, fresh grads — re-tooled into builders shipping in
            production. The same playbook re-tools your team around AI.
          </p>
        </div>
        <SuccessStories />

        <div className="nx-proof-sub reveal">
          <span className="eyebrow">As featured in</span>
          <p>Coverage from the publications that watch this space closely.</p>
        </div>
        <PressStrip />
      </div>
    </section>
  );
}
