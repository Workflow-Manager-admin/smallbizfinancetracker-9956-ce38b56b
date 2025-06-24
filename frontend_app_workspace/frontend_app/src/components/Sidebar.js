import React from "react";

/**
 * Sidebar navigation for the app.
 * PUBLIC_INTERFACE
 */
const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-logo">FinTrack</div>
    <nav className="sidebar-nav">
      <a href="#" className="sidebar-link">Dashboard</a>
      <a href="#" className="sidebar-link">Transactions</a>
      <a href="#" className="sidebar-link">Reports</a>
      <a href="#" className="sidebar-link">Categories</a>
      <a href="#" className="sidebar-link">Users</a>
    </nav>
  </aside>
);

export default Sidebar;
