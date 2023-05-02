import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const FrogElement = ({ frog, selectFrog }) => {
  const handleSelect = () => {
    selectFrog(frog);
  };
  
  return (
    <Link to={`/${frog._id}/profile`}>
      <StyledList onClick={handleSelect}>
        <p>
          {frog.name}
        </p>
        <StyledImage
          src={`${frog.image_url}`}
          alt={`${frog.name}'s profile picture`}
        />
      </StyledList>
    </Link>
  );
};

const StyledImage = styled.img`
  max-width: 20rem;
  border: 2px double white;
  border-radius: 5px;
  @media screen and (max-width: 800px) {
  max-width: 100%;
  }
`;

const StyledList = styled.li`
  text-align: center;
  border: 2px double white;
  border-radius: 5px;
  padding: 1rem;
  background-color: #84db2c;
  text-decoration: none;
  margin: 1rem;
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
