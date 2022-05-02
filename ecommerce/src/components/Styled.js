import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  width: 60%;
  margin: auto;
  gap: 30px;
//   border:1px solid black;
//   padding-left:0px;
  grid-template-columns: repeat(2, 1fr);
`;

export const Select = styled.select`
  background-color: #b6ffdb;
  border: none;
  outline: none;
  padding: 4px 10px;
  font-size: 20px;
`;

export const Flex = styled.div`
  border: 2px solid #111;
  border-radius: 12px;
`;