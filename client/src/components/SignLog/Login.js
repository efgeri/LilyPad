import FrogList from "../FrogList/FrogList";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = ({ frogs, selectLoggedinFrog }) => {
  return (
    <StyledSection>
    <br/>
    <StyledDiv>
      <h2>Login</h2>
      </StyledDiv>
      <FrogList frogs={frogs} selectFrog={selectLoggedinFrog} />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Bungee", cursive;
  a {
    text-decoration: none;
    &:visited {
      color: black;
    }
  }
  h2{
  -webkit-text-stroke-width: 0.75px;
  -webkit-text-stroke-color: black;
  color: red;
  }
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column; 
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 768px) {
  }
`

export default Login;
