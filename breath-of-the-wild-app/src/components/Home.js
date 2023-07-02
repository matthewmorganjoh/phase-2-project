import React from "react";
import styled from "styled-components";

const Container = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  color: #555;
  margin-bottom: 10px;
`;

function Home() {
  return (
    <Container>
      <Heading>Welcome to the Home Page!</Heading>
      <Paragraph>
        Thank you for visiting. This is the home page of your application.
      </Paragraph>
    </Container>
  );
}

export default Home;
