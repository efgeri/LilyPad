import { useState, useEffect } from "react";
import styled from "styled-components";
import PostList from "../Posts/PostList";

// This component takes in three props: `loggedFrog`, `selectedFrog`, and `frog`
const FrogDetails = ({ loggedFrog, selectedFrog, frog }) => {
  // `postsByID` is a state variable that will hold the posts belonging to the frog
  const [postsByID, setPostsByID] = useState([]);

  console.log(selectedFrog)

  // This useEffect hook will run when `selectedFrog` changes
  useEffect(() => {
    console.log(selectedFrog?._id)
    // Fetch the frog's posts from the API using the frog's ID
    fetch(`http://localhost:9000/api/posts`)
      .then((response) => response.json())
      .then((data) => {
        const results = data.filter(post => post.poster === selectedFrog?._id)
        setPostsByID(results)
      
      });
  }, [selectedFrog]);

  // Render the selected frog's name, profile picture, and their posts using the PostList component
  return (
      <>
      <img src={`${selectedFrog?.image_url}`} alt={`${frog?.name}'s profile picture`} />
      <h2>{selectedFrog?.name}</h2>
      <h3>Posts by {selectedFrog?.name}</h3>
      <PostList posts={Object.values(postsByID)} frogs={[selectedFrog, loggedFrog]} />
      </>
  );
};

export default FrogDetails;
