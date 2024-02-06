import React from "react";

import ApIcon from "../../assets/icons/damage/APIcon.png";
import AdIcon from "../../assets/icons/damage/ADIcon.png";

interface DamageTypeProps {
  damageType: string;
  datas: ChampionModel[];
  setChampList: (championList: ChampionModel[]) => void;
}

interface ChampionModel {
  id?: string;
  key: string;
  name: string;
  title?: string;
  image: string;
  tags?: string[];
  damage?: string[];
}

function Filter({ damageType, datas, setChampList }: DamageTypeProps) {
  const championByDamageType = () => {
    const filteredChampions = datas.filter((champion) => {
      return (
        champion.damage && champion.damage.includes(damageType.toUpperCase())
      );
    });
    console.log(filteredChampions);
    setChampList(filteredChampions);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    switch (damageType) {
      case "ap":
        return championByDamageType();
      case "ad":
        return championByDamageType();
      default:
        <></>;
    }
  };

  const getDamageType = () => {
    switch (damageType) {
      case "ap":
        return <img src={ApIcon} alt="AP Icon" className="filters ap-damage" />;
      case "ad":
        return <img src={AdIcon} alt="AD Icon" className="filters ad-damage" />;

      default:
        <></>;
    }
  };
  return (
    <button className={"button-" + damageType} onClick={handleClick}>
      {getDamageType()}
    </button>
  );
}

export default Filter;
