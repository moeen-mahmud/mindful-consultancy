// Importing necessary files
import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useValidation from "../../../hooks/useValidation";

// Main Register Component
const Register = () => {
  //Getting user authentication support from useAuth Hook
  const { signInUsingGoogle, createUser, error } = useAuth();

  //Getting form validation process from useValidation hook
  const { isMail, isPassword } = useValidation();

  //Setting up redirect url
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/";

  //Get and set necessary user data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Set states for errors
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  //Getting values from user name input
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  //Getting values from password input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //Getting values from password input
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  //Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    //Checking for valid mail
    if (!isMail(email)) {
      setEmailError("Please enter a valid email address!");
      return;
    } else {
      setEmailError("");
    }

    //Checking for valid password
    if (!isPassword(password)) {
      setPassError("Please enter a strong password!");
      return;
    } else {
      setPassError("");
    }

    //Create the user
    createUser(name, email, password);

    //Redirect the user
    history.push(redirectUrl);
  };

  //Function for Google Sign In
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
        <h1>Join Us</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            onChange={handleNameChange}
            type="text"
            name="name"
            placeholder="Name"
            minLength="2"
            required
          />
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
            Sign Up
          </button>
        </form>
        <div className="form-footer">
          <p>Or</p>
          <button onClick={handleGoogleSignIn} className="btn btn-login">
            Sign Up with Google
          </button>
          <p className="footer-msg">
            Already have an account?{" "}
            <Link to="/login">
              <span className="hl-text">Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
