import React, { useEffect, useState } from "react";

import ApIcon from "../../assets/icons/damage/APIcon.png";
import AdIcon from "../../assets/icons/damage/ADIcon.png";
import { ChampionModel } from "../../interfaces/ChampionModel";
import "../filters/Filter.css";

interface DamageTypeProps {
  datas: ChampionModel[];
  setChampList: (championList: ChampionModel[]) => void;
}

function Filters({ datas, setChampList }: DamageTypeProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filteredChampions, setFilteredChampions] = useState(datas);
  let filters = ["AP", "AD"];

  const handleFilterButtonClick = (damageType: string) => {
    if (selectedFilters.includes(damageType)) {
      let filters = selectedFilters.filter((el) => el !== damageType);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, damageType]);
    }
  };

  useEffect(() => {
    filterChampions();
  }, [selectedFilters]);

  const filterChampions = () => {
    if (selectedFilters.length > 0) {
      const tempItems = datas.filter((champion) =>
        selectedFilters.some((damageType) =>
          champion.damage.includes(damageType)
        )
      );

      setFilteredChampions(tempItems);
    } else {
      setFilteredChampions([...datas]);
    }
  };

  useEffect(() => {
    setChampList(filteredChampions);
  }, [filteredChampions]);

  return (
    <nav className="filters-container">
      {filters.map((damageType, idx) => (
        <button
          onClick={() => handleFilterButtonClick(damageType)}
          className={`button ${
            selectedFilters?.includes(damageType) ? "active" : ""
          }`}
          key={`filters-${idx}`}
        >
          {damageType === "AP" ? (
            <img src={ApIcon} alt="AP Icon" className="filters ap-damage" />
          ) : (
            <img src={AdIcon} alt="AD Icon" className="filters ad-damage" />
          )}
        </button>
      ))}
    </nav>
  );
}

export default Filters;
