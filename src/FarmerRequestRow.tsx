import React, { useState } from "react";
import CreditRequestsTable from "./CreditRequestsTable";
import { formatCurrency, formatDateTime } from "./helpers";
import { FarmerName, FullFarmerRequest } from "./interfaces";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

interface FarmerRequestRowProps {
  item: FullFarmerRequest;
}

const formatName = (farmer: FarmerName) =>
  `${farmer.firstName} ${farmer.lastName}`;

const FarmerRequestRow = ({ item }: FarmerRequestRowProps) => {
  const [expanded, setExpanded] = useState(false);

  const expandRow = () => setExpanded((e) => !e);

  return (
    <tr>
      <td colSpan={6}>
        <table className="w-full">
          <tr>
            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
              <button onClick={expandRow}>
                {!expanded ? (
                  <ChevronDownIcon className="h-6 w-6 text-blue-500" />
                ) : (
                  <ChevronUpIcon className="h-6 w-6 text-blue-500" />
                )}
              </button>
            </td>
            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
              {formatName(item.farmer)}
            </td>
            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
              {formatCurrency(item.amount_requested)}
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
        </table>
        {expanded && (
          <CreditRequestsTable credit_requests={item.credit_requests} />
        )}
      </td>
    </tr>
  );
};

export default FarmerRequestRow;
