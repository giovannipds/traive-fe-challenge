import React from "react";
import logo from "./traive-logo-green-tm.svg";
import "./App.css";
import CreditRequestsTable from "./CreditRequestsTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo mb-3" alt="Traive™" />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <CreditRequestsTable />
      </header>
    </div>
  );
}

export default App;
