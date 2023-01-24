import React, { useState } from "react";
import CreditRequestsTable from "./CreditRequestsTable";
import { capitalize, formatCurrency, formatDateTime } from "../helpers";
import { FarmerName, FullFarmerRequest } from "../interfaces";
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
  const [isActionsDropdownOpen, setIsActionsDropdownOpen] = useState(false);

  const expandRow = () => setExpanded((e) => !e);

  return (
    <tr>
      <td className="text-sm" colSpan={6}>
        <table className="w-full text-center font-normal text-stone-400">
          <tr>
            <td className="w-1/12 border-b border-stone-400 p-4 py-3 text-left">
              <button
                aria-label="Expand"
                className="text-white outline-none hover:text-teal-400 focus:text-teal-400 focus:ring-2 focus:ring-teal-400/25"
                onClick={expandRow}
                type="button"
              >
                {!expanded ? (
                  <ChevronDownIcon className="h-6 w-6" />
                ) : (
                  <ChevronUpIcon className="h-6 w-6" />
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
              <div className="relative">
                <button
                  aria-label="Actions"
                  className="rounded-lg p-1 text-stone-400 outline-none hover:text-teal-400 focus:text-teal-400 focus:ring-2 focus:ring-teal-400/25"
                  data-dropdown-toggle="dropdown"
                  onClick={() => setIsActionsDropdownOpen((v) => !v)}
                  id={`actionsDropdown-${item.id}`}
                  type="button"
                >
                  <EllipsisVerticalIcon
                    aria-hidden="true"
                    className="h-6 w-6"
                  />
                </button>
                <div
                  id="dropdown"
                  className={[
                    "z-10",
                    !isActionsDropdownOpen && "hidden",
                    "divide-y",
                    "divide-gray-100",
                    "rounded-lg",
                    "shadow",
                    "bg-stone-700",
                    "absolute",
                    "right-0",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <ul
                    className="py-2 text-sm text-gray-200"
                    aria-labelledby={`actionsDropdown-${item.id}`}
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-6 py-2 hover:bg-teal-400 hover:text-black"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-6 py-2 hover:bg-teal-400 hover:text-black"
                      >
                        Settings
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
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
