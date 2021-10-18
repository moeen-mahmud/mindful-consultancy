import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useValidation from "../../../hooks/useValidation";

const Register = () => {
  const { signInUsingGoogle, createUser } = useAuth();
  const { isMail } = useValidation();

  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isMail(email)) {
      setEmailError("Please enter a valid email address!");
      return;
    } else {
      setEmailError("");
    }

    createUser(name, email, password);
    history.push(redirectUrl);
  };

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
