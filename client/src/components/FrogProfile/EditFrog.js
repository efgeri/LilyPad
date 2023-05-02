import { useState } from "react";

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
      <form onSubmit={handleEditFrog}>
        <label htmlFor="name">Update your name: </label>
        <input type="text" id="name" name="name" value={updatedName} onChange={handleNameChange}/>
        <label htmlFor="picture">Make your photo unfrogetable: </label>
        <input type="text" id="picture" name="picture" value={updatedImage} onChange={handleImageChange}/>
        <button>Submit changes</button>
      </form>
    </>
  );
};

export default EditFrog;