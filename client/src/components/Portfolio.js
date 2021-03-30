import React from "react";
import Card from "../components/Card";

function Portfolio() {
  return (
    <>
      <div className="card-container">
        <div className="row">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="row">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
