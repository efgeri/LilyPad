import React, { useState } from "react";

function FrogForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [friends, setFriends] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };



  const handleSubmit = ev => {
    ev.preventDefault();
    addFrog({
      name: name,
      image: image,
      friends: friends
    });
    setName("");
    setImage(null);
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
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
}

export default FrogForm;
