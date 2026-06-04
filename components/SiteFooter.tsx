import Star from "./Star";

const SEQUOIA_URL = "https://www.sequoiacap.com/article/services-the-new-software/";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <a className="brand" href="/">
              <Star /> Northstack
            </a>
            <p>
              We help established companies become AI-native — so the expertise
              you&apos;ve spent years building compounds instead of stalling.
            </p>
          </div>
          <div className="footer-links">
            <a href="/#why">Why now</a>
            <a href="/#approach">Approach</a>
            <a href="/#work">What we do</a>
            <a href="/#process">Process</a>
            <a href="/about">About</a>
            <a href="/#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Northstack. All rights reserved.
          </span>
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
  );
}
