import FrogForm from "../FrogForm/FrogForm";
import Login from "./Login";
import styled from 'styled-components'

const SignLog = ({ addFrog, frogs, selectLoggedinFrog, logOut, loggedFrog, fetchData }) => {

  const handleLogOut = () => {
    logOut()
  }

  return (
    <>
    <StyledDiv>
      {loggedFrog ? <StyledButton onClick={handleLogOut}>Hop off</StyledButton> : <FrogForm addFrog={addFrog} fetchData={fetchData}/>}      
      <Login frogs={frogs} selectLoggedinFrog={selectLoggedinFrog} />
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 1%;
`

const StyledButton = styled.button`
    background: white;
    font-family: "Bungee", cursive;
    color: black;
    border: 2px solid black;
    border-radius: 2.5px;

    &:hover {
    background: red;
    cursor: pointer;
    }
`

export default SignLog;
