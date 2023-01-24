import React, { useEffect, useState } from "react";
import logo from "./traive-logo-green-tm.svg";
import "./App.css";
import FarmerRequestsTable from "./FarmerRequestsTable";
import { Data, FullData } from "./interfaces";

const baseUrl = "http://localhost:3004";

const calculateAmountRequested = (data: Data): FullData => {
  const calculated = {
    ...data,
    items: data.items.map((item) => ({
      ...item,
      amount_requested: item.credit_requests.reduce(
        (acc, request) => acc + request.amount,
        0
      ),
    })),
  };
  return calculated;
};

const App = () => {
  const [data, setData] = useState<FullData>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseUrl}/credit-requests`);
      const json = await response.json();
      const data = calculateAmountRequested(json);
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header mb-6 p-4 shadow">
        <img src={logo} className="App-logo" alt="Traive™" />
      </header>
      <main className="container mx-auto px-4">
        {data && <FarmerRequestsTable data={data} />}
      </main>
    </div>
  );
};

export default App;
