import React from "react";

import sample from "./images/sample-letter.png";

const ScriptChart = () => {
  return (
    <table className={"table is-striped is-hoverable"}>
      <thead>
        <tr>
          <th>Scriptchart</th>
          <th>
            Manuscript A{" "}
            <span className={"icon has-text-info"}>
              <i className={"fa fa-info-circle"} />
            </span>
          </th>
          <th>
            Manuscript B{" "}
            <span className={"icon has-text-info"}>
              <i className={"fa fa-info-circle"} />
            </span>
          </th>
          <th>
            Manuscript C{" "}
            <span className={"icon has-text-info"}>
              <i className={"fa fa-info-circle"} />
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Letter 1</th>
          <td>
            <img src={sample} alt={"sample letter"} />
          </td>
          <td>
            <img src={sample} alt={"sample letter"} />
          </td>
          <td>
            <img src={sample} alt={"sample letter"} />
          </td>
        </tr>
        <tr>
          <th>Letter 2</th>
          <td>
            <img src={sample} alt={"sample letter"} />
          </td>
          <td>
            <img src={sample} alt={"sample letter"} />
          </td>
          <td>
            <img src={sample} alt={"sample letter"} />
          </td>
        </tr>
        <tr>
          <th>Letter 3</th>
          <td>
            <img src={sample} alt={"sample letter"} />
          </td>
          <td>
            <img src={sample} alt={"sample letter"} />
          </td>
          <td>
            <img src={sample} alt={"sample letter"} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ScriptChart;
