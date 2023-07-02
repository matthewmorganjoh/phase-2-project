import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const Heading = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  color: #555;
  margin-bottom: 10px;
`;

function MonsterStats({ data }) {
  const { id } = useParams();

  const monster = data.find((monster) => monster.id.toString() === id);

  return (
    <Container>
      {monster ? (
        <>
          <Heading>{monster.name}</Heading>
          <Image src={monster.image} alt={monster.name} />
          <Paragraph>Description: {monster.description}</Paragraph>
          <Paragraph>
            Common Locations:{" "}
            {monster.common_locations &&
            monster.common_locations.length > 1
              ? monster.common_locations.join(", ")
              : monster.common_locations}
          </Paragraph>
        </>
      ) : (
        <p>Monster not found</p>
      )}
    </Container>
  );
}

export default MonsterStats;
