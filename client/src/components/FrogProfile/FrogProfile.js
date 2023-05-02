import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getSelectedFrog } from "../../services/FrogServices";
import PostForm from "../PostForm/PostForm";
import FrogPostList from "../FrogDetails/FrogPostList";
import EditFrog from "./EditFrog";
import DeleteFrog from "./DeleteFrog";

const FrogProfile = ({
  loggedFrog,
  selectedFrog,
  addPost,
  handleProfileRender,
  posts,
  frogs,
  deleteFrogAccount
}) => {
  useEffect(() => {
    getSelectedFrog(id).then((data) => {
      return handleProfileRender(data);
    });
  }, []);

  const { id } = useParams();

  const displayStyleCard = () => {
    if (selectedFrog === null) {
      return <p>We could not find this hopper</p>;
    } else {
      return (
        <StyledSection><StyledCard>
          <p>
            <strong>{selectedFrog.name}</strong>
          </p>
        <StyledImageDiv>
          <StyledImage
            src={`${selectedFrog.image_url}`}
            alt={`${selectedFrog.name}'s profile picture`}
          />
        </StyledImageDiv>
        </StyledCard>
      </StyledSection>
      );
    }
  };
  const styleCardDirector = displayStyleCard();

  const editProfileDirector = () => {
    if (loggedFrog && selectedFrog && loggedFrog._id === selectedFrog._id) {
      return (
        <>
        <EditFrog loggedFrog={loggedFrog} selectedFrog={selectedFrog}/>
        <DeleteFrog loggedFrog={loggedFrog} deleteFrogAccount={deleteFrogAccount} />

        </>
      )
    } else {
      return null;
    }
  }

  return (
    <>
      {editProfileDirector()}
      {styleCardDirector}
      <FrogPostList posts={posts} frogs={frogs} />
      <PostForm
        selectedFrog={selectedFrog}
        loggedFrog={loggedFrog}
        addPost={addPost}
      />
    </>
  );
};

const StyledSection = styled.section`
display: flex;
justify-content: center;
`

const StyledImage = styled.img`
  border-radius: 5px;
  border: 2px double white;
  max-width: 25rem;
  display: flex;
justify-content: center;
width: 80%;

  @media (max-width: 778px) {
    width: 80%;
  }
`;

const StyledImageDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5%;
`

const StyledCard = styled.section`
  font-family: "Bungee", cursive;
  color: white;
  -webkit-text-stroke-width: 0.75px;
  -webkit-text-stroke-color: black;
  text-align: center;
  font-size: 2rem;
  border: 2px double white;
  border-radius: 5px;
  margin-top: 1%;
  background-color: #84db2c;
  display: flex;
  flex-direction: column;
  width: 35%;
  padding-bottom: 1%;

  @media (max-width: 768px) {
    font-size: 100%;
  }

  p {
    margin: 0.5em;
  }
  transition: 0.3s;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    color: red;
    cursor: pointer;
  }
`;


export default FrogProfile;
