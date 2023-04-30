import styled from "styled-components";

const PostElement = ({post, frogs}) => {

  const posterFilter = frogs.filter((posterFrog) => {
    if (post.poster === posterFrog._id)
    return posterFrog
  })

  const posterName = posterFilter.length ? posterFilter[0].name : null

  return (
    <> 
      <PostCard>
      {posterName ? <p>{posterName}</p> : <p>User left the plantform</p>}
        <br />
        {post.image_url ? 
          <img src={post.image_url} alt="" width="100" height="100"/> : null}
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
  border-radius: 400px;
  border: 4mm outset rgba(211, 220, 50, .6);
`;


 
export default PostElement;