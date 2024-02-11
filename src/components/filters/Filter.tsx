import React, { useState } from "react";

import ApIcon from "../../assets/icons/damage/APIcon.png";
import AdIcon from "../../assets/icons/damage/ADIcon.png";
import { ChampionModel } from "../../interfaces/ChampionModel";

interface DamageTypeProps {
  damageType: "ap" | "ad";
  datas: ChampionModel[];
  setChampList: (championList: ChampionModel[]) => void;
}

function Filter({ damageType, datas, setChampList }: DamageTypeProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [originalDatas, setOriginalDatas] = useState(datas);

  const championByDamageType = () => {
    const filteredChampions = datas.filter((champion) => {
      return (
        champion.damage && champion.damage.includes(damageType.toUpperCase())
      );
    });
    setChampList(filteredChampions);
  };

  const handleClick = () => {
    if (!isActive) {
      setOriginalDatas(datas); // Sauvegarde des données d'origine avant de filtrer
      championByDamageType();
    } else {
      setChampList(originalDatas); // Réinitialisation de la liste complète
    }
    setIsActive(!isActive); // Inversion de l'état d'activation du filtre
  };

  const getDamageType = () => {
    if (damageType === "ap") {
      return <img src={ApIcon} alt="AP Icon" className="filters ap-damage" />;
    }
    return <img src={AdIcon} alt="AD Icon" className="filters ad-damage" />;
  };
  return (
    <button className={"button-" + damageType} onClick={handleClick}>
      {getDamageType()}
    </button>
  );
}

export default Filter;
