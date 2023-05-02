import styled from "styled-components";

const DeleteFrog = ({loggedFrog, deleteFrogAccount}) => {

    const handleAccountDelete = () => {
        if (!window.confirm("Are you sure you want to delete your profile?")) {
            return;
          }
        deleteFrogAccount(loggedFrog._id)
    }
    return (  
        <>
        <StyledButton onClick={handleAccountDelete}>Delete Account</StyledButton>
        </>
    );
}

const StyledButton = styled.button`
    background: red;
    font-family: "Bungee", cursive;
    color: black;
    border: 3px double black;
    border-radius: 4px;
    height: 3.75rem;
    width: 7.5rem;

    transition: 0.3s;
    &:hover {
    background: black;
    color: #84db2c;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border: 3px solid red;
    border-radius: 4px;
    }
`
 
export default DeleteFrog;