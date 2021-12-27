import "./App.css";
import Topbar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={ user ? <Navigate replace to="/" /> : <Login />} />
        </Routes>
        {user && (
          <>
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
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
