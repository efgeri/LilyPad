
import styled from "styled-components";

import PostElement from "../Posts/PostElement";

const FrogPostList = ({ posts, frogs, loggedFrog, addResponse }) => {
  return (
    <PostListContainer>
      {posts.map((post) => (
        <PostElement key={post._id} post={post} frogs={frogs} loggedFrog={loggedFrog} addResponse={addResponse}/>
      ))}
    </PostListContainer>
  );
};

const PostListContainer = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    width: 60%;
    min-width: 60%;
    margin-inline: auto;
    flex-direction: column;
`;

export default FrogPostList;
