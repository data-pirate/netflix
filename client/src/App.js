import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Watch from "./pages/Watch";
import { BrowserRouter as Router, Routes, Link, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Home type="movies" />} />
          <Route path="/series" element={<Home type="series" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </Router>

      {/* <Register /> */}
      {/* <egister/> */}
      {/* <Login /> */}
      {/* <Watch src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" /> */}
    </div>
  );
}

export default App;
