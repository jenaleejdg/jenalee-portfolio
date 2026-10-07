import Link from "next/link";

const capabilities = [
  "SYSTEMS THINKING",
  "PRODUCT DESIGN",
  "DATA & ANALYTICS",
  "AUTOMATION",
];

export default function Home() {
  return (
    <main id="top">
      {/* =====================================================
          HEADER
      ====================================================== */}
      <header className="site-header">
        <a
          className="wordmark"
          href="#top"
          aria-label="Jenalee De Guzman home"
        >
          JDG<span>.</span>
        </a>

        <nav>
  <a href="#work">Work</a>
  <a href="#services">Services</a>
  <a href="#about">About</a>

  <a
    href="/Jenalee-De-Guzman-Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    Résumé
  </a>
</nav>

        <a className="availability" href="#contact">
          <span className="availability-dot" />
          Available for select projects
        </a>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="hero">
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

      {/* =====================================================
          HOW I THINK
      ====================================================== */}
      <section className="positioning">
        <p className="eyebrow mono">HOW I THINK</p>

        <p className="statement">
          I don&apos;t start with the software.
          <br />
          <em>I start with the work.</em>
        </p>

        <div className="thinking-framework">
          <div className="thinking-step">
            <span className="mono">
              <b>01</b> / UNDERSTAND
            </span>

            <p>
              Who does the work? Where does it break? What gets repeated,
              delayed, or lost?
            </p>
          </div>

          <div className="thinking-step">
            <span className="mono">
              <b>02</b> / STRUCTURE
            </span>

            <p>
              What needs to be visible, connected, standardized, or automated?
            </p>
          </div>

          <div className="thinking-step">
            <span className="mono">
              <b>03</b> / BUILD
            </span>

            <p>
              Design the simplest system that solves the actual problem —
              then test it against the work.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SELECTED WORK INTRO
      ====================================================== */}
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

      {/* =====================================================
          PROJECT 01 — NORTHSTAR
      ====================================================== */}
      <section className="project-preview">
        <div className="project-preview-top mono">
          <span>01 / 02</span>
          <span>INTERNAL PRODUCT · SYSTEMS DESIGN</span>
        </div>

        <div className="project-preview-grid">
          <div className="project-preview-copy">
            <p className="eyebrow mono">FEATURED CASE STUDY · 01</p>

            <h3>
              Northstar
              <br />
              Workspace
            </h3>

            <p>
              One operational workspace for people, performance, submissions,
              quality, and the work that happens between them.
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

        {/* ===================================================
            PROJECT 02 — FEEDBACK LOOP
        ==================================================== */}
        <div className="project-preview-top project-preview-secondary-top mono">
          <span>02 / 02</span>
          <span>WORKFLOW SYSTEM · PROCESS AUTOMATION</span>
        </div>

        <div className="project-preview-grid project-preview-secondary">
          <div className="project-preview-copy">
            <p className="eyebrow mono">CASE STUDY · 02</p>

            <h3>
              Feedback
              <br />
              Loop
            </h3>

            <p>
              A closed-loop QA workflow that turns audits, rebuttals,
              notifications, and scoring into a trackable path to resolution.
            </p>

            <div className="project-tags">
              <span>Workflow Design</span>
              <span>Process Automation</span>
              <span>Product Design</span>
              <span>Notifications</span>
            </div>

            <Link href="/work/feedback-loop" className="case-study-link">
              Explore the case study <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="services-section" id="services">
        <div className="services-heading">
          <div>
            <p className="eyebrow mono">WHAT I DO</p>

            <h2>
              I work where operations
              <br />
              <em>meet technology.</em>
            </h2>
          </div>

          <p className="services-intro">
            I help turn complicated workflows, scattered information, and
            manual processes into systems that are easier to use, understand,
            and act on.
          </p>
        </div>

        <div className="services-list">
          <article>
            <span className="mono">01</span>

            <h3>
              Internal tools &
              <br />
              operational products
            </h3>

            <p>
              Designing systems around how teams actually work — from workflow
              architecture and requirements to interfaces, application logic,
              and implementation.
            </p>
          </article>

          <article>
            <span className="mono">02</span>

            <h3>
              Data &
              <br />
              decision systems
            </h3>

            <p>
              Turning operational data into useful measures, reporting,
              dashboards, and decision-support tools that make the state of
              the work easier to understand.
            </p>
          </article>

          <article>
            <span className="mono">03</span>

            <h3>
              Workflow automation &
              <br />
              process redesign
            </h3>

            <p>
              Finding the repetitive work, fragile handoffs, and manual
              coordination inside a process — then designing a better system
              around them.
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}
      <section className="about-section" id="about">
        <div className="about-label">
          <p className="eyebrow mono">ABOUT / JENALEE DE GUZMAN</p>
        </div>

        <div className="about-statement">
          <h2>
            I learned the workflow
            <br />
            before I learned to
            <br />
            <em>build the software.</em>
          </h2>
        </div>

        <div className="about-details">
          <div className="about-copy">
            <p>
              My background started in healthcare and clinical operations,
              where the quality of a system has a very real effect on the
              people doing the work.
            </p>

            <p>
              That perspective still shapes how I build today. I start by
              understanding the workflow, the decisions, the edge cases, and
              the people involved — then work outward into product design,
              data, automation, and code.
            </p>
          </div>

          <div className="about-capabilities">
            <span className="mono">WORKING ACROSS</span>

            <p>Product & systems design</p>
            <p>Healthcare operations</p>
            <p>Workflow architecture</p>
            <p>Data & analytics</p>
            <p>Automation</p>
            <p>Application development</p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}
      <section className="contact-section" id="contact">
        <div className="contact-top">
          <p className="eyebrow mono">LET&apos;S WORK TOGETHER</p>

          <span className="contact-status mono">
            <i />
            AVAILABLE FOR SELECT PROJECTS
          </span>
        </div>

        <div className="contact-main">
          <h2>
            Have a complicated
            <br />
            workflow?
            <br />
            <em>Let&apos;s make it usable.</em>
          </h2>

          <div className="contact-copy">
            <p>
              I&apos;m interested in work involving internal products,
              healthcare technology, operational systems, analytics, and
              workflow automation.
            </p>

            <div className="contact-links">
  <a
    href="mailto:jenalee.jdg@gmail.com"
    className="contact-email"
  >
    Start a conversation <span>↗</span>
  </a>

  <a
    href="/Jenalee-De-Guzman-Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-resume"
  >
    View résumé <span>↗</span>
  </a>
</div>
          </div>
        </div>

        {/* ===================================================
            FOOTER
        ==================================================== */}
        <footer className="site-footer">
          <span className="mono">JENALEE DE GUZMAN © 2026</span>

          <span className="mono">
            SYSTEMS · DATA · AUTOMATION · PRODUCT
          </span>

          <a href="#top" className="mono">
            BACK TO TOP ↑
          </a>
        </footer>
      </section>
    </main>
  );
}