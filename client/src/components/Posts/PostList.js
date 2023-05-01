import PostElement from "./PostElement";
import styled from "styled-components";

const PostList = ({posts, frogs}) => {
  const limitedPosts = [...posts].slice(0, 5)
  const allPosts = limitedPosts.map((post) => {
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
`


export default PostList;