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
    text-decoration: none;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    
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
margin-top: 0.5%;
form {
  width: 50%;
  padding: 10px;
  margin: 10px;
  border: 2px double white;
  border-radius: 5px;
  background-color: #84db2c;
  padding: 20px;
}
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 2px solid black;
  border-radius: 2.5px;
  font-family: "Bungee", cursive;
}
`

export default FrogList;
