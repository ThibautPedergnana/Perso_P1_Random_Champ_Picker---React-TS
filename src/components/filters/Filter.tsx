import React, { useState } from "react";

import ApIcon from "../../assets/icons/damage/APIcon.png";
import AdIcon from "../../assets/icons/damage/ADIcon.png";
import { ChampionModel } from "../../interfaces/ChampionModel";
import "../filters/Filter.css";

interface DamageTypeProps {
  datas: ChampionModel[];
  setChampList: (championList: ChampionModel[]) => void;
}

function Filters({ datas, setChampList }: DamageTypeProps) {
  const [apIsActive, setApIsActive] = useState<boolean>(false);
  const [adIsActive, setAdIsActive] = useState<boolean>(false);
  const [originalDatas, setOriginalDatas] = useState(datas);

  const championByDamageType = (name: string) => {
    const filteredChampions = datas.filter((champion) => {
      return champion.damage && champion.damage.includes(name);
    });
    setChampList(filteredChampions);
  };

  const handleClick = (name: string) => {
    if (name === "AP") {
      setApIsActive(!apIsActive);
      if (!apIsActive) {
        setOriginalDatas(datas); // Sauvegarde des données d'origine avant de filtrer
        championByDamageType(name);
      } else {
        setChampList(originalDatas); // Réinitialisation de la liste complète
      }
    }
    if (name === "AD") {
      setAdIsActive(!adIsActive);
      if (!adIsActive) {
        setOriginalDatas(datas); // Sauvegarde des données d'origine avant de filtrer
        championByDamageType(name);
      } else {
        setChampList(originalDatas); // Réinitialisation de la liste complète
      }
    }
  };

  return (
    <nav className="filters-container">
      <button
        name="AP"
        className="filter-button button-ap"
        onClick={(e) => handleClick(e.currentTarget.name)}
      >
        <img src={ApIcon} alt="AP Icon" className="filters ap-damage" />
      </button>
      <button
        name="AD"
        className="filter-button button-ad"
        onClick={(e) => handleClick(e.currentTarget.name)}
      >
        <img src={AdIcon} alt="AD Icon" className="filters ad-damage" />
      </button>
    </nav>
  );
}

export default Filters;
