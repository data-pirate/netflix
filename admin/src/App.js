import "./App.css";
import Topbar from "./components/TopBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="rest">
          rest
        </div>
      </div>
    </div>
  );
}

export default App;
