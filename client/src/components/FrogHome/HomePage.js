import styled from "styled-components";
import { Link } from "react-router-dom";
import PostForm from "../PostForm/PostForm";
import PostList from "../Posts/PostList";

const HomePage = ({selectedFrog, loggedFrog, addPost, posts, frogs}) => {

  const displayPostFormGuard = () => {
    if (loggedFrog === null) {
      return <FormTerneryStyler><Link to="/signlog"><h3>Sign in to add your ribbits!</h3></Link></FormTerneryStyler>
    } else {
      return <PostForm selectedFrog={selectedFrog} loggedFrog={loggedFrog} addPost={addPost}/>
    }
  }

  const postFormDisplay = displayPostFormGuard()

  return ( 
    <BodyContainer>
    <WidthController>
    {postFormDisplay}
      {posts.length ? <PostList posts={posts} frogs={frogs}/> : <p>Oh, oh! We are having issues retrieving post information. Please try again later.</p>}
      </WidthController>
    </BodyContainer>
   );
}
 
const BodyContainer = styled.section`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  font-family: "Bungee", cursive;
`;

const WidthController = styled.div`
width: 60%;

@media screen and (max-width: 768px) {
    width: 90%;
  }
`

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
`

export default HomePage;