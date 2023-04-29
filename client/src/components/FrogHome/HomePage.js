import PostForm from "../PostForm/PostForm";
import PostList from "../Posts/PostList";

const HomePage = ({selectedFrog, loggedFrog, addPost, posts, frogs}) => {
  return ( 
    <section>
    <PostForm selectedFrog={selectedFrog} loggedFrog={loggedFrog} addPost={addPost}/>
    <PostList posts={posts} frogs={frogs}/>
    </section>
   );
}
 
export default HomePage;