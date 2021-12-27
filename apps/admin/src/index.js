import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthContextProvider from "./context/AuthContext/AuthContext";
import { MovieContextProvider } from "./context/MovieContext/MovieContext";

ReactDOM.render(
  <React.StrictMode>
    <MovieContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </MovieContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
