import React from "react";
import "./Champion.css";

function Champion({ name, image, title }) {
  return (
    <div className="champion-card">
      <img src={image} alt={title} className="champion-img" />
      <span className="champion-name">{name}</span>
    </div>
  );
}

export default Champion;
