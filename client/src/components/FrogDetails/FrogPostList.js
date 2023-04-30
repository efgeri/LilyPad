import PostElement from "./PostElement";
import styled from "styled-components";

const PostListByFrog = ({ postsByID, frogs, selectedFrog }) => {
  // Get all the posts for the selected frog from the postsByID object
  const posts = postsByID[selectedFrog._id] || [];

  // Map over the posts to create an array of PostElement components for each post
  const allPosts = posts.map((post) => (
    <PostElement post={post} key={post._id} frogs={frogs} />
  ));

  return (
    <ListContainer>
      <h2>Posts by {selectedFrog.name}</h2>
      {/* If no posts are found, display a message saying so */}
      {allPosts.length === 0 ? (
        <p>No posts found for {selectedFrog.name}</p>
      ) : (
        // Otherwise, display the list of posts
        <ul>{allPosts}</ul>
      )}
    </ListContainer>
  );
};

const ListContainer = styled.section`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export default PostListByFrog;
