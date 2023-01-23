import React from "react";

function CreditRequestsTable() {
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
        <tr>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>Lorem</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>Ipsum</td>
          <td>1972</td>
        </tr>
        <tr>
          <td>Shining Star</td>
          <td>Earth, Wind, and Fire</td>
          <td>Dolor</td>
          <td>1975</td>
        </tr>
      </tbody>
    </table>
  );
}

export default CreditRequestsTable;
