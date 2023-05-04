import { useState } from "react";
import styled from "styled-components";

const EditFrog = ({ loggedFrog, updateFrogProfile }) => {

  const [updatedName, setUpdatedName] = useState(loggedFrog.name);
  const [updatedImage, setUpdatedImage] = useState(loggedFrog.image_url);

  const handleNameChange = (e) => {
    setUpdatedName(e.target.value);
  };

  const handleImageChange = (e) => {
    setUpdatedImage(e.target.value);
  };

  const handleEditFrog = (e) => {
    e.preventDefault()
    const payload = {
      name: updatedName,
      image_url: updatedImage
    }
    const id = loggedFrog._id
    updateFrogProfile(id, payload)
  }

  return (
    <>
      <StyledForm onSubmit={handleEditFrog}>
        <label htmlFor="name">Update your name</label>
        <br/>
        <StyledInput type="text" id="name" name="name" value={updatedName} onChange={handleNameChange}/>
        <br/>
        <label htmlFor="picture">Make your photo unfrogetable</label>
        <br/>
        <StyledInput type="text" id="picture" name="picture" value={updatedImage} onChange={handleImageChange}/>
        <br/>
        <StyledButton>Submit changes</StyledButton>
        <br/>
      </StyledForm>
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "Bungee", cursive;
  text-align: center;
`

const StyledInput = styled.input`
  font-family: "Bungee", cursive;
`

const StyledButton = styled.button`
    background: red;
    font-family: "Bungee", cursive;
    color: black;
    border: 3px double black;
    border-radius: 4px;
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
export default EditFrog;