import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Debits from "./components/Debits";
import Credits from "./components/Credits";
import Balance from "./components/Balance";
import "./App.css";

function App() {
  const [currDebits, setCurrDebits] = useState(0);
  const [currCredits, setCurrCredits] = useState(0);

  useEffect(() => {
    async function fetchDebitData() {
      const res = await axios.get(
        `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits`
      );
      setCurrDebits(res.data);
    }
    fetchDebitData();

    async function fetchCreditData() {
      const res = await axios.get(
        `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits`
      );
      setCurrCredits(res.data);
    }
    fetchCreditData();
  }, []);

  const handleDebits = (amount) => {
    const newDebits = currDebits + amount;
    setCurrDebits(newDebits);
  };

  const handleCredits = (amount) => {
    const newCredits = currCredits + amount;
    setCurrCredits(newCredits);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/debits">Debits</Link>
            </li>
            <li>
              <Link to="/credits">Credits</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                currDebits={currDebits}
                setCurrDebits={setCurrDebits}
                currCredits={currCredits}
                setCurrCredits={setCurrCredits}
              />
            }
          />
          <Route
            path="/Debits/*"
            element={
              <Debits
                currDebits={currDebits}
                handleDebits={handleDebits}
                currCredits={currCredits}
              />
            }
          />
          <Route
            path="/Credits/*"
            element={
              <Credits
                currCredits={currCredits}
                handleCredits={handleCredits}
                currDebits={currDebits}
              />
            }
          />
          <Route
            path="/balance/*"
            element={
              <Balance currCredits={currCredits} currDebits={currDebits} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
