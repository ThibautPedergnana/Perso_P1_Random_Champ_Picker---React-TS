import React from "react";
import "./MainButtons.css";

function RollButton({ datas, setRandomChamp }) {
  const getRandomChamp = () => {
    const randomIndex = Math.floor(Math.random() * datas.length);
    const selectedRandomChamp = datas[randomIndex];
    setRandomChamp(selectedRandomChamp);
  };

  return (
    <button className="main-button btn" onClick={getRandomChamp}>
      ROLL
    </button>
  );
}

export default RollButton;
