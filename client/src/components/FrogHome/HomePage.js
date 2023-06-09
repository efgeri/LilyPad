import styled from "styled-components";
import { Link } from "react-router-dom";
import PostForm from "../PostForm/PostForm";
import PostList from "../Posts/PostList";
import { Aligner } from "../../containers/LilyPadContainer";

const HomePage = ({
  selectedFrog,
  loggedFrog,
  addPost,
  posts,
  frogs,
  updateSelectedFrogById,
  addResponse}) => {
  const displayPostFormGuard = () => {
    if (loggedFrog === null) {
      return (
        <FormTerneryStyler>
          <Link to="/signlog">
            <h3>Sign in to add your ribbits!</h3>
          </Link>
        </FormTerneryStyler>
      );
    } else {
      return (
        <PostForm
          selectedFrog={selectedFrog}
          loggedFrog={loggedFrog}
          addPost={addPost}
        />
      );
    }
  };

  const postFormDisplay = displayPostFormGuard();

  return (
    <Aligner>
      <div className="parent">
        <div className="div2">
          <BodyContainer>
            <WidthController>
              {postFormDisplay}
              {posts.length ? (
                <PostList
                  loggedFrog={loggedFrog}
                  addResponse={addResponse}
                  posts={posts}
                  frogs={frogs}
                  updateSelectedFrogById={updateSelectedFrogById}
                />
              ) : (
                <p>
                  Oh, oh! We are having issues retrieving post information. Please try
                  again later.
                </p>
              )}
            </WidthController>
          </BodyContainer>
        </div>
      </div>
    </Aligner>
  );
};

const BodyContainer = styled.section`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  font-family: "Bungee", cursive;
`;

const WidthController = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const FormTerneryStyler = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
  }

  h3 {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    color: red;
    text-align: center;
    width: 100%;
  }
`;

export default HomePage;
