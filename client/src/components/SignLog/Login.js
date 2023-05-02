import FrogList from "../FrogList/FrogList";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = ({ frogs, selectLoggedinFrog }) => {
  return (
    <StyledSection>
    <br/>
      <h2>Login</h2>
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

export default Login;
