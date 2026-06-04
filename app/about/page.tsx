import type { Metadata } from "next";
import Enhance from "@/components/Enhance";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  StatBand,
  HiringPartnersStrip,
  TeamStrip,
  PressStrip,
} from "@/components/SocialProof";

export const metadata: Metadata = {
  title: "About — Northstack",
  description:
    "Northstack is built by Deric Yee, founder of Sigmaschool. Years of building software and teaching people to build with code and AI revealed the same inefficiencies inside companies everywhere.",
};

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

export default function About() {
  return (
    <>
      <Enhance />
      <div className="scroll-progress" aria-hidden="true" />
      <SiteNav />

      <main>
        {/* HERO */}
        <section className="hero" style={{ paddingBottom: 56 }}>
          <span className="blob blob-a" aria-hidden="true" />
          <div className="container">
            <div className="reveal">
              <span className="eyebrow">About Northstack</span>
            </div>
            <h1 className="reveal" style={{ marginTop: 22, maxWidth: "20ch" }}>
              Built by people who&apos;ve shipped software — and felt the
              friction.
            </h1>
            <p className="hero-lede reveal">
              Northstack exists because the same gap keeps showing up: teams full
              of hard-won expertise, held back by how the work flows. We bring
              the AI-native tooling to close it.
            </p>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="section section-alt">
          <div className="container">
            <div className="founder">
              <aside className="founder-card reveal">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="founder-photo"
                  src="/team/deric-yee.png"
                  alt="Deric Yee, founder of Northstack and Sigmaschool"
                />
                <h3>Deric Yee</h3>
                <div className="founder-role">Founder, Northstack</div>
                <div className="founder-links">
                  <a
                    href="https://sigmaschool.co/about"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon /> Sigmaschool — About
                  </a>
                  <a
                    href="https://sigmaschool.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon /> sigmaschool.co
                  </a>
                </div>
              </aside>

              <div className="prose reveal">
                <p>
                  Northstack is founded by <strong>Deric Yee</strong>, the
                  founder of <strong>Sigmaschool</strong> — one of Southeast
                  Asia&apos;s leading coding bootcamps, known for a bold
                  money-back promise: get a tech job, or get your money back.
                </p>
                <p>
                  Sigmaschool started as a frustration, not a business plan.
                  Deric kept watching smart, hungry people try to break into
                  tech and hit the same wall — no time or money for a four-year
                  degree, online courses that dumped videos with no guidance,
                  platforms that taught skills but not outcomes. They could
                  learn… but they couldn&apos;t get hired.
                </p>
                <p>
                  So he built the place he wished existed when he was learning:
                  somewhere you could <strong>learn tech</strong>, get{" "}
                  <strong>mentored</strong>, use <strong>AI properly</strong>,
                  ship <strong>real projects</strong>, and land a{" "}
                  <strong>real job</strong> — all in one ecosystem, on one path.
                  What started as a side project became Sigmaschool. Hundreds of
                  graduates later, the path still works — the standard
                  hasn&apos;t moved, only the curriculum has, because AI keeps
                  moving the floor.
                </p>

                <p className="pull">
                  &ldquo;Learning alone is hard. Learning with guidance,
                  community, and real-world context isn&apos;t. That&apos;s the
                  entire bet.&rdquo;
                </p>

                <h3>Why Northstack</h3>
                <p>
                  Running a school that turns beginners into builders means
                  living at the frontier of what AI can do — every month the
                  tools get more capable, and the gap between teams who use them
                  well and teams who don&apos;t gets wider. The same pattern that
                  holds back individuals holds back companies: skilled people
                  doing work that AI could now carry.
                </p>
                <p>
                  Northstack is how we bring that frontier inside established
                  companies. We don&apos;t claim to know your industry better
                  than you — <strong>you&apos;re the expert</strong>. We bring
                  the AI-native tooling, the building experience, and the
                  teaching instinct to make your team dramatically faster at what
                  they already do best.
                </p>

                <h3>What we believe</h3>
                <p>
                  We take our cue from Sequoia&apos;s thesis that{" "}
                  <a
                    href="https://www.sequoiacap.com/article/services-the-new-software/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--accent)",
                      borderBottom:
                        "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
                    }}
                  >
                    services are the new software
                  </a>
                  : the durable advantage isn&apos;t the model — it&apos;s
                  domain expertise and trust, amplified by AI. That expertise is
                  yours. Our job is to make it compound.
                </p>

                <div className="hero-actions" style={{ marginTop: 28 }}>
                  <a className="btn btn-primary" href="/#contact">
                    Let&apos;s chat
                    <span className="btn-arrow">→</span>
                  </a>
                  <a className="btn btn-ghost" href="/#why">
                    Read the premise
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SOCIAL PROOF — the Sigmaschool track record */}
        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">The track record</span>
              <h2>
                Proof, not promises — from{" "}
                <span className="grad-text">Sigmaschool</span>.
              </h2>
              <p>
                The same people building Northstack already ran one of Southeast
                Asia&apos;s leading coding bootcamps. Here&apos;s what that looks
                like in outcomes — careers changed, partners hiring, and the
                press paying attention.
              </p>
            </div>

            <StatBand />

            <div className="nx-proof-sub reveal">
              <span className="eyebrow">Hiring partners</span>
              <p>
                Companies that hire our graduates on output, not credentials.
              </p>
            </div>
            <HiringPartnersStrip />

            <div className="nx-proof-sub reveal">
              <span className="eyebrow">The team</span>
              <p>
                A small, senior team of builders and instructors — the people
                behind both Sigmaschool and Northstack.
              </p>
            </div>
            <TeamStrip />

            <div className="nx-proof-sub reveal">
              <span className="eyebrow">As featured in</span>
              <p>Coverage from publications that watch this space closely.</p>
            </div>
            <PressStrip />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
