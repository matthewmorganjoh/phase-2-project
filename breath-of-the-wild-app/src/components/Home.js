import React from "react";
import styled from "styled-components";
import backgroundImage from "../images/botw_box_art.jpeg";


const Container = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #FFFFFF;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  color: #FFFFFF;
  margin-bottom: 10px;
  padding-right: 350px;
`;

function Home() {
  return (
    <Container>
      <Heading>Welcome to the Home Page!</Heading>
      <Paragraph>
        Thank you for visiting.
        To view all Monsters in the Hyrule Compendium, 
        click the Monsters button in the navigation bar!
      </Paragraph>
    </Container>
  );
}

export default Home;