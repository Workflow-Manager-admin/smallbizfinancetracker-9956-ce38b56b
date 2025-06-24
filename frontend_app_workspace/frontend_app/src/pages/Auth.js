import React, { useState } from "react";

/**
 * Authentication page for login/signup with mock/demo auth logic.
 * PUBLIC_INTERFACE
 */
const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("demo@company.com");
  const [password, setPassword] = useState("demopassword123");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  // Handles form submit for demo login
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Use the provided mock login handler, if supplied
      if (onLogin) {
        const result = onLogin(email, password);
        if (!result.success) {
          setError(result.message || "Login failed.");
        }
      }
    } else {
      // "Create Account" disabled in demo; just show a warning
      setError("Account creation is disabled in demo mode.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit} autoComplete="off">
        <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>
        <div
          style={{
            background: "#fffbe2",
            color: "#726100",
            border: "1px solid #ffd980",
            borderRadius: 6,
            fontSize: "0.98rem",
            padding: "10px 10px",
            marginBottom: 8,
            textAlign: "center",
          }}
        >
          <strong>Demo Mode:</strong> <br />
          Sign in with <b>demo@company.com</b> / <b>demopassword123</b>.<br />
          (Mock authentication is enabled; no data is stored)
        </div>
        <input
          type="email"
          placeholder="Email"
          className="input"
          autoFocus
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="input"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        )}
        {error && (
          <div
            style={{
              color: "#b83516",
              background: "#fff3f1",
              border: "1px solid #fdcfc0",
              borderRadius: 6,
              fontSize: "0.97rem",
              padding: 7,
              marginBottom: "5px",
              textAlign: "center",
            }}
          >
            {error}
          </div>
        )}
        <button className="btn btn-primary" type="submit">
          {isLogin ? "Sign In" : "Create Account"}
        </button>
        <div className="auth-toggle">
          {isLogin ? (
            <span>
              Don't have an account?{" "}
              <button type="button" className="link" onClick={() => { setIsLogin(false); setError(null); }}>
                Sign Up
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <button type="button" className="link" onClick={() => { setIsLogin(true); setError(null); }}>
                Sign In
              </button>
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Auth;
