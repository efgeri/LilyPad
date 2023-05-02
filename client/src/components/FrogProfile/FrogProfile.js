import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getSelectedFrog, deleteFrog } from "../../services/FrogServices";
import PostForm from "../PostForm/PostForm";
import FrogPostList from "../FrogDetails/FrogPostList";

const FrogProfile = ({ loggedFrog, selectedFrog, addPost, handleProfileRender, posts, frogs, removeFrog, currentFrog }) => {
  const navigate = useNavigate();

  useEffect(() => {
    getSelectedFrog(id).then((data) => {
      return handleProfileRender(data);
    })
  }, []);

  const { id } = useParams();

  

  

  const handleDeleteProfile = async () => {
    // check to confirm if user wants to delete
    if (!window.confirm("Are you sure you want to delete your profile?")) {
      return;
    }
  
    // Call the deleteFrog function with the selectedFrog's ID to delete the profile.
    const response = await deleteFrog(loggedFrog._id);
    if (response.acknowledged) {

    console.log(response);
    // If the deletion was successful (response.ok is true),
    // if (response.ok) {
      // Navigate to the '/profile-deleted' route.
      navigate('/profile-deleted');
  
      // Update the selectedFrog state by calling the getSelectedFrog function
      // with the current ID. Since the frog is deleted, the data returned will
      // be a non-existent frog, which updates the selectedFrog state.
      getSelectedFrog(loggedFrog._id).then((data) => {
        handleProfileRender(data);
      });
  
      // Remove the deleted frog from the state by calling the removeFrog function
      // with the deleted frog's ID. This will update the frogs state, removing
      // the deleted frog from the list.
      removeFrog(loggedFrog._id); // Call the removeFrog function here
    } else {
      // If the deletion was not successful, show an alert to the user.
      alert("Failed to delete your profile. Please try again.");
    }
  };

  // deletefrog deletes the frog from the datbase
  // removeFrog updates the state
  

    
  
  
  
  
  
  

  // Defines a function that will return a delete button for a frog profile under certain conditions.
const displayDeleteButton = () => {
  // Checks if the loggedFrog and selectedFrog variables are truthy and if their _id properties are equal.
  if (loggedFrog && selectedFrog && loggedFrog._id === selectedFrog._id) {
    // Returns a button element with an onClick event that will call handleDeleteProfile when clicked.
    return (
      <button onClick={handleDeleteProfile}>
        Delete Profile
      </button>
    );
  }
  // If the condition above is not true, the function will return undefined and nothing will be displayed.
};

  

  const displayStyleCard = () => {
    if (selectedFrog === null) {
      return <p>This hopper does not exist</p>
    } else {
      return (
        <StyledCard>
          <p>
            <strong>{selectedFrog.name}</strong>
          </p>
          <StyledImage
            src={`${selectedFrog.image_url}`}
            alt={`${selectedFrog.name}'s profile picture`}
          />
        </StyledCard>
      )
    }
  }

  const styleCardDirector = displayStyleCard();

  return (
    <>
      {styleCardDirector}
      {displayDeleteButton()}
      <FrogPostList posts={posts} frogs={frogs} selectedFrog={selectedFrog} currentFrog={loggedFrog}/>
      <PostForm
        selectedFrog={selectedFrog}
        loggedFrog={loggedFrog}
        addPost={addPost}
      />
    </>
  );
};

const StyledImage = styled.img`
  width: 100%;
  border-radius: 5%;
`;

const StyledCard = styled.section`
  width: 20%;
  font-family: "Raleway", sans-serif;
  text-align: center;
  font-size: 2rem;
  padding: 10px;
  margin: 10px;
  border-radius: 5%;
  background-color: #c0ffbb;
  p {
    margin: 0.5em;
  }
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default FrogProfile;
