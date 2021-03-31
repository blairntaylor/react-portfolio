import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <strong>Link: GitHub</strong>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
