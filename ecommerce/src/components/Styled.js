import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  width: 60%;
  margin-top:10px;
  margin: auto;
  gap: 10px;

  grid-template-columns: repeat(2, 1fr);
`;

export const Select = styled.select`
  background-color: black;
 
  outline: none;
  padding: 4px 10px;
  font-size: 20px;
`;

export const Flex = styled.div`
  border: 1px solid black;
 
`;