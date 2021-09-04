import React from "react";

// import "../css/ResultRow.css";

// name, primary languages, number of stars, number of watchers
const ResultRow = (props) => (
  <div>
    <a href={props.item.html_url} target="_blank" rel="noreferrer">
      {props.item.name}
    </a>
    &nbsp;||&nbsp;
    <a href={props.item.owner.html_url}>Owner: {props.item.owner.login}</a>
    <p>
      <span>Description: {props.item.description}</span>
      <br />
      <span>Forks: {props.item.forks}</span>
      <br />
      <span>Watchers: {props.item.watchers}</span>
      <br />
      <span>Stars: {props.item.stargazers_count}</span>
      <br />
      <span>Last update: {props.item.updated_at}</span>
      <br />
      <span>Private?: {props.item.private ? "Yes" : "No"}</span>
      <br />
      <span>Has Wiki?: {props.item.has_wiki ? "Yes" : "No"}</span>
      <br />
    </p>
    <a href={props.item.languages_url}>Languages</a>
    <br />
    <a href={props.item.issues_url}>Issues</a>
    <hr />
  </div>
);

export default ResultRow;
