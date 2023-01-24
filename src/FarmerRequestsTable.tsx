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

const currentPage = 1;

const pages = [1, 2, 3];

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
                  <nav aria-label="Page navigation">
                    <ul className="inline-flex items-center space-x-3">
                      <li>
                        <button
                          aria-label="Previous Page"
                          className="cursor-pointer hover:text-stone-400"
                          disabled={currentPage <= 1}
                          type="button"
                        >
                          <ArrowLongLeftIcon className="h-5 w-5" />
                        </button>
                      </li>
                      {pages.map((pageNumber) => {
                        const isCurrentPage = pageNumber === currentPage;
                        return (
                          <li>
                            <a
                              aria-label={`page ${pageNumber}`}
                              aria-current={isCurrentPage ? "page" : undefined}
                              className={[
                                "border",
                                "border-stone-500",
                                isCurrentPage
                                  ? "bg-teal-400"
                                  : "bg-stone-700/50",
                                "p-1",
                                "px-2",
                                "leading-tight",
                                isCurrentPage
                                  ? "hover:bg-teal-600"
                                  : "hover:bg-teal-400",
                              ]
                                .filter(Boolean)
                                .join(" ")}
                              href={`#${pageNumber}`}
                            >
                              {pageNumber}
                            </a>
                          </li>
                        );
                      })}
                      <li>
                        <button
                          aria-label="Next Page"
                          className="cursor-pointer hover:text-stone-400"
                          disabled={currentPage >= pages[pages.length - 1]}
                          type="button"
                        >
                          <ArrowLongRightIcon className="h-5 w-5" />
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
