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
            Northstack is founded by Deric Yee — finance-and-VC grad turned
            self-taught builder, and the founder of Sigma School. He&apos;s spent
            the last seven years shipping products and teaching thousands of
            people to build with code and AI.
          </p>
        </div>

        <div className="nx-founder reveal">
          <aside className="nx-founder-card">
            <div className="nx-founder-avatar">DY</div>
            <h3>Deric Yee</h3>
            <div className="nx-founder-role">Founder · Northstack &amp; Sigma School</div>
            <div className="nx-founder-links">
              <a href="https://sigmaschool.co/about" target="_blank" rel="noopener noreferrer">
                <LinkIcon /> Sigma School — About
              </a>
              <a href="https://sigmaschool.co" target="_blank" rel="noopener noreferrer">
                <LinkIcon /> sigmaschool.co
              </a>
            </div>
          </aside>

          <div className="nx-founder-prose">
            <p>
              Deric studied finance and venture capital at Lancaster University,
              graduating with First Class Honours, and started out in VC. He
              quickly realised he didn&apos;t want to analyse companies from the
              outside — he wanted to build them. So in 2019 he taught himself to
              code and started shipping.
            </p>
            <p>
              Since then he&apos;s launched <strong>Codeo</strong>, a
              learn-to-code mobile app; <strong>TryJobier</strong>, an automated
              job-search platform; co-founded <strong>The Hacker Collective</strong>;
              and in 2022 founded <strong>Sigma School</strong> to turn complete
              beginners into working developers in months.
            </p>
            <blockquote className="nx-founder-quote">
              <Star size={16} />
              <span>
                &ldquo;Teaching thousands of people to build with code — and now
                AI — showed me the same thing over and over: the bottleneck is
                rarely talent. It&apos;s the way the work is done.&rdquo;
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
