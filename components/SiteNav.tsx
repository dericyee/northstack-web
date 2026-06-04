import Star from "./Star";

export default function SiteNav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="/">
          <Star /> Northstack
        </a>
        <nav className="nav-links">
          <a href="/#why">Why now</a>
          <a href="/#approach">Approach</a>
          <a href="/#work">What we do</a>
          <a href="/#process">Process</a>
          <a href="/about">About</a>
        </nav>
        <div className="nav-cta">
          <a className="btn btn-primary" href="/#contact">
            Let&apos;s chat
          </a>
        </div>
      </div>
    </header>
  );
}
