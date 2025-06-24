import React from "react";

/**
 * Dashboard - visually redesigned to closely match a modern SaaS financial dashboard.
 * Includes summary metric cards, a chart placeholder, and a "Recent Transactions" table.
 * PUBLIC_INTERFACE
 */
const summaryData = [
  {
    label: "Total Revenue",
    value: "$42,000",
    trend: "+14% MoM",
    accent: "bg-primary"
  },
  {
    label: "Total Expenses",
    value: "$30,850",
    trend: "+8% MoM",
    accent: "bg-secondary"
  },
  {
    label: "Net Profit",
    value: "$11,150",
    trend: "+21% MoM",
    accent: "bg-accent"
  }
];

const recentTransactions = [
  {
    date: "2024-06-01",
    description: "Software subscription",
    amount: -120.0,
    category: "IT",
    type: "Expense",
  },
  {
    date: "2024-05-30",
    description: "Client payment",
    amount: 5200.0,
    category: "Sales",
    type: "Income",
  },
  {
    date: "2024-05-29",
    description: "Office rent",
    amount: -2000.0,
    category: "Operations",
    type: "Expense",
  },
  {
    date: "2024-05-27",
    description: "Office supplies",
    amount: -350.0,
    category: "Operations",
    type: "Expense",
  },
];

/**
 * Renders a styled card for top-of-dashboard summary metrics.
 */
function SummaryCard({ label, value, trend, accent }) {
  return (
    <div className={`dashboard-card ${accent}`}>
      <div style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 5 }}>{value}</div>
      <div style={{ fontSize: "1.04rem", opacity: 0.93 }}>{label}</div>
      <div style={{ fontSize: "0.97rem", opacity: 0.68, marginTop: 8 }}>{trend}</div>
    </div>
  );
}

/**
 * Renders a placeholder chart area for visual matching.
 */
function ChartPlaceholder() {
  return (
    <div className="dashboard-chart" style={{ height: 220 }}>
      <svg width="360" height="120" viewBox="0 0 360 120" style={{ maxWidth: "85%" }}>
        <linearGradient id="chartfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1976d2" stopOpacity="0.35" />
          <stop offset="90%" stopColor="#1976d2" stopOpacity="0" />
        </linearGradient>
        <polyline
          fill="url(#chartfill)"
          stroke="none"
          points="0,110 20,90 50,60 80,80 110,50 150,85 200,60 230,41 280,70 310,50 360,90 360,120 0,120"
        />
        <polyline
          fill="none"
          stroke="#1976d2"
          strokeWidth="3"
          points="0,110 20,90 50,60 80,80 110,50 150,85 200,60 230,41 280,70 310,50 360,90"
        />
      </svg>
      <div style={{ position: "absolute", top: 24, left: 32, color: "#222", opacity: 0.08, fontSize: 72, fontWeight: 900, pointerEvents: "none" }}>
        •
      </div>
    </div>
  );
}

/**
 * Renders a summary list/table of recent transactions.
 */
function RecentTransactionsTable() {
  return (
    <div className="transactions-table" style={{ marginTop: 30 }}>
      <div style={{ fontWeight: "600", marginBottom: 14, fontSize: 17, color: "#1a2127" }}>Recent Transactions</div>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "none" }}>
        <thead>
          <tr style={{ color: "#888", fontWeight: 500, fontSize: 15 }}>
            <th style={{ textAlign: "left", paddingBottom: 6 }}>Date</th>
            <th style={{ textAlign: "left", paddingBottom: 6 }}>Description</th>
            <th style={{ textAlign: "left", paddingBottom: 6 }}>Category</th>
            <th style={{ textAlign: "right", paddingBottom: 6 }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {recentTransactions.map((tr, idx) => (
            <tr key={idx} style={{
              borderBottom: "1px solid #f3f4f7",
              background: idx % 2 === 0 ? "#f9fbfc" : "white"
            }}>
              <td style={{ fontFamily: "monospace", fontSize: 15, padding: "5px 0 5px 0" }}>{tr.date}</td>
              <td style={{ fontSize: 15 }}>{tr.description}</td>
              <td>
                <span
                  style={{
                    background: "#e7f0fa",
                    color: "#1976d2",
                    borderRadius: "6px",
                    padding: "2.5px 12px",
                    fontSize: 13,
                    fontWeight: 500
                  }}>
                  {tr.category}
                </span>
              </td>
              <td style={{ textAlign: "right", fontFamily: "monospace", fontSize: 15, color: tr.amount < 0 ? "#b3312b" : "#247e34", fontWeight: 600 }}>
                {tr.amount < 0 ? "-" : "+"}{Math.abs(tr.amount).toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 12 }}>
        <button className="btn btn-accent" style={{ float: "right", fontSize: 13, padding: "7px 18px" }}>
          View all transactions
        </button>
      </div>
    </div>
  );
}

const Dashboard = () => (
  <section className="dashboard" style={{ minHeight: 600 }}>
    {/* Header Section - visually more modern, minimalistic */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28 }}>
      <div>
        <h2 style={{ margin: 0, fontWeight: 700, fontSize: "2.1rem", color: "#222" }}>
          Dashboard
        </h2>
        <div style={{ color: "#7e8693", fontWeight: 500, fontSize: 18, marginTop: 5 }}>
          Business overview & financial snapshot
        </div>
      </div>
      <button className="btn btn-primary btn-large" style={{ boxShadow: "0 3px 10px rgba(25,118,210,0.07)", minWidth: 160 }}>
        + New Transaction
      </button>
    </div>

    <div className="dashboard-cards" style={{ marginBottom: 28 }}>
      {summaryData.map((props, i) => (
        <SummaryCard key={i} {...props} />
      ))}
    </div>
    <div className="dashboard-charts">
      <ChartPlaceholder />
    </div>
    <RecentTransactionsTable />
  </section>
);

export default Dashboard;
