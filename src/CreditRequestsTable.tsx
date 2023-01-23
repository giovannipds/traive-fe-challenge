import React from "react";

const locale = "en-US";

interface FarmerName {
  firstName: string;
  lastName: string;
}

interface CreditRequest {
  id: string;
  farmer_id: string;
  purpose: string[];
  season: string;
  due_date: string;
  amount: number;
}

interface FarmerRequest {
  id: string;
  farmer: FarmerName;
  status: string;
  credit_requests: CreditRequest[];
}

export interface CreditRequestsTableProps {
  data: {
    items: FarmerRequest[];
    totalInPage: number;
    totalItems: number;
    totalPages: number;
  };
}

const CreditRequestsTable = ({ data }: CreditRequestsTableProps) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Season</th>
          <th>Amount Requested</th>
          <th>Purpose</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        {data.items
          .flatMap((item) => item.credit_requests)
          .map((credit_request) => (
            <tr key={credit_request.id}>
              <td>{credit_request.season}</td>
              <td>
                {new Intl.NumberFormat(locale, {
                  currency: "USD",
                  style: "currency",
                }).format(credit_request.amount)}
              </td>
              <td>
                {credit_request.purpose
                  .map((p) => p[0].toUpperCase() + p.slice(1))
                  .join(", ")}
              </td>
              <td>
                {new Intl.DateTimeFormat(locale, {
                  dateStyle: "short",
                  timeStyle: "short",
                }).format(new Date(credit_request.due_date))}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CreditRequestsTable;
