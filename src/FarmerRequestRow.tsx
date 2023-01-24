import React, { useState } from "react";
import CreditRequestsTable from "./CreditRequestsTable";
import { capitalize, formatCurrency, formatDateTime } from "./helpers";
import { FarmerName, FullFarmerRequest } from "./interfaces";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";

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
      <td className="text-sm" colSpan={6}>
        <table className="w-full text-center font-normal text-stone-400">
          <tr>
            <td className="w-1/12 border-b border-stone-400 p-4 py-3 text-left">
              <button aria-label="Expand" onClick={expandRow} type="button">
                {!expanded ? (
                  <ChevronDownIcon className="h-6 w-6 text-white" />
                ) : (
                  <ChevronUpIcon className="h-6 w-6 text-white" />
                )}
              </button>
            </td>
            <td className="w-2/12 border-b border-stone-400 p-4 py-3">
              {formatName(item.farmer)}
            </td>
            <td className="w-2/12 border-b border-stone-400 p-4 py-3 text-right">
              {formatCurrency(item.amount_requested)}
            </td>
            <td className="w-2/12 border-b border-stone-400 p-4 py-3">
              {capitalize(item.status)}
            </td>
            <td className="w-2/12 border-b border-stone-400 p-4 py-3">
              {formatDateTime(new Date().toString())}
            </td>
            <td className="w-1/12 border-b border-stone-400 p-4 py-3 text-right">
              <button type="button">
                <EllipsisVerticalIcon className="h-6 w-6 text-stone-400" />
              </button>
            </td>
          </tr>
        </table>

        {/* expanded table */}
        {expanded && (
          <CreditRequestsTable credit_requests={item.credit_requests} />
        )}
      </td>
    </tr>
  );
};

export default FarmerRequestRow;
