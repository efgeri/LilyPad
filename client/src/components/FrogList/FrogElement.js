import styled from "styled-components"



const FrogElement = ({ frog, selectFrog }) => {
  console.log(frog)
  const handleSelect = () => {
    selectFrog(frog)
  }
  return (
    <StyledList onClick={handleSelect}>
      <p><strong>{frog.name}</strong></p>
      <StyledImage src={`${frog.image_url}`} alt={`${frog.name}'s profile picture`} />
    </StyledList>
  );
};

const StyledImage = styled.img`
width: 100%;
border-radius: 5%;
`
const StyledList = styled.li`
/* flex: 0 1 20; */
width: 20%;
font-family: "Raleway", sans-serif;
text-align: center;
font-size: 2rem;
padding: 10px;
margin: 15px;
margin-bottom: 25px;
border-radius: 5%;
background-color: #C0FFBB;
p {
    margin: 0.5em;
}
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
  box-shadow: 0 12px 24px 0 rgba(0,0,0,0.2);
  cursor: pointer;
}
@media screen and (max-width: 800px) {
  width: 90%;
}

`

export default FrogElement;
