import { useState } from "react";
import styled from "styled-components";
import { likePost, unlikePost } from "../../services/PostServices";


const PostElement = ({ post, frogs, loggedFrog }) => {
  // Define a 'likes' state variable and initialize it with the likes from the 'post' object,
  // or an empty array if there are no likes
  const [likes, setLikes] = useState(post.likes || []);

  // Filter the 'frogs' array to find the frog that posted this post
  const posterFilter = frogs.filter((posterFrog) => {
    if (post.poster === posterFrog._id) return posterFrog;
  });

  // Extract the name and image URL of the poster frog from the filtered array,
  // or set them to null if the poster frog cannot be found
  const posterName = posterFilter.length ? posterFilter[0].name : null;
  const posterPicture = posterFilter.length ? posterFilter[0].image_url : null;

  // Define a function that handles liking and unliking posts
  const handleLike = async () => {
    // Get the ID of the logged-in frog
    const frogId = loggedFrog._id;
    // Check if the logged-in frog has already liked this post
    const alreadyLiked = likes.includes(frogId);

    if (alreadyLiked) {
      // If the logged-in frog has already liked this post, unlike the post and update the 'likes' state
      const successfulUnlike = await unlikePost(post._id, frogId);
      if (successfulUnlike.acknowledged) {
      setLikes(likes.filter((like) => like !== frogId));
      }
    } else {
      // If the logged-in frog has not liked this post, like the post and update the 'likes' state
      await likePost(post._id, frogId);
      setLikes([...likes, frogId]);
    }
  };

  // Map the 'likes' array to an array of 'Liker' components,
  // each displaying the profile picture of a frog who liked this post
  const likers = likes.map((like) => {
    const likerFrog = frogs.find((frog) => frog._id === like);
    return (
      <Liker key={likerFrog._id} src={likerFrog.image_url} alt={`${likerFrog.name}'s profile picture`} />
    );
  });

  // Return a JSX element that displays the post, including its image (if it has one),
  // the name and profile picture of the poster frog, the post's text content, the number of likes,
  // and the profile pictures of the frogs who liked this post
  return (
    <>
      <PostCard>
        {post.image_url ? (
          <PostImage src={post.image_url} alt="" />
        ) : null}
        <PosterCard>
          <PosterImage src={posterPicture} alt="" />
          {posterName ? (
            <PosterName>{posterName}</PosterName>
          ) : (
            <PosterName>User has hopped off for good</PosterName>
          )}
        </PosterCard>
        <PostText>{post.comment.original}</PostText>
        <LikeButton onClick={handleLike}>
          {likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </LikeButton>
        {likers}
      </PostCard>
    </>
  );
};


// #84db2d

const Liker = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
`;



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
  width: 100%; // Set the initial width to 100%
  max-width: 800px; // Limit the maximum width

  @media (max-width: 768px) {
    width: 90%; // Set the width to 90% for smaller screens
  }
`;

const PosterCard = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  align-self: flex-start;
`

const PosterImage = styled.img`
  width: 40px;
  height: 40px;
  border: 2px double white;
  border-radius: 50%; // Set border-radius to 50% to create a circle
  object-fit: cover; // Add object-fit to maintain the aspect ratio
  object-position: center; // Add object-position to position the image correctly
  align-items: left;
`

const PosterName = styled.p`
  margin: 0 1rem; // Add some horizontal margin for spacing
  font-size: 20px;
`;

const PostImage = styled.img`
  width: 100%; // Set the initial width to 100%
  max-width: 500px; // Limit the maximum width
  max-height: 500px;
  border-radius: 4px;
  border: 2px double white;
  object-fit: cover;
  object-position: center;
  align-items: center;
`

const PostText = styled.p`
  align-items: center;
  align-self: flex-start;
`
const LikeButton = styled.button`
  background-color: ${(props) => (props.liked ? "#84db2c" : "white")};
  color: ${(props) => (props.liked ? "white" : "black")};
  border: 1px solid #84db2c;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #84db2c;
    color: white;
  }
  &:active {
    background-color: #2b6a30;
  }
`;



 
export default PostElement;