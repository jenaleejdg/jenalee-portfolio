import NorthstarPreview from "@/components/NorthstarPreview";
import Link from "next/link";

export default function NorthstarCaseStudy() {
  return (
    <main className="northstar-case-study">
      <header className="case-nav">
        <Link href="/" className="case-back">
          ← Back to work
        </Link>

        <span>Northstar / Case Study</span>

        <span>01 / 02</span>
      </header>

      <section className="case-hero">
        <div className="case-eyebrow">
          <span>INTERNAL PRODUCT</span>
          <span>SYSTEMS DESIGN</span>
          <span>2025–2026</span>
        </div>

        <h1>
          The work wasn&apos;t broken.
          <br />
          <em>The way it was managed was.</em>
        </h1>

        <div className="case-intro-grid">
          <p className="case-intro">
            I replaced a fragmented spreadsheet-based operating model with a
            centralized system for tracking work, performance, resources, and
            operational decisions.
          </p>

          <div className="case-meta">
            <div>
              <span>MY ROLE</span>
              <p>End-to-end product &amp; systems design</p>
            </div>

            <div>
              <span>BUILT ACROSS</span>
              <p>Workflow, UI/UX, application, database &amp; automation</p>
            </div>

            <div>
              <span>USED BY</span>
              <p>
                Operations, research, clinical, writing &amp; management teams
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-before">
        <div className="case-section-number">01 / THE OPERATING PROBLEM</div>

        <div className="case-before-heading">
          <h2>
            The operation ran
            <br />
            on spreadsheets.
            <br />
            <em>Plural.</em>
          </h2>

          <div className="case-before-copy">
            <p>
              Daily operations were distributed across multiple Excel trackers.
              Start-of-day counts lived in one place. End-of-day numbers in
              another. Projects, PTO, performance, and reporting introduced
              still more files and tables.
            </p>

            <p>
              Keeping the operation current meant continuously updating,
              finding, reconciling, and calculating information by hand.
            </p>
          </div>
        </div>

        <div className="spreadsheet-system">
          <div className="sheet-node sheet-one">
            <span>01</span>
            <strong>START OF DAY</strong>
            <small>Tracker.xlsx</small>
          </div>

          <div className="sheet-node sheet-two">
            <span>02</span>
            <strong>PROJECTS</strong>
            <small>Tracker.xlsx</small>
          </div>

          <div className="sheet-node sheet-three">
            <span>03</span>
            <strong>PERFORMANCE</strong>
            <small>Tracker.xlsx</small>
          </div>

          <div className="sheet-node sheet-four">
            <span>04</span>
            <strong>PTO / PEOPLE</strong>
            <small>Tracker.xlsx</small>
          </div>

          <div className="sheet-node sheet-five">
            <span>05</span>
            <strong>REPORTING</strong>
            <small>Tracker.xlsx</small>
          </div>

          <div className="sheet-center">
            <span>THE TEAM</span>
            <strong>Update.</strong>
            <strong>Reconcile.</strong>
            <strong>Calculate.</strong>
            <strong>Repeat.</strong>
          </div>
        </div>

        <div className="case-friction">
          <div>
            <span>01</span>
            <p>
              Information existed, but not necessarily where decisions happened.
            </p>
          </div>

          <div>
            <span>02</span>
            <p>
              Reporting required finding the correct workbook, table, and
              calculation.
            </p>
          </div>

          <div>
            <span>03</span>
            <p>
              A single accidental spreadsheet change could disrupt dependent
              formulas.
            </p>
          </div>

          <div>
            <span>04</span>
            <p>
              Time that should have gone into the work was spent maintaining
              the tracking around it.
            </p>
          </div>
        </div>
      </section>
      <section className="case-system">
  <div className="case-section-number">02 / THE SYSTEM</div>

  <div className="system-intro">
    <h2>
      I didn&apos;t build
      <br />
      another tracker.
      <br />
      <em>I replaced the tracking layer.</em>
    </h2>

    <div className="system-intro-copy">
      <p>
        Instead of asking people to maintain a collection of disconnected
        spreadsheets, I designed one operational workspace around the work
        itself.
      </p>

      <p>
        Daily activity, project status, performance, quality, resources, and
        reporting could now live within the same system — with calculations
        and notifications handled by the application rather than maintained
        manually across files.
      </p>
    </div>
  </div>

  <div className="system-shift">
    <div className="system-shift-label">
      <span>THE SHIFT</span>
      <p>From maintaining information to using it.</p>
    </div>

    <div className="system-shift-grid">
      <div className="shift-row">
        <span className="shift-number">01</span>

        <div>
          <small>BEFORE</small>
          <p>Multiple operational trackers</p>
        </div>

        <span className="shift-arrow">→</span>

        <div>
          <small>AFTER</small>
          <p>One centralized workspace</p>
        </div>
      </div>

      <div className="shift-row">
        <span className="shift-number">02</span>

        <div>
          <small>BEFORE</small>
          <p>Manual performance calculations</p>
        </div>

        <span className="shift-arrow">→</span>

        <div>
          <small>AFTER</small>
          <p>System-calculated performance data</p>
        </div>
      </div>

      <div className="shift-row">
        <span className="shift-number">03</span>

        <div>
          <small>BEFORE</small>
          <p>Numbers pulled from individual tables</p>
        </div>

        <span className="shift-arrow">→</span>

        <div>
          <small>AFTER</small>
          <p>Dashboards fed by operational data</p>
        </div>
      </div>

      <div className="shift-row">
        <span className="shift-number">04</span>

        <div>
          <small>BEFORE</small>
          <p>Updates checked manually</p>
        </div>

        <span className="shift-arrow">→</span>

        <div>
          <small>AFTER</small>
          <p>Automated notifications</p>
        </div>
      </div>

      <div className="shift-row">
        <span className="shift-number">05</span>

        <div>
          <small>BEFORE</small>
          <p>Resources spread across locations</p>
        </div>

        <span className="shift-arrow">→</span>

        <div>
          <small>AFTER</small>
          <p>Relevant resources in one environment</p>
        </div>
      </div>
    </div>
  </div>

  <div className="system-architecture">
    <div className="architecture-heading">
      <span>SYSTEM MODEL</span>

      <h3>
        One source.
        <br />
        Multiple views of the work.
      </h3>
    </div>

    <div className="architecture-flow">
      <div className="architecture-source">
        <span>01 / INPUT</span>
        <strong>Operational data</strong>
        <p>
          Work activity, project movement, staffing, quality, and operational events.
        </p>
      </div>

      <div className="architecture-connector">
        <span />
      </div>

      <div className="architecture-core">
        <span>02 / SYSTEM</span>
        <strong>N</strong>
        <p>NORTHSTAR</p>
      </div>

      <div className="architecture-connector">
        <span />
      </div>

      <div className="architecture-output">
        <span>03 / OUTPUT</span>

        <div className="output-list">
          <p>Dashboards</p>
          <p>Performance</p>
          <p>Notifications</p>
          <p>Reporting</p>
          <p>Resources</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="case-product">
  <div className="case-product-intro">
    <div className="case-product-label mono">
      03 / THE PRODUCT
    </div>

    <div className="case-product-heading">
      <h2>
  Built around the decisions
  <br />
  people actually needed
  <br />
  <em>to make.</em>
</h2>

      <div className="case-product-copy">
        <p>
          Northstar brings work activity, performance, quality,
          resources, and operational signals into one workspace.
        </p>

        <p>
          Instead of maintaining the information across separate
          trackers, the team can see what is moving, what needs
          attention, and where action is required.
        </p>
      </div>
    </div>
  </div>

  <div className="case-product-preview">
    <div className="case-product-preview-header">
      <span className="mono">N / 01</span>

      <span className="case-product-interaction mono">
        <i />
        INTERACTIVE PREVIEW — TRY IT
      </span>

      <span className="mono">
        SANITIZED PORTFOLIO RECREATION
      </span>
    </div>

    <div className="case-product-preview-frame">
      <NorthstarPreview />
    </div>
  </div>
</section>
<section className="case-decisions">
  <div className="case-decisions-intro">
    <span className="case-section-label">
      04 / PRODUCT DECISIONS
    </span>

    <h2>
      The interface wasn't
      <br />
      organized around
      <br />
      <em>the data model.</em>
    </h2>

    <p>
      It was organized around the questions people needed
      answered while the work was happening.
    </p>
  </div>

  <div className="decision-list">
    <article className="decision-item">
      <span className="decision-number">01</span>

      <div>
        <span className="decision-label">VISIBILITY</span>
        <h3>See the operation.</h3>
      </div>

      <p>
        Work movement, staffing, quality, and performance
        surface together instead of being reconstructed
        across separate trackers.
      </p>
    </article>

    <article className="decision-item">
      <span className="decision-number">02</span>

      <div>
        <span className="decision-label">ATTENTION</span>
        <h3>Know what needs action.</h3>
      </div>

      <p>
        Exceptions, deadlines, and changes are surfaced
        directly so teams can act without hunting through
        files or manually assembling reports.
      </p>
    </article>

    <article className="decision-item">
      <span className="decision-number">03</span>

      <div>
        <span className="decision-label">SHARED CONTEXT</span>
        <h3>Work from the same source.</h3>
      </div>

      <p>
        Abstractors, researchers, writers, consultants,
        and managers use different views of the same
        underlying operational system.
      </p>
    </article>
  </div>
</section>
<section className="case-automation">
  <div className="automation-intro">
    <span className="case-section-label">
      05 / THE AUTOMATION LAYER
    </span>

    <h2>
      The system didn&apos;t just
      <br />
      hold the work.
      <br />
      <em>It did some of it.</em>
    </h2>

    <p>
      Routine calculations, updates, and operational signals
      moved into the system so people could spend less time
      maintaining trackers and more time acting on the work.
    </p>
  </div>

  <div className="automation-flow">
    <div className="automation-step">
      <span>01 / INPUT</span>
      <strong>Work happens.</strong>
      <p>
        Activity, project movement, staffing, quality,
        and operational events enter the system.
      </p>
    </div>

    <span className="automation-arrow">→</span>

    <div className="automation-step">
      <span>02 / PROCESS</span>
      <strong>Northstar calculates.</strong>
      <p>
        Performance and operational measures are calculated
        from the underlying data.
      </p>
    </div>

    <span className="automation-arrow">→</span>

    <div className="automation-step">
      <span>03 / SIGNAL</span>
      <strong>The system surfaces change.</strong>
      <p>
        Dashboards update and relevant exceptions or changes
        become visible without rebuilding reports.
      </p>
    </div>

    <span className="automation-arrow">→</span>

    <div className="automation-step">
      <span>04 / ACTION</span>
      <strong>People act.</strong>
      <p>
        Teams respond to what needs attention instead of
        spending that time finding and reconciling information.
      </p>
    </div>
  </div>
</section>
<section className="impact-section">
  <div className="impact-inner">
    <span className="impact-kicker mono">06 / WHAT CHANGED</span>

    <div className="impact-hero">
      <h2>
        The system became part
        <br />
        of how the team
        <br />
        <em>worked.</em>
      </h2>

      <p>
        The biggest change wasn&apos;t another dashboard or another place
        to enter information. It was removing operational maintenance
        from the center of the team&apos;s day.
      </p>
    </div>

    <div className="impact-points">
      <article>
        <span className="mono">01 / LESS MAINTENANCE</span>
        <h3>Maintenance moved into the system.</h3>
        <p>
          Updating, calculations, and operational signals no longer depended
          on people continuously tending separate spreadsheets.
        </p>
      </article>

      <article>
        <span className="mono">02 / MORE VISIBILITY</span>
        <h3>One operational picture.</h3>
        <p>
          Abstractors, researchers, writers, consultants, and managers could
          work from the same source without assembling the picture manually
          first.
        </p>
      </article>

      <article>
        <span className="mono">03 / EARLIER ACTION</span>
        <h3>Information could lead somewhere.</h3>
        <p>
          What was moving, what needed attention, and what had changed became
          visible without another round of finding and reconciling information.
        </p>
      </article>
    </div>

    <div className="ownership-block">
      <span className="ownership-kicker mono">MY ROLE</span>

      <h2>
        I wasn&apos;t handed an
        <br />
        interface to design.
        <br />
        <em>I designed the system behind it.</em>
      </h2>

      <div className="ownership-disciplines">
        <span>Product Strategy</span>
        <span>Workflow Architecture</span>
        <span>UI / UX</span>
        <span>Application Development</span>
        <span>Database</span>
        <span>Automation</span>
      </div>
    </div>
  </div>
</section>
<footer className="case-study-footer">
  <a href="/">
    <span className="mono">BACK TO SELECTED WORK</span>
    <strong>All work ↑</strong>
  </a>
</footer>
    </main>
  );
}