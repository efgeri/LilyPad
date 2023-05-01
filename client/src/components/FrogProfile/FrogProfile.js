import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getSelectedFrog } from "../../services/FrogServices";
import PostForm from "../PostForm/PostForm";
import FrogPostList from "../FrogDetails/FrogPostList";

const FrogProfile = ({ loggedFrog, selectedFrog, addPost, handleProfileRender, posts, frogs }) => {
  
  useEffect(() => {
    getSelectedFrog(id).then((data) => {
      return handleProfileRender(data);
    })
  }, []);

  const { id }  = useParams()

const displayStyleCard = () => {
  if (selectedFrog === null) {
    return <p>This hopper does not exist</p>
  } else {
    return (<StyledCard>
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

  const styleCardDirector = displayStyleCard()

  return (
    <>
      {styleCardDirector}
      <FrogPostList posts={posts} frogs={frogs}/>
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
