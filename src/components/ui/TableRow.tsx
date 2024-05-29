import React from "react";

interface TableRowProps {
  data: React.ReactNode[];
}

const TableRow: React.FC<TableRowProps> = ({ data }) => {
  return (
    <tr>
      {data.map((cell, index) => (
        <td key={index}>{cell}</td>
      ))}
    </tr>
  );
};

export default TableRow;
