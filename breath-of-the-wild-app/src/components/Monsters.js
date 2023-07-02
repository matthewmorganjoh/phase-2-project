import React from "react";

function Monsters({ data }) {
  return (
    <div>
      <p>Monsters</p>
      {data && data.length > 0 ? (
        data.map((monster, i) => (
          <div key={i}>
            <img src={monster.image} alt={monster.name} />
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
