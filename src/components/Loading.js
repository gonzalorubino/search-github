import React from "react";
import { Spinner } from "react-bootstrap";

import '../css/Loading.css';

const Loading = () => (
  <div className="loading col-4 m-auto d-flex">
    <Spinner animation="grow" variant="primary" />
    <p>Loading...</p>
  </div>
);

export default Loading;
