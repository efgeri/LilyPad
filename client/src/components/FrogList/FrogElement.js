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

const ImageContainer = styled.div`
  height: 10rem; // add this line
  width: 20rem; // add this line
  max-height: 10rem;
  max-width: 20rem;
  /* min-width: 20rem; */
  border-radius: 5px;
  border: 2px double white;
  overflow: hidden;
  margin: 0.5rem;
  display: flex; // add this line
  justify-content: center; // add this line
  align-items: center; // add this line

  @media screen and (max-width: 768px) {
    width: 95%; // change this line
    height: 95%; // change this line
    /* border: none; */
  }
`;


const StyledImage = styled.img`
  width: 100%; // change this line
  height: 100%; // change this line
  box-sizing: border-box;
  display: inline-block;
  /* object-fit: cover; */

  @media screen and (max-width: 768px) {
    width: 100%; // change this line
    height: 100%; // change this line

  }
`;

const StyledList = styled.li`
  text-align: center;
  border: 2px double white;
  border-radius: 5px;
  background-color: #84db2c;
  text-decoration: none;
  margin-block: 5px;
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

export default FrogElement;
