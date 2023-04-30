import styled from "styled-components";

const PostElement = ({post, frogs}) => {

  const posterFilter = frogs.filter((posterFrog) => {

    console.log(posterFrog)
    if (post.poster === posterFrog._id)
    return posterFrog
  })
console.log(posterFilter)
console.log(post)
  const posterName = posterFilter[0].name

  return (
    <> 
      <PostCard>
      <h2>{posterName}</h2>
        <br />
        {post.image_url ? 
          <img src={post.image_url} alt="" width="100" height="100"/> : <p>There is no image</p>}
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