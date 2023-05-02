import React, { useState } from "react";
import styled from "styled-components";

const FrogForm = ({addFrog, fetchData}) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [friends, setFriends] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
    
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    addFrog({
      name: name,
      image_url: image,
      friends: friends
    });
    setName("");
    setImage("");
    setFriends([]);
    fetchData()    
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
    <StyledFields>
    <h2>Create a new account or frog-in</h2>
      <div>
        <label htmlFor="name">Name</label>
        <br/>
        <StyledInput
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Profile Picture</label>
        <br/>
        <StyledInput
        type="text"
        id="image"
        name="image"
        value={image}
        onChange={handleImageChange}
        required
  />
</div>

      <StyledBtn type="submit">Create Account</StyledBtn>
      </StyledFields>
    </StyledForm>
  );
}

const StyledForm = styled.form`
`

const StyledFields = styled.fieldset`
background-color: #84db2c;
font-family: "Bungee", cursive;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
border: 2px double white;
border-radius: 5px;
margin-top: 2.5%;
padding-bottom: 1.75%;


  h2{
    color: red;
    -webkit-text-stroke-width: 0.75px;
    -webkit-text-stroke-color: black;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  font-family: "Bungee", cursive;
  margin-top: 1%;
  border: 2px solid black;
  border-radius: 2.5px;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
`;

const StyledBtn = styled.button`
    background: white;
    font-family: "Bungee", cursive;
    color: black;
    border: 2px solid black;
    border-radius: 2.5px;
    margin-top: 0.5%;

    &:hover {
    background: red;
    cursor: pointer;
    }
`;



export default FrogForm;
