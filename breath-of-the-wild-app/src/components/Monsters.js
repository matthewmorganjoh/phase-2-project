import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const GridItem = styled.div`
  flex: 0 0 calc(33% - 20px);
  max-width: calc(33% - 20px);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

function Monsters({ data }) {
  return (
    <div>
      <h1>Monsters</h1>
      <GridContainer>
        {data && data.length > 0 ? (
          data.map((monster, i) => (
            <GridItem key={i}>
              <Link to={`/monsters/${monster.id}`}>
                <Image src={monster.image} alt={monster.name} />
              </Link>
              <p>{monster.name}</p>
            </GridItem>
          ))
        ) : (
          <p>No monsters found</p>
        )}
      </GridContainer>
    </div>
  );
}

export default Monsters;
