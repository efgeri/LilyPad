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
  deleteFrogAccount,
  updateFrogProfile
}) => {
  useEffect(() => {
    console.log("I'm here")
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
        <StyledSection>
        <StyledCard>
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
        <EditForm>
        <EditFrog loggedFrog={loggedFrog} updateFrogProfile={updateFrogProfile} />
        <DeleteFrog loggedFrog={loggedFrog} deleteFrogAccount={deleteFrogAccount} />
        </EditForm>
      )
    } else {
      return null;
    }
  }

  const relevantPosts = posts.filter(
    (post) =>  post.receiver === id
  );

  return (
    <>
    <ProfileSection>
    {selectedFrog ? <Title>{selectedFrog.name}</Title> : "No such frog"}
    <TopSection>
      {styleCardDirector}
      {editProfileDirector()}
      </TopSection>
      <PostFormController>
      <PostForm
        selectedFrog={selectedFrog}
        loggedFrog={loggedFrog}
        addPost={addPost}
      />
      </PostFormController>
      <FrogPostList posts={relevantPosts} frogs={frogs} />
      </ProfileSection>
    </>
  );
};

const ProfileSection = styled.section`
font-family: "Bungee", cursive;
`

const Title = styled.h1`
text-align: center;
font-size: 3rem;
color: red;
  -webkit-text-stroke-width: 0.75px;
  -webkit-text-stroke-color: black;

  &:hover {
    color: #84db2c;
    cursor: pointer;
  }
`

const TopSection = styled.section`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
/* margin-inline: auto; */

@media (max-width: 778px) {
    flex-direction: column;
    margin-inline: 0px;
  }
`

const StyledSection = styled.section`
display: flex;
justify-content: row;
`

const EditForm = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background: #84db2c;
padding: 1%;
border: 5px double white;
border-radius: 5px;

@media (max-width: 778px) {
    width: 60%;
  }
`

const StyledImage = styled.img`
  max-width: 25rem;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
  border: 5px double #84db2c;
  border-radius: 50%;

  transition: 0.3s;
  @media (max-width: 778px) {
    width: 100%;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
`;

const StyledImageDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5%;
`

const PostFormController = styled.div`
max-width: 60%;
margin-inline: auto;
`;

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
  display: flex;
  flex-direction: column;
  /* width: 35%; */
  padding-bottom: 1%;

  @media (max-width: 768px) {
    font-size: 100%;
  }

  p {
    margin: 0.5em;
  }
  transition: 0.3s;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;


export default FrogProfile;
