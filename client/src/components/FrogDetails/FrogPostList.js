import React from "react";
import styled from "styled-components";
import PostElement from "../Posts/PostElement";

const FrogPostList = ({posts, frogs, selectedFrog, currentFrog}) => {

  // Filter the posts based on the selectedFrog ID
  const filteredPosts = selectedFrog ? posts.filter(post => post.receiver === selectedFrog._id ) : [];


  // Map over the filteredPosts array instead of the original posts array
  const allPosts = filteredPosts.map((post) => {
    return (
      <PostElement
        post={post}
        key={post._id}
        frogs={frogs}
        currentFrog={currentFrog}
      />
    );
  });

  const postsReversed = allPosts.reverse();

  return (
    <>
      <h2>Post List</h2>
      <PostListContainer>{postsReversed}</PostListContainer>
    </>
  );
};

  

const PostListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default FrogPostList;


