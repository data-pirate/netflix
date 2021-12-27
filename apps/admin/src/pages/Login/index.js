import React, { useContext, useState } from "react";
// import logo from '../../images/logo.png';
import "./login.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { login } from "../../context/AuthContext/apiCall";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const {isFetching, dispatch} = useContext(AuthContext);
  
  function handleSubmit(e) {
    e.preventDefault();
    login({email, password}, dispatch)
  }

  return (
    <div className="register">
      <div className="login-left">
        <div className="header register-header">
          <img
            className="logo"
            src="https://pngimg.com/uploads/netflix/netflix_PNG31.png"
            alt="netflix logo"
          />
        </div>
        <form className="form-left" onSubmit={handleSubmit}>
          <span className="tag-line">
            Watch tv shows & movies anywhere. anytime
          </span>
          <h1 className="form-title">Admin Login</h1>
          <ul className="warning"></ul>
          <div className="ip">
            <label htmlFor="email-field">Email</label>
            <input
              autoComplete="false"
              type="email"
              className="input-field"
              name="email-box"
              id="email-field"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="ip">
            <label htmlFor="password-field">Password</label>
            <input
              type="password"
              className="input-field"
              name="password-box"
              id="password-field"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button" disabled={isFetching}>
            login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
