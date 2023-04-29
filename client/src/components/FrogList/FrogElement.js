import styled from "styled-components"



const FrogElement = ({ frog, selectFrog }) => {
  const handleSelect = () => {
    selectFrog(frog)
  }
  return (
    <StyledList>
      <p onClick={handleSelect}><strong>{frog.name}</strong></p>
      <StyledImage src={`${frog.image_url}`} alt={`${frog.name}'s profile picture`} />
    </StyledList>
  );
};

const StyledImage = styled.img`
width: 100%;
`
const StyledList = styled.li`
font-family: "Raleway", sans-serif;
text-align: center;
font-size: 2rem;
p {
    margin: 0.5em;
}
`

export default FrogElement;
