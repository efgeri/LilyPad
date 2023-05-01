import React from "react";
import styled from "styled-components";
import FrogPost from "./FrogPost";

const FrogPostList = ({ posts, frogs }) => {
    return (
      <PostListContainer>
        {posts.map((post) => (
          <FrogPost key={post._id} post={post} frogs={frogs} />
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
