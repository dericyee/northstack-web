import Star from "./Star";
import { TikTokIcon, YouTubeIcon, InstagramIcon } from "./SocialIcons";

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
            Northstack is founded by Deric Yee — a self-taught builder who has
            spent years shipping products and helping thousands of people build
            with code and AI. His work keeps circling one question: as AI rewrites
            how work gets done, what does it mean for our careers, our money, and
            our future?
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
            <div className="nx-founder-socials">
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

          <div className="nx-founder-prose">
            <p>
              Deric&apos;s real obsession isn&apos;t education — it&apos;s the
              future of work. He believes the biggest shift of our lifetime is
              already underway: AI is quietly redrawing which skills pay, which
              jobs last, and how ordinary people build wealth. The people who
              understand that early will compound; the people who wait will spend
              the next decade catching up.
            </p>
            <p>
              <strong>Sigmaschool</strong> was his first bet on that thesis — a
              school and a set of programmes built to take complete beginners and
              turn them into people who can actually build with code and AI. Not
              for the credential, but because being AI-native is fast becoming the
              difference between a career that grows and one that gets automated
              around.
            </p>
            <blockquote className="nx-founder-quote">
              <Star size={16} />
              <span>
                &ldquo;AI is going to reshape our careers, our money, and our
                future. I&apos;d rather help people get ahead of it than watch it
                happen to them. That&apos;s the bet.&rdquo;
              </span>
            </blockquote>
            <p>
              <strong>Northstack is the next bet.</strong> Same conviction, aimed
              at companies instead of individuals — bringing AI-native tooling
              inside established teams so the expertise they&apos;ve spent years
              building compounds with AI instead of being left behind by it.
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
