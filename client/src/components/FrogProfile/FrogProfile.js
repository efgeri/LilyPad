import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getSelectedFrog } from "../../services/FrogServices";
import PostForm from "../PostForm/PostForm";
import PostList from "../Posts/PostList";
import EditFrog from "./EditFrog";
import DeleteFrog from "./DeleteFrog";
// import { Aligner } from "../../containers/LilyPadContainer";

const FrogProfile = ({
  loggedFrog,
  selectedFrog,
  addPost,
  handleProfileRender,
  posts,
  frogs,
  deleteFrogAccount,
  updateFrogProfile,
  updateSelectedFrogById,
  addResponse
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

        <StyledCard>
        <StyledImageDiv>
          <StyledImage
            src={`${selectedFrog.image_url}`}
            alt={`${selectedFrog.name}'s profile picture`}
          />
        </StyledImageDiv>
        </StyledCard>

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
    <Aligner>
    <div className="parent">
      <div className="div1"></div>
        <div className="div2">
    <ProfileSection>
    {selectedFrog ? <Title>{selectedFrog.name}</Title> : "No such frog"}
    {styleCardDirector}

      {editProfileDirector()}

      {loggedFrog ? <PostForm
        selectedFrog={selectedFrog}
        loggedFrog={loggedFrog}
        addPost={addPost}
      /> : null}


      {posts.length ? (
          <PostList
          loggedFrog={loggedFrog}
            posts={relevantPosts}
            frogs={frogs}
            updateSelectedFrogById={updateSelectedFrogById}
            addResponse={addResponse}
          />
        ) : (
          <p>
            Oh, oh! We are having issues retrieving post information. Please try
            again later.
          </p>
        )}
              </ProfileSection>
        </div>
        <div className="div3"></div>
        </div>
      </Aligner>
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

const EditForm = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background: #84db2c;
padding: 1%;
border: 2px double white;
border-radius: 5px;

`

const StyledImage = styled.img`
  max-width: 25rem;
  display: flex;
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
  border: 5px double #84db2c;

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


// const StyledPostForm = styled(PostForm)`
//   & .post-form-container {
//     background-color: blue;
//   }
// `

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

export const Aligner = styled.section`
  .parent {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 3;
  }
  .div2 {
    grid-area: 1 / 3 / 2 / 9;
  }
  .div3 {
    grid-area: 1 / 9 / 2 / 11;
  }
`;


export default FrogProfile;
