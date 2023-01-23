import React from "react";

const locale = "en-US";

interface FarmerName {
  firstName: string;
  lastName: string;
}

interface CreditRequest {
  id: string;
  farmer_id: string;
  purpose: string[];
  season: string;
  due_date: string;
  amount: number;
}

interface FarmerRequest {
  id: string;
  farmer: FarmerName;
  status: string;
  credit_requests: CreditRequest[];
}

export interface CreditRequestsTableProps {
  data: {
    items: FarmerRequest[];
    totalInPage: number;
    totalItems: number;
    totalPages: number;
  };
}

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat(locale, {
    currency: "USD",
    style: "currency",
  }).format(amount);

const formatPurposes = (purposes: string[]) =>
  purposes.map((p) => p[0].toUpperCase() + p.slice(1)).join(", ");

const formatDateTime = (datetime: string) =>
  new Intl.DateTimeFormat(locale, {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(datetime));

const CreditRequestsTable = ({ data }: CreditRequestsTableProps) => {
  return (
    <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
      <table className="table-auto border-collapse">
        <thead className="font-medium text-slate-400">
          <tr>
            <th className="border-b p-4 pl-8 text-left  dark:border-slate-600 dark:text-slate-200">
              Season
            </th>
            <th className="border-b p-4 pl-8 text-left  dark:border-slate-600 dark:text-slate-200">
              Amount Requested
            </th>
            <th className="border-b p-4 pl-8 text-left  dark:border-slate-600 dark:text-slate-200">
              Purpose
            </th>
            <th className="border-b p-4 pl-8 text-left  dark:border-slate-600 dark:text-slate-200">
              Due Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-800">
          {data.items
            .flatMap((item) => item.credit_requests)
            .map((credit_request) => (
              <tr key={credit_request.id}>
                <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                  {credit_request.season}
                </td>
                <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                  {formatCurrency(credit_request.amount)}
                </td>
                <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                  {formatPurposes(credit_request.purpose)}
                </td>
                <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                  {formatDateTime(credit_request.due_date)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreditRequestsTable;
