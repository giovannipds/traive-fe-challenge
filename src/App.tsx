import React, { useEffect } from "react";
import logo from "./traive-logo-green-tm.svg";
import "./App.css";
import CreditRequestsTable from "./CreditRequestsTable";

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3004/credit-requests");
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo mb-3" alt="Traive™" />
        <CreditRequestsTable />
      </header>
    </div>
  );
};

export default App;
