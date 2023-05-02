import { useState } from "react";

const EditFrog = ({ loggedFrog, selectedFrog }) => {

  const [updatedName, setUpdatedName] = useState("");
  const [updatedImage, setUpdatedImage] = useState("");



  const handleEditFrog = (e) => {
            console.log(e)
  }

  return (
    <>
      <form onSubmit={handleEditFrog}>
        <label htmlFor="name">Update your name: </label>
        <input type="text" id="name" name="name" placeholder="name" />
        <label htmlFor="picture">Make your photo unfrogetable: </label>
        <input type="text" id="picture" name="picture" placeholder="picture" />
        <button>Submit changes</button>
      </form>
    </>
  );
};

export default EditFrog;

// if (loggedFrog === selectedFrog) {
//     const handleEditFrog = (e) => {
//         console.log(e)
//     
