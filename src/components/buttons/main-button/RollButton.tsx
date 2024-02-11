import React from "react";
import "./MainButtons.css";
import { ChampionModel } from "../../../interfaces/ChampionModel";

interface RollButtonProps {
  datas: Array<ChampionModel>;
  setRandomChamp: (champ: ChampionModel) => void;
}

function RollButton({ datas, setRandomChamp }: RollButtonProps) {
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
