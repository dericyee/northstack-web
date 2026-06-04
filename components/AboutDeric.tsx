import Star from "./Star";

function LinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10 14a5 5 0 007.5.5l2-2A5 5 0 0012.5 5l-1 1M14 10a5 5 0 00-7.5-.5l-2 2A5 5 0 0011.5 19l1-1"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutDeric() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">About the founder</span>
          <h2>Deric Yee.</h2>
          <p>
            Northstack is founded by Deric Yee — self-taught builder and the
            founder of Sigmaschool. He&apos;s spent years shipping products and
            teaching thousands of people to build with code and AI.
          </p>
        </div>

        <div className="nx-founder reveal">
          <aside className="nx-founder-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="nx-founder-photo"
              src="/team/deric-yee.png"
              alt="Deric Yee, founder of Northstack and Sigmaschool"
            />
            <h3>Deric Yee</h3>
            <div className="nx-founder-role">Founder · Northstack &amp; Sigmaschool</div>
            <div className="nx-founder-links">
              <a href="https://sigmaschool.co/about" target="_blank" rel="noopener noreferrer">
                <LinkIcon /> Sigmaschool — About
              </a>
              <a href="https://sigmaschool.co" target="_blank" rel="noopener noreferrer">
                <LinkIcon /> sigmaschool.co
              </a>
            </div>
          </aside>

          <div className="nx-founder-prose">
            <p>
              Deric started Sigmaschool out of a frustration, not a business
              plan. He kept watching smart, hungry people try to break into tech
              and hit the same wall — courses that dumped videos with no
              guidance, taught skills but not outcomes, and left people able to
              learn but unable to get hired.
            </p>
            <p>
              So he built the place he wished existed: somewhere you could learn
              tech, get mentored, use AI properly, ship real projects, and land a
              real job — all on one path. What started as a side project became{" "}
              <strong>Sigmaschool</strong>, one of Southeast Asia&apos;s leading
              coding bootcamps, with hundreds of graduates now building in
              production.
            </p>
            <blockquote className="nx-founder-quote">
              <Star size={16} />
              <span>
                &ldquo;Learning alone is hard. Learning with guidance, community,
                and real-world context isn&apos;t. That&apos;s the entire
                bet.&rdquo;
              </span>
            </blockquote>
            <p>
              Northstack is how he brings that frontier inside established
              companies — pairing your domain expertise with AI-native tooling,
              so the knowledge you&apos;ve spent years building compounds instead
              of stalling.
            </p>
            <div className="hero-actions" style={{ marginTop: 26 }}>
              <a className="btn btn-primary" href="/about">
                Read the full story
                <span className="btn-arrow">→</span>
              </a>
              <a className="btn btn-ghost" href="#contact">
                Work with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
