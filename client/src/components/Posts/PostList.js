import PostElement from "./PostElement";
import styled from "styled-components";

const PostList = ({posts, frogs}) => {

  const allPosts = posts.map((post) => {
    return <PostElement
      post={post}
      key={post._id}
      frogs={frogs}
      />
  })

  return ( 
    <>
    <ListContainer>
    <StyledTitle>Post List</StyledTitle>
    {allPosts} 
    </ListContainer>
    </>
   );
}

const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  
`;

const StyledTitle = styled.h2`
  text-align: center;
  -webkit-text-stroke-width: 0.75px;
  -webkit-text-stroke-color: black;
  color: red;
`


export default PostList;