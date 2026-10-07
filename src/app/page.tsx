import Link from "next/link";
const capabilities = [
  "SYSTEMS THINKING",
  "PRODUCT DESIGN",
  "DATA & ANALYTICS",
  "AUTOMATION",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jenalee De Guzman home">
          JDG<span>.</span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </nav>

        <a className="availability" href="#contact">
          <span className="availability-dot" />
          Available for select projects
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker mono">
          SYSTEMS / DATA / AUTOMATION / PRODUCT
        </div>

        <h1>
          I turn operational
          <br />
          problems into systems
          <br />
          <em>people can actually use.</em>
        </h1>

        <div className="hero-bottom">
          <p>
            I work at the intersection of operations, healthcare, data, and
            technology — designing internal tools, analytics, automations, and
            digital products from the problem outward.
          </p>

          <a className="arrow-link" href="#work">
            Selected work <span>↘</span>
          </a>
        </div>

        <div className="hero-rule" />

        <div className="proof-strip mono">
          {capabilities.map((capability, index) => (
            <div className="proof-item" key={capability}>
              <span>{capability}</span>
              {index < capabilities.length - 1 && <i>×</i>}
            </div>
          ))}
        </div>
      </section>

      <section className="positioning">
        <p className="eyebrow mono">HOW I THINK</p>

        <p className="statement">
          I don&apos;t start with the software.
          <br />
          <em>I start with the work.</em>
        </p>

        <div className="thinking-framework">
  <div className="thinking-step">
    <span className="mono"><b>01</b> / UNDERSTAND</span>
    <p>
      Who does the work? Where does it break? What gets repeated,
      delayed, or lost?
    </p>
  </div>

  <div className="thinking-step">
    <span className="mono"><b>02</b> / STRUCTURE</span>
    <p>
      What needs to be visible, connected, standardized, or automated?
    </p>
  </div>

  <div className="thinking-step">
    <span className="mono"><b>03</b> / BUILD</span>
    <p>
      Design the simplest system that solves the actual problem —
      then test it against the work.
    </p>
  </div>
</div>
      </section>

      <section className="work-intro" id="work">
        <div>
          <p className="eyebrow mono">SELECTED WORK / 2025—2026</p>
          <h2>
            Proof,
            <br />
            not promises.
          </h2>
        </div>

        <p className="work-note">
          A selection of systems, analytics, and workflow products built around
          real operational problems. Public case studies use recreated
          interfaces and synthetic data to protect confidential information.
        </p>
      </section>

      <section className="project-preview">
  <div className="project-preview-top mono">
    <span>01 / 03</span>
    <span>INTERNAL PRODUCT · SYSTEMS DESIGN</span>
  </div>

  <div className="project-preview-grid">
    <div className="project-preview-copy">
      <p className="eyebrow mono">FEATURED CASE STUDY</p>

      <h3>Northstar<br />Workspace</h3>

      <p>
        One operational workspace for people, performance,
        submissions, quality, and the work that happens between them.
      </p>

      <div className="project-tags">
        <span>Product Strategy</span>
        <span>Workflow Architecture</span>
        <span>.NET</span>
        <span>SQL</span>
      </div>

      <Link href="/work/northstar" className="case-study-link">
  Explore the case study <span>↗</span>
</Link>
    </div>
  </div>
</section>
    </main>
  );
}