import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomeHeader } from "./components/Home";
import { Homecontent } from "./components/Homecontent";
import video from '../src/assets/215697_small.mp4'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <HomeHeader />
        <div className="homecontent">
          <video src={video} autoPlay muted loop></video>
          <Routes>
            <Route path="/" element={<Homecontent />} />
            <Route path="/dashboard" element={<Homecontent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
