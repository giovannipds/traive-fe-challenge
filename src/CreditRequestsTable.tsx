import React from "react";
import { capitalize, formatCurrency, formatDateTime } from "./helpers";
import { CreditRequest } from "./interfaces";

interface CreditRequestsTableProps {
  credit_requests: CreditRequest[];
}

const formatPurposes = (purposes: string[]) =>
  purposes.map((p) => capitalize(p)).join(", ");

const CreditRequestsTable = ({ credit_requests }: CreditRequestsTableProps) => {
  return (
    <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
      <table className="w-full table-auto border-collapse">
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
          {credit_requests.map((credit_request) => (
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
