import PostElement from "./PostElement";

const PostList = ({posts}) => {
  return ( 
    <>
    <h2>Post List</h2>
    <PostElement post={posts} />
    </>
   );
}
 
export default PostList;