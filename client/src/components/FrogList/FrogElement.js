import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const FrogElement = ({ frog, selectFrog }) => {
  const handleSelect = () => {
    selectFrog(frog);
  };

  return (
    <Link to={`/${frog._id}/profile`}>
      <StyledList onClick={handleSelect}>
        <p>{frog.name}</p>
        <ImageContainer>
          <StyledImage
            src={`${frog.image_url}`}
            alt={`${frog.name}'s profile picture`}
          />
        </ImageContainer>
      </StyledList>
    </Link>
  );
};

const StyledList = styled.li`
  text-align: center;
  border: 2px double white;
  border-radius: 5px;
  background-color: #84db2c;
  text-decoration: none;
  margin-block: 5px;
  margin-inline: 5px;
  font-family: "Bungee", cursive;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;

  p {
    margin: 0.5em;
    text-decoration: none;
  }
  transition: 0.3s;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    color: red;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }

`;

const Link = styled(RouterLink)`
  text-decoration: none;
`;

const ImageContainer = styled.div`
  height: 10rem; 
  width: 20rem; 
  max-height: 10rem;
  max-width: 20rem;
  border-radius: 5px;
  border: 2px double white;
  overflow: hidden;
  margin: 0.5rem;
  display: flex; 
  justify-content: center; 
  align-items: center; 

  @media screen and (max-width: 768px) {
    width: 95%; 
    height: 95%;

  }
`;


const StyledImage = styled.img`
  width: 100%; 
  height: 100%; 
  box-sizing: border-box;
  display: inline-block;

  @media screen and (max-width: 768px) {
    width: 100%; 
    height: 100%; 

  }
`;

export default FrogElement;
