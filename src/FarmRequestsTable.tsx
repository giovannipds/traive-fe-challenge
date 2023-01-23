import React from "react";
import { FarmerName, FarmerRequest } from "./CreditRequestsTable";

const locale = "en-US";

export interface FarmerRequestsTableProps {
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

const formatDateTime = (datetime: string) =>
  new Intl.DateTimeFormat(locale, {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(datetime));

const formatName = (farmer: FarmerName) =>
  `${farmer.firstName} ${farmer.lastName}`;

const FarmerRequestsTable = ({ data }: FarmerRequestsTableProps) => {
  return (
    <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
      <table className="table-auto border-collapse">
        <thead className="font-medium text-slate-400">
          <tr>
            <th className="border-b p-4 pl-8 text-left  dark:border-slate-600 dark:text-slate-200"></th>
            <th className="border-b p-4 pl-8 text-left  dark:border-slate-600 dark:text-slate-200">
              Farmer
            </th>
            <th className="border-b p-4 pl-8 text-left  dark:border-slate-600 dark:text-slate-200">
              Amount Requested
            </th>
            <th className="border-b p-4 pl-8 text-left  dark:border-slate-600 dark:text-slate-200">
              Status
            </th>
            <th className="border-b p-4 pl-8 text-left  dark:border-slate-600 dark:text-slate-200">
              Due Date
            </th>
            <th className="border-b p-4 pl-8 text-left  dark:border-slate-600 dark:text-slate-200">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-800">
          {data.items.map((item) => (
            <tr key={item.id}>
              <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Chevron
              </td>
              <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                {formatName(item.farmer)}
              </td>
              <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                {formatCurrency(0)}
              </td>
              <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                {item.status}
              </td>
              <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                {formatDateTime(new Date().toString())}
              </td>
              <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Dropdown
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FarmerRequestsTable;
