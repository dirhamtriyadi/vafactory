import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages";
import { Navbar } from "./components/organisms";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
