import React, { useEffect, useState } from "react";
import logo from "./traive-logo-green-tm.svg";
import "./App.css";
import FarmerRequestsTable from "./components/FarmerRequestsTable";
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
    <div className="App selection:bg-teal-400 selection:text-black">
      {/* header */}
      <header className="App-header mb-6 p-4 shadow">
        <img src={logo} className="App-logo" alt="Traive™" />
      </header>

      {/* main */}
      <main className="container mx-auto px-4">
        {data && <FarmerRequestsTable data={data} />}
      </main>

      {/* footer */}
      <footer className="pb-4 text-center text-sm text-stone-600">
        Developed by{" "}
        <a
          className="underline-offset-4 outline-none hover:text-teal-400 hover:underline focus:text-teal-400 focus:underline focus:ring-2 focus:ring-teal-400/25"
          href="https://github.com/giovannipds"
          rel="noreferrer"
          target="_blank"
        >
          Giovanni Pires
        </a>{" "}
        ~{" "}
        <a
          className="underline-offset-4 outline-none hover:text-teal-400 hover:underline focus:text-teal-400 focus:underline focus:ring-2 focus:ring-teal-400/25"
          href="https://www.avenuecode.com"
          rel="noreferrer"
          target="_blank"
        >
          Avenue Code
        </a>
      </footer>
    </div>
  );
};

export default App;
