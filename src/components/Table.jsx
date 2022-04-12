import React from "react";
import "../css/table.css";

function Table({ details }) {
  const { headings, detail } = details;

  return (
    <>
      <table>
        <thead>
          <tr className="heading_row">
            {headings?.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {detail?.map(({ id, info }) => (
            <tr key={id}>
              {info.map((data, index) => (
                <td key={index}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
