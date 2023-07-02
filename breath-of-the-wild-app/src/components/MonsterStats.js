import React from "react";
import { useParams } from "react-router-dom";

function MonsterStats({ data }) {
  const { id } = useParams();

  // Find the monster based on the id parameter
  const monster = data.find((monster) => monster.id === id);

  return (
    <div>
      {monster ? (
        <div>
          <h2>{monster.name}</h2>
          <img src={monster.image} alt={monster.name} />
          <p>Stats: {monster.stats}</p>
        </div>
      ) : (
        <p>Monster not found</p>
      )}
    </div>
  );
}

export default MonsterStats;