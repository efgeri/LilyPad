import FrogList from "../FrogList/FrogList";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = ({ frogs, selectLoggedinFrog }) => {
  return (
    <StyledSection>
      <h2>Login</h2>
      <FrogList frogs={frogs} selectFrog={selectLoggedinFrog} />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
    &:visited {
      color: black;
    }
  }
`;

export default Login;
