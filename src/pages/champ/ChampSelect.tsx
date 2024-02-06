import React, { useState } from "react";
import App from "../../components/ContainerApp";
import championJson from "../../datas/champion.json";
import Champion from "../../components/champion-card/Champion";
import "../Pages.css";

import { useParams } from "react-router-dom";
import RollButton from "../../components/buttons/main-button/RollButton";

export interface ChampionModel {
  key: string;
  name: string;
  image: string;
}

function ChampSelect() {
  let { id } = useParams();
  const [randomChamp, setRandomChamp] = useState<ChampionModel>();

  const championByRole: Array<ChampionModel> = championJson.filter(
    (champion) => {
      return champion ? champion.tags.includes(id ?? "") : null;
    }
  );

  return (
    <App>
      <div className="champions-content">
        {!randomChamp ? (
          <div className="champions-list">
            {championByRole.map(({ name, key, image }) => (
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
            datas={championByRole}
            setRandomChamp={(champ: ChampionModel) => setRandomChamp(champ)}
          />
        </div>
      </div>
    </App>
  );
}

export default ChampSelect;
