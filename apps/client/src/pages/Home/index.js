import React, { useState, useEffect } from "react";
import Left from "../../components/Left";
import Right from "../../components/Right";
import axios from "axios";
import "./style.css";

function Home(props) {
  const [loggedIn, setLoggedIn] = useState(true);
  function handleLogin() {
    setLoggedIn(!loggedIn);
  }

  return (
    <div className="container">
      {/* <button onClick={handleLogin}>Login</button> */}
      <Left type={props.type} loggedIn={loggedIn} />
      <Right loggedIn={loggedIn} />
    </div>
  );
}

export default Home;
