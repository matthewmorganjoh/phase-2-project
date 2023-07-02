import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "../images/texture.jpeg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const Heading = styled.h2`
  font-size: 28px;
  color: #FFFFFF;
  margin-bottom: 4px;
`;

const Paragraph = styled.p`
  color: #FFFFFF;
  margin-bottom: 10px;
  padding: 0 300px;
`;

function MonsterStats({ data }) {
  const { id } = useParams();

  const monster = data.find((monster) => monster.id.toString() === id);

  return (
    <Container>
      {monster ? (
        <>
          <Heading>{monster.name.toUpperCase()}</Heading>
          <Image src={monster.image} alt={monster.name} />
          <Heading>Description</Heading>
          <Paragraph>{monster.description}</Paragraph>
          <Heading>Common Locations</Heading>
          <Paragraph>
            {" "}
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
