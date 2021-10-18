// Importing necessary files
import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useValidation from "../../../hooks/useValidation";
import "./Login.css";

// Main Login Component
const Login = () => {
  //Importing authentication process form useAuth hook
  const { signInUsingGoogle, processLogin, error } = useAuth();

  //Getting mail validation fuction from useValidation hook
  const { isMail } = useValidation();

  //Setting up redirect url
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/";

  // Get and set data for email and password authentication
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Setting up email error
  const [emailError, setEmailError] = useState("");

  //Getting value from email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //Getting value from password input
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  //Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    //Checking errors
    if (!isMail(email)) {
      setEmailError("Please enter a valid email address!");
      return;
    } else {
      setEmailError("");
    }

    //Processing login
    processLogin(email, password);

    //Redirecting the user
    history.push(redirectUrl);
  };

  //Function for handling google sign in
  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirectUrl);
      })
      .catch((error) => console.log(error.message));
  };
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
          {/* Show errors from firebase */}
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
