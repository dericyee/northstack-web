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
import { TikTokIcon, YouTubeIcon, InstagramIcon } from "@/components/SocialIcons";

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
                <div className="founder-socials">
                  <a
                    href="https://www.tiktok.com/@dericjyyee"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Deric Yee on TikTok"
                  >
                    <TikTokIcon />
                  </a>
                  <a
                    href="https://www.youtube.com/@dericyjy"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Deric Yee on YouTube"
                  >
                    <YouTubeIcon />
                  </a>
                  <a
                    href="https://www.instagram.com/dericjyyee/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Deric Yee on Instagram"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </aside>

              <div className="prose reveal">
                <p>
                  Northstack is founded by <strong>Deric Yee</strong>. The thread
                  running through everything he builds isn&apos;t education —
                  it&apos;s the <strong>future of work</strong>, and a single
                  conviction: AI is about to reshape our careers, our money, and
                  our future faster than most people are ready for.
                </p>
                <p>
                  He&apos;s spent years watching that shift up close. The skills
                  that pay are changing. Whole categories of work are being
                  automated, while a small group of people who know how to build
                  with AI pull further and further ahead. The gap isn&apos;t about
                  intelligence or effort — it&apos;s about who adapts early and who
                  gets left explaining why they didn&apos;t.
                </p>
                <p>
                  <strong>Sigmaschool</strong> was his first bet on that future —
                  a school and a set of programmes built to take complete
                  beginners and make them genuinely AI-native: able to{" "}
                  <strong>build with code and AI</strong>, ship{" "}
                  <strong>real projects</strong>, and earn a place in an economy
                  that increasingly rewards exactly that. Hundreds of people have
                  changed careers through it. The standard hasn&apos;t moved — only
                  the curriculum has, because AI keeps moving the floor.
                </p>

                <p className="pull">
                  &ldquo;AI is going to reshape our careers, our money, and our
                  future. I&apos;d rather help people get ahead of it than watch it
                  happen to them. That&apos;s the bet.&rdquo;
                </p>

                <h3>Why Northstack</h3>
                <p>
                  Northstack is the next bet — the same conviction, aimed at
                  companies instead of individuals. The pattern that holds back a
                  person holds back an entire organisation: skilled people doing
                  work that AI could now carry, while competitors who adopt it
                  early quietly pull away.
                </p>
                <p>
                  So we bring that frontier inside established companies. We
                  don&apos;t claim to know your industry better than you —{" "}
                  <strong>you&apos;re the expert</strong>. We bring the AI-native
                  tooling, the building experience, and the teaching instinct to
                  make your team dramatically faster at what they already do best
                  — so the work, and the people doing it, are on the right side of
                  this shift.
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

                <h3>Where the name came from</h3>
                <p>
                  <strong>Northstack</strong> is two ideas in one word. The{" "}
                  <strong>north</strong> is the north star — a fixed point you
                  steer by, the direction that&apos;s always up. The{" "}
                  <strong>stack</strong> is the tech stack: the tools, systems
                  and layers of capability you build to get there.
                </p>
                <p>
                  And a stack is never finished. The whole point is to keep
                  improving it — swapping in better tools, raising the ceiling,
                  and moving with where the industry is going rather than where
                  it was. <strong>Especially with AI</strong>, where the frontier
                  shifts every few weeks: the teams that keep their stack current
                  pull away, and the ones that freeze it fall behind. So we treat
                  &ldquo;done&rdquo; as a moving target — always climbing, always
                  improving, always stacking the next layer on top.
                </p>
                <p className="pull">
                  &ldquo;The only direction worth building in is up. Northstack
                  is the climb — and a tech stack that keeps improving with the
                  industry, especially AI.&rdquo;
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
                <a
                  className="grad-text"
                  href="https://sigmaschool.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sigmaschool
                </a>
                .
              </h2>
              <p>
                The same people building Northstack already ran one of Southeast
                Asia&apos;s leading AI-native software development programmes.
                Here&apos;s what that looks like in outcomes — careers changed,
                partners hiring, and the press paying attention.
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
