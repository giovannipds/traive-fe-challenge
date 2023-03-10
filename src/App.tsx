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
      due_date: item.credit_requests.reduce((acc, request) => {
        const requestDate = new Date(request.due_date);
        const requestISOString = requestDate.toISOString();
        if (!acc) return requestISOString;
        const prevDate = new Date(acc);
        return prevDate < requestDate
          ? requestISOString
          : prevDate.toISOString();
      }, ""),
    })),
  };
  console.log(calculated);
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
      <header className="App-header sticky top-0 z-10 mb-6 bg-stone-800 p-4 shadow">
        <a href="https://traivefinance.com/" target="_blank" rel="noreferrer">
          <img src={logo} className="App-logo" alt="Traive™" />
        </a>
      </header>

      {/* main */}
      <main className="container relative mx-auto px-4">
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
