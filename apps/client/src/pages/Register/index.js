import React, { useState, useRef } from "react";
// import logo from "../../images/logo.png"
import Logo from "../../components/Header/Logo";
import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  const emailField = useRef(null);
  const firstNameField = useRef(null);
  const lastNameField = useRef(null);
  const passwordField = useRef(null);
  const warningBox = useRef(null);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  function checkPassword(pass) {
    let regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return regex.test(pass);
  }

  function checkEmail(email) {
    let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
    return regex.test(email);
  }

  const warnings = {
    email: "Please enter a valid email",
    name: "First name field cannot be empty",
    password:
      "Min. password length should be 8, including capital letters, numbers and symbols",
    success: "Account created sucessfully",
  };
  function displayTooltip(msg) {
    while (warningBox.current.firstChild) {
      warningBox.current.removeChild(warningBox.current.firstChild);
    }
    if (msg === "success") {
      warningBox.current.innerHTML += `<li class="litag success" >${warnings[msg]}</li>`;
    } else {
      warningBox.current.innerHTML += `<li class="litag" >${warnings[msg]}</li>`;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let mail = emailField.current.value;
    let first = firstNameField.current.value;
    let last = lastNameField.current.value;
    let pass = passwordField.current.value;
    let validEmail = false;
    let validName = false;
    let validPassword = false;

    checkEmail(mail) ? (validEmail = true) : displayTooltip("email");
    first.length > 1 ? (validName = true) : displayTooltip("name");
    checkPassword(pass) ? (validPassword = true) : displayTooltip("password");
    if (validEmail && validName && validPassword) {
      setEmail(mail);
      setFullName(last ? first + " " + last : first);
      setPassword(pass);
      displayTooltip("success");
    }
  }

  return (
    <div className="register">
      <div className="register-left">
        <div className="header register-header">
          <Logo />
          <div className="links left-align">
            {["Home", "Login"].map((each) => (
              <Link
                className="link"
                to={each === "Home" ? "/" : "/" + each.toLowerCase()}
              >
                {each}
              </Link>
            ))}
          </div>
        </div>
        <form className="form-left" onSubmit={handleSubmit}>
          <span className="tag-line">
            Watch tv shows & movies anywhere. anytime
          </span>
          <h1 className="form-title">
            Create new account<span className="dot">.</span>
          </h1>
          <h3>
            Already A Member ?{" "}
            <Link className="link" to="/login">
              Login
            </Link>
          </h3>
          <ul className="warning" ref={warningBox}></ul>
          <div className="name">
            <div className="ip">
              <label htmlFor="first-name">First name</label>
              <input
                ref={firstNameField}
                type="text"
                id="first-name"
                className="input-field text"
              />
            </div>
            <div className="ip">
              <label htmlFor="last-name">Last name</label>
              <input
                ref={lastNameField}
                type="text"
                id="last-name"
                className="input-field text"
              />
            </div>
          </div>
          <div className="ip">
            <label htmlFor="email-field">Email</label>
            <input
              type="email"
              ref={emailField}
              className="input-field"
              name="email-box"
              id="email-field"
            />
          </div>
          <div className="ip">
            <label htmlFor="password-field">Password</label>
            <input
              type="password"
              ref={passwordField}
              className="input-field"
              name="password-box"
              id="password-field"
            />
          </div>

          <button type="submit" className="submit-button">
            Create account
          </button>
          <p>* By clicking create account you agree our terms and conditions</p>
        </form>
      </div>
    </div>
  );
}

export default Register;
