"use client";

import { useState } from "react";

type NorthstarView =
  | "overview"
  | "workstreams"
  | "people"
  | "quality"
  | "reports";

type WorkstreamFilter = "all" | "on-track" | "attention";

const workstreams = [
  {
    name: "Data Operations",
    code: "DO-14",
    owner: "M. Santos",
    initials: "MS",
    status: "On track",
    progress: 92,
    due: "Oct 08",
    items: 48,
  },
  {
    name: "Research Delivery",
    code: "RD-08",
    owner: "C. Rivera",
    initials: "CR",
    status: "On track",
    progress: 84,
    due: "Oct 11",
    items: 31,
  },
  {
    name: "Content Review",
    code: "CR-21",
    owner: "R. Cruz",
    initials: "RC",
    status: "Needs attention",
    progress: 68,
    due: "Oct 05",
    items: 17,
  },
  {
    name: "Partner Onboarding",
    code: "PO-06",
    owner: "J. Lim",
    initials: "JL",
    status: "On track",
    progress: 76,
    due: "Oct 16",
    items: 24,
  },
  {
    name: "Quality Calibration",
    code: "QC-12",
    owner: "A. Reyes",
    initials: "AR",
    status: "Needs attention",
    progress: 54,
    due: "Oct 04",
    items: 12,
  },
];

const activity = [
  {
    initials: "MS",
    person: "Mara S.",
    action: "completed a quality review",
    time: "12 min",
  },
  {
    initials: "CR",
    person: "Carlo R.",
    action: "submitted a deliverable",
    time: "38 min",
  },
  {
    initials: "JL",
    person: "Jamie L.",
    action: "updated a project milestone",
    time: "1 hr",
  },
];

const viewLabels: Record<NorthstarView, string> = {
  overview: "Overview",
  workstreams: "Workstreams",
  people: "People",
  quality: "Quality",
  reports: "Reports",
};

