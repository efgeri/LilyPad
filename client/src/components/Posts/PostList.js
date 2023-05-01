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
    <h2>Post List</h2>
    <ListContainer>
    {allPosts} 
    </ListContainer>
    </>
   );
}

const ListContainer = styled.section`
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: red;
  align-items: center;
  padding-bottom: 50px;
`;


export default PostList;