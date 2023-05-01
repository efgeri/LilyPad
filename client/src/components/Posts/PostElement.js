import styled from "styled-components";

const PostElement = ({post, frogs}) => {

  const posterFilter = frogs.filter((posterFrog) => {
    if (post.poster === posterFrog._id)
    return posterFrog
  })

  const posterName = posterFilter.length ? posterFilter[0].name : null
  const posterPicture = posterFilter[0].image_url

  return (
    <> 
      <PostCard>

        {post.image_url ? 
          <PostImage src={post.image_url} alt=""/> : null}
          <PosterCard>
          <PosterImage src={posterPicture} alt=""/>
          {posterName ? <PosterName>{posterName}</PosterName> : <PosterName>User left the platform</PosterName>}
        </PosterCard>
        <p>{post.comment.original}</p>
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
`;

const PosterCard = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  justify-content: left;
`

const PosterImage = styled.img`
  width: 40px;
  height: 40px;
  border: 2px double white;
  border-radius: 50%; // Set border-radius to 50% to create a circle
  object-fit: cover; // Add object-fit to maintain the aspect ratio
  object-position: center; // Add object-position to position the image correctly
`

const PosterName = styled.p`
  margin: 0 1rem; // Add some horizontal margin for spacing
  font-size: 20px;
`;

const PostImage = styled.img`
  max-width: 400px;
  max-height: 400px;
  border-radius: 4px;
  border: 2px double white;
  object-fit: cover; // Add object-fit to maintain the aspect ratio
  object-position: center; // Add object-position to position the image correctly
`

 
export default PostElement;