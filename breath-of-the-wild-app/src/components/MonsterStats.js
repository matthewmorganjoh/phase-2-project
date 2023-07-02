import React from "react";
import { useParams } from "react-router-dom";

function MonsterStats({ data }) {
  const { id } = useParams();

  const monster = data.find((monster) => monster.id.toString() === id);

  return (
    <div>
      {monster ? (
        <div>
          <h2>{monster.name}</h2>
          <img src={monster.image} alt={monster.name} />
          <p>Description: {monster.description}</p>
          <p>Common Locations: {monster.common_locations && monster.common_locations.length > 1 ? monster.common_locations.join(", ") : monster.common_locations}</p>
        </div>
      ) : (
        <p>Monster not found</p>
      )}
    </div>
  );
}

export default MonsterStats;