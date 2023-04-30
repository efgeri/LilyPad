import React from "react";
import styled from "styled-components";

const FrogPost = ({ post }) => {
  return (
    <PostContainer>
      <PostImage src={post.image_url} alt="Frog post" />
      <PostComment>{post.comment.original}</PostComment>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 10px;
  padding: 15px;
  background-color: #f0f8ff;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const PostComment = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-top: 10px;
`;

export default FrogPost;
