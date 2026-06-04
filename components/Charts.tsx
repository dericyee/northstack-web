/**
 * Charts — an animated, data-viz section for the homepage.
 *
 * Everything is hand-drawn SVG/CSS so it stays dependency-free and matches the
 * site's design system. Animations are driven by the existing `.reveal`/`.in`
 * scroll system (see Enhance.tsx + globals.css): lines draw on, areas fade up,
 * bars grow, and the donut sweeps — only once each chart scrolls into view.
 * Numbers count up via the shared `[data-count]` handler.
 */

const LINE = {
  // index of "work delivered by AI agents" — illustrative trend, 2027 projected
  points: [
    { year: "2022", v: 8, x: 44, y: 222.4 },
    { year: "2023", v: 18, x: 144, y: 200.4 },
    { year: "2024", v: 34, x: 244, y: 165.2 },
    { year: "2025", v: 58, x: 344, y: 112.4 },
    { year: "2026", v: 82, x: 444, y: 59.6 },
    { year: "2027", v: 96, x: 544, y: 28.8 },
  ],
};

const linePath = LINE.points
  .map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`)
  .join(" ");
const areaPath = `${linePath} L544,240 L44,240 Z`;

const HOURS = [
  { label: "Intake & data entry", hours: 11, pct: 92 },
  { label: "Reporting & dashboards", hours: 8, pct: 67 },
  { label: "Drafting & client comms", hours: 6, pct: 50 },
  { label: "Reconciliation & QA", hours: 5, pct: 42 },
];

export default function Charts() {
  return (
    <section id="numbers" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">By the numbers · 2026</span>
          <h2>The shift isn&apos;t coming. It&apos;s compounding.</h2>
          <p>
            We&apos;re halfway through 2026 and the curve has bent. The teams
            that wired AI into the work itself last year are pulling away — here
            is what that looks like in numbers.
          </p>
        </div>

        <div className="nx-charts">
          {/* Big line/area chart */}
          <figure className="nx-card nx-card-wide reveal">
            <figcaption className="nx-card-head">
              <div>
                <span className="nx-kicker">Adoption index</span>
                <h3>Work delivered by AI agents</h3>
              </div>
              <span className="nx-pill">
                <span className="nx-pill-dot" /> 2027 projected
              </span>
            </figcaption>

            <div className="nx-linechart">
              <svg
                viewBox="0 0 560 260"
                preserveAspectRatio="none"
                role="img"
                aria-label="Line chart: adoption of AI-delivered work rising sharply from 2022 to a 2027 projection"
              >
                <defs>
                  <linearGradient id="nxArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3d63f5" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#3d63f5" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="nxLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3d63f5" />
                    <stop offset="100%" stopColor="#6e8bff" />
                  </linearGradient>
                </defs>

                {/* gridlines */}
                {[20, 75, 130, 185, 240].map((y) => (
                  <line
                    key={y}
                    className="nx-grid"
                    x1="44"
                    x2="544"
                    y1={y}
                    y2={y}
                  />
                ))}

                {/* area + line */}
                <path className="nx-area" d={areaPath} fill="url(#nxArea)" />
                <path
                  className="nx-line"
                  d={linePath}
                  fill="none"
                  stroke="url(#nxLine)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={1}
                />

                {/* points */}
                {LINE.points.map((p, i) => (
                  <circle
                    key={p.year}
                    className={`nx-dot ${p.year === "2026" ? "nx-dot-now" : ""}`}
                    cx={p.x}
                    cy={p.y}
                    r={p.year === "2026" ? 6 : 4}
                    style={{ ["--d" as string]: `${0.9 + i * 0.12}s` }}
                  />
                ))}
              </svg>

              <div className="nx-xaxis">
                {LINE.points.map((p) => (
                  <span
                    key={p.year}
                    className={p.year === "2026" ? "nx-now" : ""}
                  >
                    {p.year}
                  </span>
                ))}
              </div>
            </div>

            <p className="nx-foot">
              <strong data-count="11" data-suffix="×">
                11×
              </strong>{" "}
              growth in three years. The companies on the steep part of this
              curve set it there on purpose.
            </p>
          </figure>

          {/* Donut */}
          <figure className="nx-card reveal">
            <figcaption className="nx-card-head">
              <div>
                <span className="nx-kicker">Capacity unlocked</span>
                <h3>Knowledge work now automatable</h3>
              </div>
            </figcaption>

            <div className="nx-donut-wrap">
              <svg viewBox="0 0 120 120" className="nx-donut" role="img" aria-label="41% of knowledge work is now automatable with AI">
                <circle className="nx-donut-track" cx="60" cy="60" r="52" />
                <circle
                  className="nx-donut-val"
                  cx="60"
                  cy="60"
                  r="52"
                  pathLength={1}
                  style={{ ["--pct" as string]: 0.41 }}
                />
              </svg>
              <div className="nx-donut-center">
                <strong data-count="41" data-suffix="%">
                  41%
                </strong>
                <span>of hours</span>
              </div>
            </div>
            <p className="nx-foot">
              Of a typical knowledge worker&apos;s week — the rote middle that
              AI can now carry, freeing your experts for judgement.
            </p>
          </figure>

          {/* Horizontal bars */}
          <figure className="nx-card nx-card-wide reveal">
            <figcaption className="nx-card-head">
              <div>
                <span className="nx-kicker">From a typical pilot</span>
                <h3>Hours back per person, per week</h3>
              </div>
              <span className="nx-pill nx-pill-soft">≈ 30 hrs / week total</span>
            </figcaption>

            <div className="nx-bars">
              {HOURS.map((h, i) => (
                <div className="nx-bar-row" key={h.label}>
                  <span className="nx-bar-label">{h.label}</span>
                  <div className="nx-bar-track">
                    <i
                      className="nx-bar-fill"
                      style={{
                        ["--w" as string]: `${h.pct}%`,
                        ["--d" as string]: `${0.15 + i * 0.12}s`,
                      }}
                    />
                  </div>
                  <span className="nx-bar-val">{h.hours} hrs</span>
                </div>
              ))}
            </div>
            <p className="nx-foot">
              Illustrative result from a first AI-native workflow — measured
              against how the same work was done the month before.
            </p>
          </figure>
        </div>
      </div>
    </section>
  );
}
