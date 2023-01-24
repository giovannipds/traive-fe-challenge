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
                  <nav aria-label="Page navigation example">
                    <ul className="inline-flex items-center -space-x-px">
                      <li>
                        <button aria-label="Previous Page" type="button">
                          <ArrowLongLeftIcon className="h-6 w-6" />
                        </button>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="border border-stone-300 bg-white px-3 py-2 leading-tight text-stone-500 hover:bg-stone-100 hover:text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700 dark:hover:text-white"
                        >
                          1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="border border-stone-300 bg-white px-3 py-2 leading-tight text-stone-500 hover:bg-stone-100 hover:text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700 dark:hover:text-white"
                        >
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-current="page"
                          className="z-10 border border-blue-300 bg-blue-50 px-3 py-2 leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-stone-700 dark:bg-stone-700 dark:text-white"
                        >
                          3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="border border-stone-300 bg-white px-3 py-2 leading-tight text-stone-500 hover:bg-stone-100 hover:text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700 dark:hover:text-white"
                        >
                          4
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="border border-stone-300 bg-white px-3 py-2 leading-tight text-stone-500 hover:bg-stone-100 hover:text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700 dark:hover:text-white"
                        >
                          5
                        </a>
                      </li>
                      <li>
                        <button aria-label="Next Page" type="button">
                          <ArrowLongRightIcon className="h-6 w-6" />
                        </button>
                      </li>
                    </ul>
                  </nav>
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
