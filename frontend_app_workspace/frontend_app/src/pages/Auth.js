import React, { useState } from "react";

/**
 * Authentication page for login/signup.
 * PUBLIC_INTERFACE
 */
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>
        <input type="email" placeholder="Email" className="input" autoFocus />
        <input type="password" placeholder="Password" className="input" />
        {!isLogin && 
          <input type="password" placeholder="Confirm Password" className="input" />
        }
        <button className="btn btn-primary" type="submit">
          {isLogin ? "Sign In" : "Create Account"}
        </button>
        <div className="auth-toggle">
          {isLogin ? (
            <span>
              Don't have an account?{" "}
              <button type="button" className="link" onClick={() => setIsLogin(false)}>
                Sign Up
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <button type="button" className="link" onClick={() => setIsLogin(true)}>
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
