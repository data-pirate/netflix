import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Watch from './pages/Watch';


function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Register/> */}
      <Login />
      {/* <Watch src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" /> */}
    </div>
  );
}

export default App;
