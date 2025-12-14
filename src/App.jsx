import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import About from "./components/About/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        {/* Home page with Nav */}
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Home />
            </>
          }
        />

        {/* About page with Nav */}
        <Route
          path="/about"
          element={
            <>
              <Nav />
              <About />
            </>
          }
        />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
