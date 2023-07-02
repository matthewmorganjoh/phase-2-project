import React from "react";
import { Link } from "react-router-dom";

function Monsters({ data }) {
  return (
    <div>
      <h1>Monsters</h1>
      {data && data.length > 0 ? (
        data.map((monster, i) => (
          <div key={i}>
            <Link to={`/monsters/${monster.id}`}>
              <img src={monster.image} alt={monster.name} />
            </Link>
            <p>{monster.name}</p>
          </div>
        ))
      ) : (
        <p>No monsters found</p>
      )}
    </div>
  );
}

export default Monsters;