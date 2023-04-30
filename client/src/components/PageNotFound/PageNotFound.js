import styled from "styled-components";

const PageNotFound = () => {
  return (
    <StyledSection>
      <h1>GET OUTTA HERE!</h1>
      <StyledImg
        src="https://images.unsplash.com/photo-1612342222980-e549ae573834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
        alt="404 not found"
      />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  font-family: "Darumadrop One", cursive;
  font-size: xx-large;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 20px auto;
  @media screen and (max-width: 768px) {
  width: 90%;
}
`;
const StyledImg = styled.img`
  width: 100%;
`;

export default PageNotFound;
