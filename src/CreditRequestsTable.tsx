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
    <div className="not-prose relative overflow-hidden">
      <table className="w-full table-auto border-collapse text-center">
        {/* head */}
        <thead className="bg-stone-700 font-medium text-stone-200">
          <tr>
            <th className="w-4/12 border-b border-stone-600 p-4 pl-24">
              Season
            </th>
            <th className="w-2/12 border-b border-stone-600 p-4 text-right">
              Amount Requested
            </th>
            <th className="w-3/12 border-b border-stone-600 p-4">Purpose</th>
            <th className="w-3/12 border-b border-stone-600 p-4 pr-24">
              Due Date
            </th>
          </tr>
        </thead>

        {/* body */}
        <tbody className="bg-stone-700/25">
          {credit_requests.map((credit_request) => (
            <tr key={credit_request.id}>
              <td className="w-4/12 border-b border-stone-700 p-4 pl-24 text-stone-400">
                {credit_request.season}
              </td>
              <td className="w-2/12 border-b border-stone-700 p-4 text-right text-stone-400">
                {formatCurrency(credit_request.amount)}
              </td>
              <td className="w-3/12 border-b border-stone-700 p-4 text-stone-400">
                {formatPurposes(credit_request.purpose)}
              </td>
              <td className="w-3/12 border-b border-stone-700 p-4 pr-24 text-stone-400">
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
