import React, { useState, ChangeEvent } from "react";
import { ChampionModel } from "../../interfaces/ChampionModel";

interface DamageTypeProps {
  datas: ChampionModel[];
  setChampList: (championList: ChampionModel[]) => void;
}

function SearchBar({ datas, setChampList }: DamageTypeProps) {
  const [search, setSearch] = useState("");
  const [originalDatas, setOriginalDatas] = useState(datas);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    setSearch(searchText);

    if (searchText === "") {
      setChampList(originalDatas);
    } else {
      const filteredChampions = originalDatas.filter((champion) =>
        champion.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setChampList(filteredChampions);
    }
  };

  return (
    <div>
      <input id="search" type="text" value={search} onChange={handleSearch} />;
    </div>
  );
}

export default SearchBar;
