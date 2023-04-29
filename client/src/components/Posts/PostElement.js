import styled from "styled-components";

const PostElement = ({post, frogs}) => {

  const posterFilter = frogs.filter((posterFrog) => {
    if (post.poster === posterFrog._id)
    return posterFrog
  })

  const posterName = posterFilter[0].name

  return (
    <> 
    <PostCard>
          {posterName}
      <img src={post.image_url} alt="" width="100" height="100"/>
      <p>{post.comment.original}</p>
      </PostCard>
    </>
   );
}

const PostCard = styled.section`
  background-color: #84db2d;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  margin-block: 1rem;
`;


 
export default PostElement;