import React from "react";
import TBE1 from "./tableStyles/table1";

function TablesPage() {
  return (
    <div>
      <h2>Manage Permissions</h2>
      <TBE1>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nicolas</td>
            <td>nick@gmail.com</td>
            <td>
              <button>click</button>
            </td>
          </tr>
        </tbody>
      </TBE1>
    </div>
  );
}

export default TablesPage;
