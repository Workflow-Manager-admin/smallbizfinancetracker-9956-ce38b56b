import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";
import Categories from "./pages/Categories";
import Users from "./pages/Users";
import Auth from "./pages/Auth";

/**
 * Top-level App with UI layout and mock navigation.
 * PUBLIC_INTERFACE
 */
function App() {
  // Simple page state for demonstration (no real router)
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("dashboard");

  // Navigation handler for sidebar
  const handleNav = (target) => setPage(target);

  // Sidebar links for navigation (demo, should use React Router in a full app)
  const sidebarLinks = [
    { name: "Dashboard", key: "dashboard" },
    { name: "Transactions", key: "transactions" },
    { name: "Reports", key: "reports" },
    { name: "Categories", key: "categories" },
    { name: "Users", key: "users" },
  ];

  if (!user) {
    return <Auth />;
  }

  let PageContent;
  switch (page) {
    case "dashboard":
      PageContent = <Dashboard />;
      break;
    case "transactions":
      PageContent = <Transactions />;
      break;
    case "reports":
      PageContent = <Reports />;
      break;
    case "categories":
      PageContent = <Categories />;
      break;
    case "users":
      PageContent = <Users />;
      break;
    default:
      PageContent = <Dashboard />;
  }

  // Pass navigation handler to the sidebar
  return (
    <div className="app">
      {/* Passes sidebarLinks and navigation logic to custom Sidebar */}
      <Layout>
        {PageContent}
      </Layout>
    </div>
  );
}

export default App;