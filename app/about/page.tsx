import type { Metadata } from "next";
import Enhance from "@/components/Enhance";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  StatBand,
  HiringPartnersStrip,
  SuccessStories,
  PressStrip,
} from "@/components/SocialProof";

export const metadata: Metadata = {
  title: "About — Northstack",
  description:
    "Northstack is built by Deric Yee, founder of Sigma School. Years of building software and teaching people to build with code and AI revealed the same inefficiencies inside companies everywhere.",
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
                <div className="avatar">DY</div>
                <h3>Deric Yee</h3>
                <div className="founder-role">Founder, Northstack</div>
                <div className="founder-links">
                  <a
                    href="https://sigmaschool.co/about"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon /> Sigma School — About
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
                  founder of <strong>Sigma School</strong> — one of Southeast
                  Asia&apos;s leading coding bootcamps, known for a bold
                  money-back promise: get a tech job, or get your money back.
                </p>
                <p>
                  Deric&apos;s path into building was the long way round. He
                  studied finance and venture capital at Lancaster University,
                  graduating with First Class Honours, and started his career in
                  VC — crunching numbers and writing market research. He quickly
                  realised he didn&apos;t want to analyse companies from the
                  outside; he wanted to build them. So in 2019 he left, taught
                  himself to code, and started shipping products.
                </p>
                <p>
                  Since then he&apos;s built and launched real software:{" "}
                  <strong>Codeo</strong>, a mobile app for learning to code in
                  bite-sized lessons; <strong>TryJobier</strong>, an automated
                  job-search platform; and co-founded{" "}
                  <strong>The Hacker Collective</strong>, a startup builder
                  backing technology ventures across the region. In 2022 he
                  founded Sigma School to take complete beginners and turn them
                  into working software developers in months, not years.
                </p>

                <p className="pull">
                  &ldquo;Teaching thousands of people to build with code — and
                  now AI — showed me the same thing over and over: the
                  bottleneck is rarely talent. It&apos;s the way the work is
                  done.&rdquo;
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
        {/* SOCIAL PROOF — the Sigma School track record */}
        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">The track record</span>
              <h2>
                Proof, not promises — from{" "}
                <span className="grad-text">Sigma School</span>.
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
              <span className="eyebrow">Success stories</span>
              <p>
                Career switchers — doctors, coaches, fresh grads — now shipping
                software in production.
              </p>
            </div>
            <SuccessStories />

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
