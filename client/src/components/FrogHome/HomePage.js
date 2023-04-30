import styled from "styled-components";
import { Link } from "react-router-dom";
import PostForm from "../PostForm/PostForm";
import PostList from "../Posts/PostList";

const HomePage = ({selectedFrog, loggedFrog, addPost, posts, frogs}) => {

  const displayPostFormGuard = () => {
    if (loggedFrog === null) {
      return <Link to="/signlog">Sign in to add your ribbits!</Link>
    } else {
      return <PostForm selectedFrog={selectedFrog} loggedFrog={loggedFrog} addPost={addPost}/>
    }
  }

  const postFormDisplay = displayPostFormGuard()

  return ( 
    <BodyContainer>
      {postFormDisplay}
      {posts.length ? <PostList posts={posts} frogs={frogs}/> : <p>Oh, oh! We are having issues retrieving post information. Please try again later.</p>}
    </BodyContainer>
   );
}
 
const BodyContainer = styled.section`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Bungee", cursive;
`;

export default HomePage;