import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Debits from "./components/Debits";
import Credits from "./components/Credits";
import Balance from "./components/Balance";

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

  return (
    <Router>
      <div className="App">
        <nav>
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
                setCurrDebits={setCurrDebits}
                currCredits={currCredits}
              />
            }
          />
          <Route
            path="/Credits/*"
            element={
              <Credits
                currCredits={currCredits}
                setCurrCredits={setCurrCredits}
                currDebits={currDebits}
              />
            }
          />
          <Route
            path="/balance/*"
            element={
              <Balance
                currCreditData={currCredits}
                currDebitData={currDebits}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