export default function NorthstarPreview() {
  const [activeView, setActiveView] =
    useState<NorthstarView>("overview");

  const [workstreamFilter, setWorkstreamFilter] =
    useState<WorkstreamFilter>("all");

  const filteredWorkstreams = workstreams.filter((workstream) => {
    if (workstreamFilter === "all") return true;

    if (workstreamFilter === "on-track") {
      return workstream.status === "On track";
    }

    return workstream.status === "Needs attention";
  });

  return (
    <div className="northstar-app">
      <aside className="northstar-sidebar">
        <div className="northstar-brand">
          <div className="northstar-mark">N</div>

          <div>
            <strong>Northstar</strong>
            <span>Operations</span>
          </div>
        </div>

        <nav
          className="northstar-nav"
          aria-label="Northstar preview navigation"
        >
          <button
            className={`northstar-nav-item ${
              activeView === "overview" ? "active" : ""
            }`}
            type="button"
            onClick={() => setActiveView("overview")}
          >
            <span className="nav-icon">⌂</span>
            Overview
          </button>

          <button
            className={`northstar-nav-item ${
              activeView === "workstreams" ? "active" : ""
            }`}
            type="button"
            onClick={() => setActiveView("workstreams")}
          >
            <span className="nav-icon">◇</span>
            Workstreams
            <span className="nav-count">12</span>
          </button>

          <button
            className={`northstar-nav-item ${
              activeView === "people" ? "active" : ""
            }`}
            type="button"
            onClick={() => setActiveView("people")}
          >
            <span className="nav-icon">◎</span>
            People
          </button>

          <button
            className={`northstar-nav-item ${
              activeView === "quality" ? "active" : ""
            }`}
            type="button"
            onClick={() => setActiveView("quality")}
          >
            <span className="nav-icon">✓</span>
            Quality
          </button>

          <button
            className={`northstar-nav-item ${
              activeView === "reports" ? "active" : ""
            }`}
            type="button"
            onClick={() => setActiveView("reports")}
          >
            <span className="nav-icon">⌁</span>
            Reports
          </button>
        </nav>

        <div className="northstar-sidebar-bottom">
          <span className="northstar-environment">
            LIVE WORKSPACE
          </span>

          <div className="northstar-user">
            <span>AJ</span>

            <div>
              <strong>Alex Jordan</strong>
              <small>Operations Lead</small>
            </div>
          </div>
        </div>
      </aside>

      <div className="northstar-main">
        <div className="northstar-topbar">
          <div className="northstar-breadcrumb">
            Workspace <span>/</span> {viewLabels[activeView]}
          </div>

          <div className="northstar-top-actions">
            <button type="button" aria-label="Search">
              ⌕
            </button>

            <button
              type="button"
              className="notification-button"
              aria-label="Notifications"
            >
              ♢
              <span />
            </button>

            <div className="northstar-avatar">AJ</div>
          </div>
        </div>

        {activeView === "overview" && (
          <OverviewView
            onViewWorkstreams={() =>
              setActiveView("workstreams")
            }
          />
        )}

        {activeView === "workstreams" && (
          <div className="northstar-content northstar-workstreams-view">
            <div className="workstreams-page-heading">
              <div>
                <p className="northstar-overline">
                  DELIVERY / ACTIVE WORK
                </p>

                <h4>Workstreams</h4>

                <p>
                  See what&apos;s moving, what&apos;s blocked,
                  and where attention is needed.
                </p>
              </div>

              <button
                className="northstar-primary-action"
                type="button"
              >
                + New workstream
              </button>
            </div>

            <div className="workstream-summary-strip">
              <div>
                <span>ACTIVE</span>
                <strong>12</strong>
              </div>

              <div>
                <span>ON TRACK</span>
                <strong>8</strong>
              </div>

              <div>
                <span>NEEDS ATTENTION</span>
                <strong className="summary-attention">4</strong>
              </div>

              <div>
                <span>DUE THIS WEEK</span>
                <strong>5</strong>
              </div>
            </div>

            <div className="workstream-toolbar">
              <div
                className="workstream-filters"
                aria-label="Filter workstreams"
              >
                <button
                  type="button"
                  className={
                    workstreamFilter === "all"
                      ? "filter-active"
                      : ""
                  }
                  onClick={() => setWorkstreamFilter("all")}
                >
                  All
                  <span>{workstreams.length}</span>
                </button>

                <button
                  type="button"
                  className={
                    workstreamFilter === "on-track"
                      ? "filter-active"
                      : ""
                  }
                  onClick={() =>
                    setWorkstreamFilter("on-track")
                  }
                >
                  On track
                  <span>
                    {
                      workstreams.filter(
                        (item) => item.status === "On track"
                      ).length
                    }
                  </span>
                </button>

                <button
                  type="button"
                  className={
                    workstreamFilter === "attention"
                      ? "filter-active"
                      : ""
                  }
                  onClick={() =>
                    setWorkstreamFilter("attention")
                  }
                >
                  Needs attention
                  <span>
                    {
                      workstreams.filter(
                        (item) =>
                          item.status === "Needs attention"
                      ).length
                    }
                  </span>
                </button>
              </div>

              <div className="workstream-tools">
                <button type="button">⇅ Sort</button>
                <button type="button">⌕ Search</button>
              </div>
            </div>

            <section className="northstar-panel workstreams-directory">
              <div className="directory-header directory-grid">
                <span>WORKSTREAM</span>
                <span>OWNER</span>
                <span>STATUS</span>
                <span>DUE</span>
                <span>PROGRESS</span>
                <span />
              </div>

              {filteredWorkstreams.map((workstream) => (
                <button
                  type="button"
                  className="directory-row directory-grid"
                  key={workstream.code}
                >
                  <div className="directory-name">
                    <span className="directory-code">
                      {workstream.code}
                    </span>

                    <div>
                      <strong>{workstream.name}</strong>
                      <small>
                        {workstream.items} active items
                      </small>
                    </div>
                  </div>

                  <div className="directory-owner">
                    <span>{workstream.initials}</span>
                    {workstream.owner}
                  </div>

                  <span
                    className={
                      workstream.status === "On track"
                        ? "status-pill on-track"
                        : "status-pill attention"
                    }
                  >
                    {workstream.status}
                  </span>

                  <span className="directory-due">
                    {workstream.due}
                  </span>

                  <div className="directory-progress">
                    <div className="progress-track">
                      <span
                        style={{
                          width: `${workstream.progress}%`,
                        }}
                      />
                    </div>

                    <small>{workstream.progress}%</small>
                  </div>

                  <span className="directory-arrow">↗</span>
                </button>
              ))}
            </section>

            <div className="workstreams-footnote">
              <span>
                Showing {filteredWorkstreams.length} of{" "}
                {workstreams.length} preview workstreams
              </span>

              <span>
                Synthetic data / portfolio recreation
              </span>
            </div>
          </div>
        )}

        {(activeView === "people" ||
          activeView === "quality" ||
          activeView === "reports") && (
          <div className="northstar-content northstar-placeholder-view">
            <span className="northstar-overline">
              {viewLabels[activeView].toUpperCase()}
            </span>

            <h4>{viewLabels[activeView]}</h4>

            <p>
              This workspace view is part of the interactive
              Northstar preview.
            </p>

            <button
              type="button"
              onClick={() => setActiveView("overview")}
            >
              ← Back to overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function OverviewView({
  onViewWorkstreams,
}: {
  onViewWorkstreams: () => void;
}) {
  return (
    <div className="northstar-content">
      <div className="northstar-welcome">
        <div>
          <p className="northstar-overline">
            FRIDAY / 09:42
          </p>

          <h4>Good morning, Alex.</h4>

          <p>
            Here&apos;s what needs your attention today.
          </p>
        </div>

        <button
          className="northstar-primary-action"
          type="button"
          onClick={onViewWorkstreams}
        >
          View workstreams <span>↗</span>
        </button>
      </div>

      <div className="northstar-metrics">
        <article>
          <div className="metric-heading">
            <span>ACTIVE WORKSTREAMS</span>
            <i>↗</i>
          </div>

          <strong>12</strong>

          <p>
            <span className="metric-positive">+2</span>{" "}
            this month
          </p>
        </article>

        <article>
          <div className="metric-heading">
            <span>ON TRACK</span>
            <i>◎</i>
          </div>

          <strong>86%</strong>
          <p>Across active work</p>
        </article>

        <article className="attention-metric">
          <div className="metric-heading">
            <span>NEEDS ATTENTION</span>
            <i>!</i>
          </div>

          <strong>4</strong>
          <p>2 due within 48h</p>
        </article>
      </div>

      <div className="northstar-dashboard-grid">
        <section className="northstar-panel workstream-panel">
          <div className="panel-heading">
            <div>
              <span className="panel-label">
                WORKSTREAM HEALTH
              </span>
              <h5>Delivery overview</h5>
            </div>

            <button
              type="button"
              onClick={onViewWorkstreams}
            >
              View all ↗
            </button>
          </div>

          <div className="workstream-table">
            <div className="workstream-row workstream-header">
              <span>WORKSTREAM</span>
              <span>OWNER</span>
              <span>STATUS</span>
              <span>PROGRESS</span>
            </div>

            {workstreams.slice(0, 3).map((workstream) => (
              <div
                className="workstream-row"
                key={workstream.name}
              >
                <strong>{workstream.name}</strong>
                <span>{workstream.owner}</span>

                <span
                  className={
                    workstream.status === "On track"
                      ? "status-pill on-track"
                      : "status-pill attention"
                  }
                >
                  {workstream.status}
                </span>

                <div className="progress-cell">
                  <div className="progress-track">
                    <span
                      style={{
                        width: `${workstream.progress}%`,
                      }}
                    />
                  </div>

                  <small>{workstream.progress}%</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="northstar-panel activity-panel">
          <div className="panel-heading">
            <div>
              <span className="panel-label">
                LIVE ACTIVITY
              </span>
              <h5>Recently moved</h5>
            </div>

            <span className="live-indicator">
              <i />
              Live
            </span>
          </div>

          <div className="activity-list">
            {activity.map((item) => (
              <div
                className="activity-item"
                key={`${item.person}-${item.time}`}
              >
                <div className="activity-avatar">
                  {item.initials}
                </div>

                <p>
                  <strong>{item.person}</strong>
                  <span>{item.action}</span>
                </p>

                <time>{item.time}</time>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="northstar-footer-line">
        <span>
          Northstar / Operational visibility
        </span>
        <span>Updated just now</span>
      </div>
    </div>
  );
}