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
    <div className="not-prose relative mb-8 overflow-hidden rounded-xl border border-stone-500">
      <table className="border-collaps w-full table-auto font-medium">
        {/* head */}
        <thead className="border-b border-stone-500 bg-stone-700/50 text-center text-stone-100">
          <tr>
            <th className="w-1/12 p-4 py-8"></th>
            <th className="w-2/12 p-4">Farmer</th>
            <th className="w-2/12 p-4 text-right">Amount Requested</th>
            <th className="w-2/12 p-4">Status</th>
            <th className="w-2/12 p-4">Due Date</th>
            <th className="w-1/12 p-4 pr-6 text-right">Actions</th>
          </tr>
        </thead>

        {/* body */}
        <tbody>
          {data.items.slice(0, limit).map((item) => (
            <FarmerRequestRow key={item.id} item={item} />
          ))}
        </tbody>

        {/* footer */}
        <tfoot className="text-stone-100">
          <tr>
            <td className="p-4" colSpan={6}>
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
                  <button aria-label="Previous Page" type="button">
                    <ArrowLongLeftIcon className="h-6 w-6" />
                  </button>{" "}
                  <a href="#">1</a> <a href="#">2</a> <a href="#">3</a>{" "}
                  <button aria-label="Next Page" type="button">
                    <ArrowLongRightIcon className="h-6 w-6" />
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
