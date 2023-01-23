import React, { useEffect, useState } from "react";
import logo from "./traive-logo-green-tm.svg";
import "./App.css";
import CreditRequestsTable, {
  CreditRequestsTableProps,
} from "./CreditRequestsTable";

const baseUrl = "http://localhost:3004";

const App = () => {
  const [data, setData] = useState<CreditRequestsTableProps["data"]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseUrl}/credit-requests`);
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo mb-3" alt="Traive™" />
        {data && <CreditRequestsTable data={data} />}
      </header>
    </div>
  );
};

export default App;
