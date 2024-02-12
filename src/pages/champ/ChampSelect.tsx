import React, { useState } from "react";
import App from "../../components/ContainerApp";
import championJson from "../../datas/champion.json";
import Champion from "../../components/champion-card/Champion";
import "../Pages.css";
import "../champ/ChampSelect.css";

import { useParams } from "react-router-dom";
import RollButton from "../../components/buttons/main-button/RollButton";
import Filters from "../../components/filters/Filter";
import { ChampionModel } from "../../interfaces/ChampionModel";
import SearchBar from "../../components/search/SearchBar";

type ChampListModel = ChampionModel[];

function ChampSelect() {
  let { id } = useParams();
  const championByRole: Array<ChampionModel> = championJson.filter(
    (champion) => {
      return champion ? champion.tags.includes(id ?? "") : null;
    }
  );

  const [randomChamp, setRandomChamp] = useState<ChampionModel>();
  const [champList, setChampList] = useState<ChampListModel>(championByRole);
  return (
    <App>
      <div className="content">
        <div className="list-header">
          <Filters
            datas={champList}
            setChampList={(championList: ChampListModel) =>
              setChampList(championList)
            }
          />
          <SearchBar
            datas={champList}
            setChampList={(championList: ChampListModel) =>
              setChampList(championList)
            }
          />
        </div>
        <div className="champions-content">
          {!randomChamp ? (
            <div className="champions-list">
              {champList.map(({ name, key, image }) => (
                <Champion key={"champion" + key} name={name} image={image} />
              ))}
            </div>
          ) : (
            <Champion
              key={"champion" + randomChamp.key}
              name={randomChamp.name}
              image={randomChamp.image}
            />
          )}
          <div className="main-button-container">
            <RollButton
              datas={champList}
              setRandomChamp={(champ: ChampionModel) => setRandomChamp(champ)}
            />
          </div>
        </div>
      </div>
    </App>
  );
}

export default ChampSelect;
