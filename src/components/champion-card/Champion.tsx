import React from "react";
import "./Champion.css";

interface ChampionProps {
  name: string;
  image: string;
  title?: string;
}

function Champion({ name, image, title }: ChampionProps) {
  return (
    <div className="champion-card">
      <img
        rel="preload"
        loading="lazy"
        src={image}
        alt={title}
        className="champion-img"
      />
      <span className="champion-name">{name}</span>
    </div>
  );
}

export default Champion;
