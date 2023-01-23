import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import FarmerRequestRow from "./FarmerRequestRow";
import { FullData } from "./interfaces";

export interface FarmerRequestsTableProps {
  data: FullData;
}

const limit = 10;

const FarmerRequestsTable = ({ data }: FarmerRequestsTableProps) => {
  return (
    <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
      <table className="table-auto border-collapse">
        {/* head */}
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

        {/* body */}
        <tbody className="bg-white dark:bg-slate-800">
          {data.items.slice(0, limit).map((item) => (
            <FarmerRequestRow key={item.id} item={item} />
          ))}
        </tbody>

        {/* footer */}
        <tfoot className="font-medium text-slate-400">
          <tr>
            <td
              className="border-b p-4 pl-8 text-left  dark:border-slate-600 dark:text-slate-200"
              colSpan={6}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  {data.totalPages} - {data.totalInPage} of {data.totalItems}
                </div>
                <div>
                  <button type="button">
                    <ArrowLongLeftIcon className="h-6 w-6 text-blue-500" />
                  </button>{" "}
                  <a>1</a> <a>2</a> <a>3</a>{" "}
                  <button type="button">
                    <ArrowLongRightIcon className="h-6 w-6 text-blue-500" />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default FarmerRequestsTable;
