import React from "react";

export interface CreditRequestsTableProps {
  data: {
    items: any[];
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
              <td>Malcolm Lockyer</td>
              <td>Lorem</td>
              <td>1961</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CreditRequestsTable;
