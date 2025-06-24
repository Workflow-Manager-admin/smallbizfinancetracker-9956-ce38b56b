import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

/**
 * Layout component that arranges the sidebar, header, and main content area.
 * PUBLIC_INTERFACE
 */
const Layout = ({ children, onNav, user, onLogout }) => {
  // onNav, user, onLogout are accepted for possible future use (sidebar/header),
  // but not used directly now since navigation is app-level.
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-panel">
        <Header />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
