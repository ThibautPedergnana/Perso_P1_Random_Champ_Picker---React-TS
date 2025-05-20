import React, { useState, ChangeEvent } from "react";
import { ChampionModel } from "../../interfaces/ChampionModel";
import "../search/SearchBar.css";

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
    <div className="input-container">
      <input
        id="search"
        className="input-field"
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;
