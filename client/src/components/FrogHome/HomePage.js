import PostForm from "../PostForm/PostForm";
import PostList from "../Posts/PostList";
import styled from "styled-components";

const HomePage = ({selectedFrog, loggedFrog, addPost, posts, frogs}) => {
  return ( 
    <BodyContainer>
    <PostForm selectedFrog={selectedFrog} loggedFrog={loggedFrog} addPost={addPost}/>
    <PostList posts={posts} frogs={frogs}/>
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