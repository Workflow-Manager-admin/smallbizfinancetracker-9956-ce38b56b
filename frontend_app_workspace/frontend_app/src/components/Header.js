import React from "react";

/**
 * Header bar with quick actions and user profile.
 * PUBLIC_INTERFACE
 */
const Header = () => (
  <header className="header">
    <div className="header-title">Financial Dashboard</div>
    <div className="header-actions">
      <button className="btn btn-primary">+ New Transaction</button>
      <div className="user-avatar">U</div>
    </div>
  </header>
);

export default Header;
