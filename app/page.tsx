import ContactForm from "@/components/ContactForm";
import Enhance from "@/components/Enhance";

const SEQUOIA_URL = "https://sequoiacap.com/article/services-the-new-software/";

function Star({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="#0c0e12" />
      <path
        d="M16 6l2.2 7.8L26 16l-7.8 2.2L16 26l-2.2-7.8L6 16l7.8-2.2z"
        fill="#fff"
      />
    </svg>
  );
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#2d4eff" opacity="0.12" />
      <path
        d="M7 12.5l3.2 3.2L17 8.5"
        stroke="#2d4eff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Cross() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#9aa0ab" opacity="0.14" />
      <path
        d="M8.5 8.5l7 7M15.5 8.5l-7 7"
        stroke="#6b7280"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Dot() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="4" fill="#fff" opacity="0.85" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Enhance />

      {/* NAV */}
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#top">
            <Star /> Northstack
          </a>
          <nav className="nav-links">
            <a href="#why">Why now</a>
            <a href="#approach">Approach</a>
            <a href="#work">What we do</a>
            <a href="#process">Process</a>
          </nav>
          <div className="nav-cta">
            <a className="btn btn-primary" href="#contact">
              Let&apos;s chat
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <svg
            className="hero-stars"
            viewBox="0 0 1200 500"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <g fill="#0c0e12">
              <circle cx="980" cy="70" r="1.6" opacity="0.5" />
              <circle cx="1080" cy="140" r="1.2" opacity="0.35" />
              <circle cx="900" cy="180" r="1.1" opacity="0.3" />
              <circle cx="1130" cy="60" r="1.4" opacity="0.4" />
              <circle cx="1040" cy="240" r="1" opacity="0.25" />
              <circle cx="860" cy="90" r="1" opacity="0.25" />
            </g>
          </svg>
          <div className="container">
            <div className="reveal">
              <span className="eyebrow">AI-native transformation studio</span>
            </div>
            <h1 className="reveal" style={{ marginTop: 22 }}>
              Become AI-native before your competitors do.
            </h1>
            <p className="hero-lede reveal">
              We&apos;ve built software for years and kept seeing the same thing:
              brilliant teams losing hours to work that AI can now do. You know
              your field better than anyone. We bring the AI-native tools to make
              your people dramatically faster at it.
            </p>
            <div className="hero-actions reveal">
              <a className="btn btn-primary" href="#contact">
                Let&apos;s chat
                <span className="btn-arrow">→</span>
              </a>
              <a className="btn btn-ghost" href="#why">
                Why this, why now
              </a>
            </div>
            <div className="hero-meta reveal">
              <div className="stat">
                <strong>$6</strong>
                <span>spent on services for every $1 on software</span>
              </div>
              <div className="stat">
                <strong>70–80%</strong>
                <span>margins AI-native operators can reach</span>
              </div>
              <div className="stat">
                <strong>Your niche</strong>
                <span>stays yours — we bring the AI, not the expertise</span>
              </div>
            </div>
          </div>
        </section>

        {/* WHY NOW — the Sequoia premise */}
        <section id="why" className="section section-alt">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">The premise</span>
              <h2>Services are the new software.</h2>
              <p>
                Sequoia&apos;s thesis names the shift we&apos;ve felt for years.
                The next generation of category leaders won&apos;t just sell
                tools — they&apos;ll deliver the work itself, with AI doing the
                heavy lifting. The companies that adopt this first, in every
                industry, pull away from the ones that don&apos;t.
              </p>
            </div>

            <div className="thesis-grid">
              <div className="reveal">
                <div className="quote-card">
                  <blockquote>
                    &ldquo;For every $1 spent on software, $6 is spent on
                    services. The next trillion-dollar company won&apos;t sell
                    software — it will sell the work, delivered by AI at
                    software margins.&rdquo;
                  </blockquote>
                  <cite>
                    Adapted from{" "}
                    <a href={SEQUOIA_URL} target="_blank" rel="noopener noreferrer">
                      Sequoia Capital — &ldquo;Services: The New Software&rdquo;
                    </a>
                  </cite>
                </div>
                <p
                  style={{
                    marginTop: 24,
                    color: "var(--ink-soft)",
                    fontSize: 16,
                  }}
                >
                  The same logic applies inside your company. The work your team
                  does by hand today is the &ldquo;$6.&rdquo; AI-native tooling
                  is how you capture it — faster turnarounds, higher margins,
                  more capacity without more headcount.
                </p>
              </div>

              {/* Recreated chart (original, in our style) */}
              <figure className="chart reveal" style={{ margin: 0 }}>
                <div className="chart-title">
                  Where the money actually goes
                </div>
                <div className="chart-rows">
                  <div className="chart-row">
                    <div className="chart-label">
                      <span>Software</span>
                      <span>$1</span>
                    </div>
                    <div className="bar software">
                      <i />
                    </div>
                  </div>
                  <div className="chart-row">
                    <div className="chart-label">
                      <span>Services &amp; manual work</span>
                      <span>$6</span>
                    </div>
                    <div className="bar services">
                      <i />
                    </div>
                  </div>
                </div>
                <div className="chart-foot">
                  Copilots help people and compete with every model release.{" "}
                  <strong>
                    Autopilots deliver the work and get cheaper with every model
                    release.
                  </strong>{" "}
                  We help you build the second kind.
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">What we keep seeing</span>
              <h2>
                Great companies running on workflows from a pre-AI world.
              </h2>
              <p>
                Years of building software took us inside hundreds of operations.
                The pattern is always the same — the bottleneck isn&apos;t talent
                or effort. It&apos;s how the work flows.
              </p>
            </div>
            <div className="grid grid-3">
              <div className="card reveal">
                <div className="num">01</div>
                <h3>Skilled people doing rote work</h3>
                <p>
                  Experts spending half their week copy-pasting, reconciling,
                  formatting, and chasing — work that quietly drains your best
                  margin.
                </p>
              </div>
              <div className="card reveal">
                <div className="num">02</div>
                <h3>Tools that don&apos;t talk</h3>
                <p>
                  A dozen SaaS subscriptions, none of them connected. Knowledge
                  lives in inboxes and spreadsheets instead of working for you.
                </p>
              </div>
              <div className="card reveal">
                <div className="num">03</div>
                <h3>Growth that means hiring</h3>
                <p>
                  Every new client means more headcount, because capacity is
                  tied to hours. AI breaks that link — output stops scaling with
                  payroll.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APPROACH — the core positioning */}
        <section id="approach" className="section section-alt">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">How we&apos;re different</span>
              <h2>You&apos;re the expert. We bring the AI.</h2>
              <p>
                We don&apos;t parachute in claiming to know your industry better
                than you. We can&apos;t — and the consultants who pretend
                otherwise are why &ldquo;digital transformation&rdquo; earned a
                bad name. Our job is narrower and more honest: take the deep
                knowledge already in your team and give it AI-native leverage.
              </p>
            </div>

            <div className="split reveal">
              <div>
                <h3>What we don&apos;t do</h3>
                <ul className="checklist">
                  <li>
                    <Cross /> Tell you how to run a business we&apos;ve never run
                  </li>
                  <li>
                    <Cross /> Sell you another dashboard you&apos;ll forget to
                    open
                  </li>
                  <li>
                    <Cross /> Hand over a slide deck and disappear
                  </li>
                  <li>
                    <Cross /> Lock you into our tools or our retainer forever
                  </li>
                </ul>
              </div>
              <div>
                <h3>What we do</h3>
                <ul className="checklist">
                  <li>
                    <Check /> Learn your workflow from the people who live it
                  </li>
                  <li>
                    <Check /> Build AI into the work itself, where it earns its
                    keep
                  </li>
                  <li>
                    <Check /> Ship working systems, then prove the time and money
                    saved
                  </li>
                  <li>
                    <Check /> Train your team to own it — so you don&apos;t need
                    us forever
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section id="work" className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Engagements</span>
              <h2>Four ways we make a company AI-native.</h2>
            </div>
            <div className="grid grid-4">
              <div className="card reveal">
                <div className="icon-chip">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M11 4a7 7 0 105.2 11.7l3.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3>AI readiness audit</h3>
                <p>
                  We map your workflows and find the few that AI can transform
                  first — ranked by hours saved and ease of shipping.
                </p>
              </div>
              <div className="card reveal">
                <div className="icon-chip">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 7h14M5 12h9M5 17h14"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3>Workflow automation</h3>
                <p>
                  We connect your tools and let AI handle the repetitive middle —
                  intake, drafting, reconciliation, follow-up.
                </p>
              </div>
              <div className="card reveal">
                <div className="icon-chip">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8 18l-4-6 4-6M16 6l4 6-4 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Custom AI tooling</h3>
                <p>
                  When off-the-shelf won&apos;t fit, we build the internal tool
                  or agent your work actually needs — and you keep the code.
                </p>
              </div>
              <div className="card reveal">
                <div className="icon-chip">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3>Team enablement</h3>
                <p>
                  We embed AI into how your people work day to day, and train
                  them to extend it — so the capability stays after we leave.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section section-alt">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">How we work</span>
              <h2>Start small. Prove it. Then scale.</h2>
              <p>
                No twelve-month transformation programmes. We earn the next step
                by shipping something useful in the first few weeks.
              </p>
            </div>
            <div className="steps">
              <div className="step reveal">
                <div className="step-n">Step 1</div>
                <h3>Discover</h3>
                <p>
                  A short, paid deep-dive with your team. We find where the hours
                  and margin are leaking.
                </p>
              </div>
              <div className="step reveal">
                <div className="step-n">Step 2</div>
                <h3>Pilot</h3>
                <p>
                  We ship one high-impact workflow in weeks, not quarters, and
                  measure the result against today.
                </p>
              </div>
              <div className="step reveal">
                <div className="step-n">Step 3</div>
                <h3>Embed</h3>
                <p>
                  Once it&apos;s proven, we roll it deeper and wire it into the
                  rest of your operation.
                </p>
              </div>
              <div className="step reveal">
                <div className="step-n">Step 4</div>
                <h3>Hand over</h3>
                <p>
                  We train your team to own and extend it. Success is you not
                  needing us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST / PRINCIPLES */}
        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Why teams trust us</span>
              <h2>The moat is expertise and trust. We protect both.</h2>
              <p>
                Sequoia&apos;s thesis is clear that the durable advantage
                isn&apos;t the model — it&apos;s domain knowledge and trust.
                That&apos;s yours. Here&apos;s how we make sure it stays that
                way.
              </p>
            </div>
            <div className="principles reveal">
              <div className="principle">
                <h3>
                  <Star size={16} /> Your data stays yours
                </h3>
                <p>
                  We work inside your environment with least-privilege access.
                  Nothing trains a public model. Clear data agreements before we
                  touch anything.
                </p>
              </div>
              <div className="principle">
                <h3>
                  <Star size={16} /> No lock-in
                </h3>
                <p>
                  You own the systems, the code, and the accounts. If you ever
                  want to run it without us, you can. That keeps us honest.
                </p>
              </div>
              <div className="principle">
                <h3>
                  <Star size={16} /> Paid by outcomes
                </h3>
                <p>
                  We start with a small pilot tied to a measurable result — hours
                  saved, turnaround cut — so you see the return before you commit.
                </p>
              </div>
              <div className="principle">
                <h3>
                  <Star size={16} /> Builders, not slideware
                </h3>
                <p>
                  Years shipping real software in production. We write the code
                  and run the systems — strategy you can actually deploy.
                </p>
              </div>
              <div className="principle">
                <h3>
                  <Star size={16} /> Humans stay in control
                </h3>
                <p>
                  AI does the heavy lifting; your experts review what matters. We
                  design for oversight, not blind automation.
                </p>
              </div>
              <div className="principle">
                <h3>
                  <Star size={16} /> Small, senior team
                </h3>
                <p>
                  You work directly with the people building it — no junior
                  hand-offs, no account-management layer between you and the work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt">
          <div className="container" style={{ maxWidth: 820 }}>
            <div className="section-head reveal">
              <span className="eyebrow">Honest answers</span>
              <h2>Questions you&apos;re probably asking.</h2>
            </div>
            <div className="faq reveal">
              <details>
                <summary>
                  We&apos;re not a tech company. Is this for us?
                  <span className="plus">+</span>
                </summary>
                <p>
                  Especially for you. The biggest gains are in industries where
                  the work is still done by hand — brokerage, accounting,
                  clinics, agencies, operations. You bring the domain knowledge;
                  we bring the AI. No technical background needed on your side.
                </p>
              </details>
              <details>
                <summary>
                  Will this replace our people?
                  <span className="plus">+</span>
                </summary>
                <p>
                  Our aim is to take the draining work off their plates so they
                  do more of what they&apos;re great at — and so the same team
                  can handle far more without burning out. AI does the rote part;
                  your experts make the judgement calls.
                </p>
              </details>
              <details>
                <summary>
                  How fast do we see something real?
                  <span className="plus">+</span>
                </summary>
                <p>
                  The discovery phase is a couple of weeks; the first pilot
                  usually ships within four to six. You&apos;ll have a working,
                  measurable result before any larger commitment.
                </p>
              </details>
              <details>
                <summary>
                  What about our data and security?
                  <span className="plus">+</span>
                </summary>
                <p>
                  We operate inside your systems with least-privilege access and
                  a clear data agreement up front. Your data never trains a
                  public model, and you keep ownership of everything we build.
                </p>
              </details>
              <details>
                <summary>
                  Why not just hire internally?
                  <span className="plus">+</span>
                </summary>
                <p>
                  You can — and eventually you should own this. We get you there
                  in weeks instead of a year of hiring and ramp-up, and we hand
                  the keys to your team so the capability stays in-house.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">
            <div className="cta reveal">
              <svg
                className="hero-stars"
                viewBox="0 0 1200 500"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
                style={{ opacity: 0.25 }}
              >
                <g fill="#ffffff">
                  <circle cx="120" cy="80" r="1.6" />
                  <circle cx="260" cy="150" r="1.1" />
                  <circle cx="80" cy="220" r="1" />
                  <circle cx="1050" cy="90" r="1.4" />
                  <circle cx="1140" cy="200" r="1.1" />
                </g>
              </svg>
              <div className="cta-grid">
                <div>
                  <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Let&apos;s chat
                  </span>
                  <h2 style={{ marginTop: 16 }}>
                    Tell us where the manual work piles up.
                  </h2>
                  <p className="cta-lede">
                    A 30-minute, no-pitch conversation. We&apos;ll tell you
                    honestly whether AI can move the needle for you — and where
                    we&apos;d start if it can.
                  </p>
                  <div className="cta-points">
                    <span>
                      <Dot /> Talk to the people who build, not a salesperson
                    </span>
                    <span>
                      <Dot /> Leave with one concrete idea, free
                    </span>
                    <span>
                      <Dot /> Start with a small paid pilot, never a big contract
                    </span>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div>
              <a className="brand" href="#top">
                <Star /> Northstack
              </a>
              <p>
                We help established companies become AI-native — so the expertise
                you&apos;ve spent years building compounds instead of stalling.
              </p>
            </div>
            <div className="footer-links">
              <a href="#why">Why now</a>
              <a href="#approach">Approach</a>
              <a href="#work">What we do</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Northstack. All rights reserved.</span>
            <span>
              Premise:{" "}
              <a
                href={SEQUOIA_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderBottom: "1px solid var(--line-strong)" }}
              >
                Sequoia — Services: The New Software
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
