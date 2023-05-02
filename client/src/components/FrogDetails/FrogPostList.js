
import styled from "styled-components";

import PostElement from "../Posts/PostElement";

const FrogPostList = ({ posts, frogs }) => {
  return (
    <PostListContainer>
      {posts.map((post) => (
        <PostElement key={post._id} post={post} frogs={frogs} />
      ))}
    </PostListContainer>
  );
};

const PostListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default FrogPostList;
