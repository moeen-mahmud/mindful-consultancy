import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const error = "";
  const handleEmailChange = (e) => {};
  const handlePassChange = (e) => {};
  const handleSubmit = () => {};
  const handleGoogleSignIn = () => {};
  return (
    <div className="login">
      <div className="login-card">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            onChange={handleEmailChange}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <span className="error-msg">{emailError}</span>
          <input
            onChange={handlePassChange}
            type="password"
            name="pass"
            placeholder="Password"
            minLength="6"
            required
          />
          <span className="error-msg">{passError}</span>
          <span className="error-msg">{error}</span>
          <button className="btn btn-login" type="submit">
            Sign In
          </button>
        </form>
        <div className="form-footer">
          <p>Or</p>
          <button onClick={handleGoogleSignIn} className="btn btn-login">
            Sign In with Google
          </button>
          <p className="footer-msg">
            Need an account?{" "}
            <Link to="/register">
              <span className="hl-text">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
