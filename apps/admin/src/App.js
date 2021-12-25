import "./App.css";
import Topbar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="rest">
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="users" element={<Users />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
