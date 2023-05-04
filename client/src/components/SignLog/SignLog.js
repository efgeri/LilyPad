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
      </StyledDiv>    
      <Login frogs={frogs} selectLoggedinFrog={selectLoggedinFrog} />
    </>
  );
};

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2%;
    margin-left: auto;
    margin-right: auto;
    align-items: center;

    @media screen and (max-width: 768px) {
  }
`

const StyledButton = styled.button`
    background: #84db2c;
    font-family: "Bungee", cursive;
    border: 3px double black;
    border-radius: 4px;
    height: 5rem;
    width: 10rem;
    color: red;
    
    transition: 0.3s;
    &:hover {
    background: red;
    color: #84db2c;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
`

export default SignLog;
