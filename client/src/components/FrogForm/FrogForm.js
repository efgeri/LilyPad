import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
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

      <button type="submit">Create Account</button>
    </form>
  );
}

export default FrogForm;
