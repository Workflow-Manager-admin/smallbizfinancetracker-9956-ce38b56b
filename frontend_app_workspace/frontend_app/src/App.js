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
  // Manages user login state and page navigation.
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("dashboard");

  // Handler to switch pages in the sidebar
  const handleNav = (target) => setPage(target);

  // Handler to simulate login
  // PUBLIC_INTERFACE
  const handleMockLogin = (email, password) => {
    // Only accept the specific demo credentials (per spec).
    if (
      email === "demo@company.com" &&
      password === "demopassword123"
    ) {
      setUser({ email });
      setPage("dashboard");
      return { success: true };
    }
    return { success: false, message: "Invalid demo credentials." };
  };

  // Handler to sign out and return to login screen
  // PUBLIC_INTERFACE
  const handleLogout = () => {
    setUser(null);
    setPage("dashboard");
  };

  if (!user) {
    // Pass the mock login handler to Auth page
    return <Auth onLogin={handleMockLogin} />;
  }

  // For possible later expansion of sidebar navigation logic
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

  return (
    <div className="app">
      <Layout onNav={handleNav} user={user} onLogout={handleLogout}>
        {PageContent}
      </Layout>
    </div>
  );
}

export default App;