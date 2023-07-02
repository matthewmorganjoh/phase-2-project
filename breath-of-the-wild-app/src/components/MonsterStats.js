import React from "react";
import { useParams } from "react-router-dom";

const Container=``;
const Image=``;
const Heading=``;
const Paragraph=``;


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
