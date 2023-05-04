import { useState } from "react";
import FrogElement from "./FrogElement";
import styled from "styled-components";

const FrogList = ({ frogs, selectFrog }) => {

  const [searchTerm, setSearchTerm] = useState("");
  
  if (!frogs.length) {
    return <p>Oh, oh! We could not load the users information. Please try again later.</p>
  }
  
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
    <>
    <SearchContainer>
     <StyledForm onSubmit={handleSubmit}>
      <input
        onChange={changeSearchTerm}
        type="text"
        name="searchTerm"
        placeholder="Search Frogs"
        value={searchTerm} />
    </StyledForm>
    </SearchContainer>
    <StyledSection>
      <StyledList>{allFrogs}</StyledList>
    </StyledSection>
    </>
  );
};

const StyledSection = styled.section`
  width: 100%;
`

const StyledList = styled.ul`
    list-style: none;
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5%;
  margin-inline: auto;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

const StyledForm = styled.form`

  padding: 10px;
  margin: 10px;
  border: 2px double white;
  border-radius: 5px;
  background-color: #84db2c;
  padding: 2 4rem;
  
input {
  width: 100%;
  padding: 1 2rem;
  display: inline-block;
  border: 2px solid black;
  border-radius: 2.5px;
  font-family: "Bungee", cursive;
}
`

export default FrogList;
