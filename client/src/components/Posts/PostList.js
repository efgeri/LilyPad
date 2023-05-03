import PostElement from "./PostElement";
import styled from "styled-components";

const PostList = ({posts, frogs, updateSelectedFrogById}) => {
  const limitedPosts = [...posts].slice(0, 7)
  const allPosts = limitedPosts.map((post) => {
    return <PostElement
      post={post}
      key={post._id}
      frogs={frogs}
      updateSelectedFrogById={updateSelectedFrogById}
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