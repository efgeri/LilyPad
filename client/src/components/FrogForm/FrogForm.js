import React, { useState } from "react";
import styled from "styled-components";

const FrogForm = ({addFrog}) => {
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
  }

  
  

  return (
    <StyledForm onSubmit={handleSubmit}>
    <StyledFields>
    <h2>Create a new frog or log in</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Profile Picture:</label>
        <input
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

const StyledFields = styled.fieldset`
background: white;
  border: 0 none;
  border-radius: 3px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  padding: 20px 30px;
  box-sizing: border-box;
  width: 80%;
  margin: 0 10%;
`

const StyledForm = styled.form`
 width: 33.3333%;
  margin: 50px auto;
  text-align: center;
  position: relative;
  input {
    padding: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  color: #2c3e50;
  font-size: 13px;
  }

`
const StyledBtn = styled.button`
   width: 33.33333%;
  background: #27ae60;
  font-weight: bold;
  color: white;
  border: 0 none;
  border-radius: 1px;
  cursor: pointer;
  padding: 10px;
  margin: 10px 5px;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    box-shadow: 0 0 0 2px white, 0 0 0 3px #27ae60;
  }
`

export default FrogForm;
