import { useState } from "react";
import FrogElement from "./FrogElement";
import styled from "styled-components";

const FrogList = ({ frogs, selectFrog }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const lowerSearch = searchTerm.toLowerCase();
  const filteredFrogs = frogs.filter((frog) => {
    return frog.name.toLowerCase().indexOf(lowerSearch) > -1;
  })

  const allFrogs = filteredFrogs.map((frog) => {
    return <FrogElement selectFrog={selectFrog} frog={frog} key={frog._id} />;
  });

  const changeSearchTerm = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <StyledSection>
     <form onSubmit={handleSubmit}>
      <input
        onChange={changeSearchTerm}
        type="text"
        name="searchTerm"
        placeholder="Filter Frogs"
        value={searchTerm} />
    </form>
      <StyledList>{allFrogs}</StyledList>
    </StyledSection>
  );
};

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
form {
  width: 50%;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background-color: #C0FFBB;
  padding: 20px;
}
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
}
`

export default FrogList;
