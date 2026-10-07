import Link from "next/link";

const workflowStates = [
  {
    number: "01",
    label: "AUDIT",
    title: "QA reviews the chart.",
    body: "The audit begins with the QA reviewing the abstracted chart and recording the result in the system.",
  },
  {
    number: "02",
    label: "FEEDBACK",
    title: "The result reaches the abstractor.",
    body: "The abstractor is notified when an audit is ready instead of relying on a tag buried among spreadsheet and email notifications.",
  },
  {
    number: "03",
    label: "DECISION",
    title: "Accept or rebut.",
    body: "The abstractor can accept the result and close the loop, or rebut an identified error and return it to QA.",
  },
  {
    number: "04",
    label: "RESOLUTION",
    title: "The conversation stays attached.",
    body: "QA and the abstractor can exchange responses while the audit remains visibly in rebuttal until one side accepts the outcome.",
  },
  {
    number: "05",
    label: "CLOSURE",
    title: "The score becomes final.",
    body: "Once the outcome is accepted, the loop closes and the final score is calculated and recorded.",
  },
];

export default function FeedbackLoopPage() {
  return (
    <main className="feedback-case">
      <section className="feedback-hero">
        <div className="feedback-topline">
          <Link href="/" className="feedback-back">
            ← BACK TO WORK
          </Link>

          <span>02 / 02</span>
        </div>

        <div className="feedback-hero-grid">
          <div>
            <span className="feedback-kicker">
              WORKFLOW SYSTEM · PROCESS AUTOMATION
            </span>

            <h1>
              Finding the error
              <br />
              was only half
              <br />
              the work.
              <br />
              <em>Closing the loop was the other half.</em>
            </h1>
          </div>

          <div className="feedback-hero-copy">
            <p>
              QA feedback moved between auditing, notification, rebuttal,
              review, and acceptance — but the spreadsheet holding the score
              couldn&apos;t reliably show who needed to act next.
            </p>

            <p>
              I designed a workflow that carries each audit from review to
              resolution, keeping ownership, communication, notifications,
              and final scoring inside one system.
            </p>

            <div className="feedback-meta">
              <span>ROLE</span>
              <strong>Product · UX · Automation · Development</strong>

              <span>USERS</span>
              <strong>Quality Analysts · Data Abstractors</strong>

              <span>TYPE</span>
              <strong>Internal Workflow Product</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="feedback-problem">
        <span className="feedback-section-label">01 / THE HANDOFF PROBLEM</span>

        <div className="feedback-problem-heading">
          <h2>
            Feedback existed.
            <br />
            <em>Follow-through didn&apos;t have a system.</em>
          </h2>

          <p>
            QAs were also abstractors. Time spent filling scorecards,
maintaining formulas, checking responses, and tracking the
status of audited charts was time taken away from the work itself.
          </p>
        </div>

        <div className="feedback-lost-state">
          <div className="lost-state-path">
            <span>AUDIT CREATED</span>
            <i>→</i>
            <span>ERROR LOGGED</span>
            <i>→</i>
            <span>ABSTRACTOR TAGGED</span>
            <i>→</i>
            <strong>?</strong>
          </div>

          <div className="lost-state-questions">
            <span>Did they see it?</span>
            <span>Was it accepted?</span>
            <span>Was it rebutted?</span>
            <span>Is QA reviewing it?</span>
            <span>Who needs to respond?</span>
            <span>Is the score final?</span>
          </div>
        </div>
      </section>

      <section className="feedback-system">
        <span className="feedback-section-label">02 / THE SYSTEM</span>

        <div className="feedback-system-intro">
          <h2>
            Every audit needed
            <br />
            a visible state.
            <br />
            <em>And a clear owner.</em>
          </h2>

          <p>
            Instead of treating feedback as a comment attached to a score,
            the product treats each audit as a workflow that stays open until
            a final outcome is reached.
          </p>
        </div>

        <div className="feedback-state-line">
          <span>AUDIT</span>
          <i>→</i>
          <span>REVIEW</span>
          <i>→</i>
          <span>ACCEPT / REBUT</span>
          <i>→</i>
          <span>DISCUSS</span>
          <i>→</i>
          <span>RESOLVE</span>
          <i>→</i>
          <span>SCORE</span>
        </div>
      </section>

      <section className="feedback-branch">
        <span className="feedback-section-label">03 / THE DECISION</span>

        <div className="feedback-branch-heading">
          <h2>
            One audit.
            <br />
            <em>Two paths to closure.</em>
          </h2>

          <p>
            The workflow branches only when it needs to. Straightforward
            audits close quickly. Disputed feedback stays active until QA and
            the abstractor reach a resolution.
          </p>
        </div>

        <div className="feedback-paths">
          <article>
            <span className="path-label">PATH A / ACCEPT</span>
            <h3>The score stands.</h3>

            <div className="path-flow">
              <span>QA submits audit</span>
              <i>↓</i>
              <span>Abstractor reviews</span>
              <i>↓</i>
              <span>Score accepted</span>
              <i>↓</i>
              <strong>LOOP CLOSED</strong>
            </div>

            <p>
              If no error is found — or the abstractor agrees with the QA
              result — the score is accepted, calculated, and recorded.
            </p>
          </article>

          <article>
            <span className="path-label">PATH B / REBUT</span>
            <h3>The score is challenged.</h3>

            <div className="path-flow">
              <span>Abstractor rebuts</span>
              <i>↓</i>
              <span>QA is notified</span>
              <i>↓</i>
              <span>Discussion / review</span>
              <i>↓</i>
              <strong>RESOLUTION</strong>
            </div>

            <p>
              QA can accept the rebuttal when the abstractor is correct, or
              the abstractor can accept the original finding. Either outcome
              closes the loop and finalizes the score.
            </p>
          </article>
        </div>
      </section>

      <section className="feedback-workflow">
        <span className="feedback-section-label">04 / THE WORKFLOW</span>

        <div className="feedback-workflow-intro">
          <h2>
            The system always knows
            <br />
            <em>what happens next.</em>
          </h2>

          <p>
            Each state has a purpose: make the current status visible, make
            ownership obvious, and move the audit toward closure.
          </p>
        </div>

        <div className="feedback-workflow-list">
          {workflowStates.map((state) => (
            <article key={state.number}>
              <span className="workflow-number">{state.number}</span>

              <div>
                <span className="workflow-label">{state.label}</span>
                <h3>{state.title}</h3>
              </div>

              <p>{state.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feedback-automation">
        <span className="feedback-section-label">05 / WHAT THE SYSTEM TOOK OVER</span>

        <div className="feedback-automation-heading">
          <h2>
            Less chasing.
            <br />
            <em>More resolving.</em>
          </h2>

          <p>
            Automation supports the handoff without replacing the judgment
            required from QA and abstractors.
          </p>
        </div>

        <div className="feedback-automation-grid">
          <article>
            <span>01</span>
            <h3>Notifications</h3>
            <p>
              The next person in the workflow is notified when their action is
              required.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Status tracking</h3>
            <p>
              Audits remain visibly associated with their current stage instead
              of disappearing into comments and email threads.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Rebuttal history</h3>
            <p>
              Responses stay connected to the audit while QA and the
              abstractor work toward an accepted outcome.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Final scoring</h3>
            <p>
              Once the loop closes, the accepted outcome becomes the basis of
              the recorded score.
            </p>
          </article>
        </div>
      </section>

      <section className="feedback-outcome">
        <span className="feedback-section-label">06 / WHAT CHANGED</span>

        <div className="feedback-outcome-grid">
          <h2>
            Feedback became
            <br />
            a process you could
            <br />
            <em>actually follow.</em>
          </h2>

          <div>
            <p>
              The product turned QA feedback from a collection of spreadsheet
              cells, tags, and buried notifications into a workflow with a
              visible beginning, current state, owner, and end.
            </p>

            <p>
              QA could focus on reviewing work instead of continuously
              maintaining the mechanics of the feedback process, while
              abstractors had a clearer path to respond, rebut, and resolve
              findings.
            </p>
          </div>
        </div>

        <div className="feedback-role">
          <span>MY ROLE</span>

          <h3>
            I designed the workflow,
            <br />
            not just the screens
            <br />
            <em>around it.</em>
          </h3>

          <div className="feedback-role-tags">
            <span>Workflow Architecture</span>
            <span>Product Design</span>
            <span>UI / UX</span>
            <span>Application Logic</span>
            <span>Notifications</span>
            <span>Automation</span>
          </div>
        </div>
      </section>

      <footer className="feedback-footer">
        <Link href="/">
          <span>BACK TO SELECTED WORK</span>
          <strong>All work ↑</strong>
        </Link>
      </footer>
    </main>
  );
}