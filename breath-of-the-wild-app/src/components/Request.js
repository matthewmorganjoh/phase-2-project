import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  color: white;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #ba8d04;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Request = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Description:", description);
    setName("");
    setDescription("");
  };

  return (
    <FormContainer>
      <FormTitle>Monster Request</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label>Name:</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter monster name"
            required
          />
        </FormField>
        <FormField>
          <Label>Description:</Label>
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter monster description"
            required
          ></TextArea>
        </FormField>
        <SubmitButton type="submit">Submit Request</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default Request;
