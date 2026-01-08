import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import About from "./components/About/About";
import Service from "./components/Features/Service";
import Details from "./components/Information/Details";
import Contact from "./components/Contact/Contact";
import ForgotPass from "./components/ForgotPass";

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

        <Route
          path="/services"
          element={
            <>
              <Nav />
              <Service />
            </>
          }
        />

        <Route
          path="/information"
          element={
            <>
              <Nav />
              <Details />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Nav />
              <Contact />{" "}
            </>
          }
        />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPass/>} />
      </Routes>
    </Router>
  );
}

export default App;
