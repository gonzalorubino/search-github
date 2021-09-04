import React from "react";

// import "../css/ResultRow.css";

// name, primary languages, number of stars, number of watchers
const ResultRow = (props) => (
  <a href={props.item.repository.url}>
    {props.item.repository.name}
  </a>
);

export default ResultRow;
