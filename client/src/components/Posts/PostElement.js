import styled from "styled-components";

const PostElement = ({post}) => {

  return (
    <> 
    <p>Hi</p>
    <PostCard>
          {post.poster}
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
`;


 
export default PostElement;