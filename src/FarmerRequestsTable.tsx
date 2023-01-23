import React from "react";
import FarmerRequestRow from "./FarmerRequestRow";
import { FullData } from "./interfaces";

export interface FarmerRequestsTableProps {
  data: FullData;
}

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
            <FarmerRequestRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FarmerRequestsTable;
