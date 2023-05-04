import React from "react";
import styled from "styled-components";

const FrogPost = ({ post, frogs }) => {
    return (
    <PostCard>
      <PostImage src={post.image_url} alt="Frog post" />
      <PostComment>{post.comment.original}</PostComment>
    </PostCard>
  );
};

const PostCard = styled.section`
  background-color: #84db2d;
  justify-content: center;
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  margin-block: 1rem;
  border-radius: 5px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  padding: 1rem;
  border: 2px double white;
`;

const PostImage = styled.img`
  max-width: 400px;
  max-height: 400px;
  border-radius: 4px;
  border: 2px double white;
  object-fit: cover; 
  object-position: center; 
`;

const PostComment = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-top: 10px;
`;

export default FrogPost;
