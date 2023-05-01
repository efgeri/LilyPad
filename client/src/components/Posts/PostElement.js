import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

const PostElement = ({post, frogs}) => {

  const posterFilter = frogs.filter((posterFrog) => {
    if (post.poster === posterFrog._id)
    return posterFrog
  })

  const receiverFilter = frogs.filter((receiverFrog) => {
    if (post.receiver === receiverFrog._id)
    return receiverFrog
  })

  const posterName = posterFilter.length ? posterFilter[0].name : null
  const posterPicture = posterFilter[0].image_url
  const receiverName = receiverFilter.length ? receiverFilter[0].name : null
  const receiverPicture = receiverFilter[0].image_url

  return (
    <> 
      <PostCard>
        {post.image_url ? 
          <PostImage src={post.image_url} alt=""/> : null}
          <PosterCard>
          <PosterReceiver>
          <PosterImage src={posterPicture} alt=""/>
          {posterName ? <PosterName>{posterName}</PosterName> : <PosterName>User has hopped off for good</PosterName>}
          <FontAwesomeIcon icon={faRightLong} size="2xl"/>
          <PosterImage src={receiverPicture} alt=""/>
          {receiverName ? <PosterName>{receiverName}</PosterName> : <PosterName>User has hopped off for good</PosterName>}
          </PosterReceiver>
        </PosterCard>
        <PostText>{post.comment.original}</PostText>
      </PostCard>
    </>
  );
}

// #84db2d

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
  width: 100%;
  div {
    justify-content: space-evenly;
  }
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
const PosterReceiver = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

 
export default PostElement;