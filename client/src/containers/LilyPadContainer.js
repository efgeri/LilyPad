import { useState } from 'react'
import PostForm from '../components/PostForm/PostForm'
import { createPost } from '../services/PostServices'

const LilyPad = () => {

    const [frogs, setFrogs] = useState([])
    const [loggedFrog, setLoggedFrog] = useState(null)
    const [selectedFrog, setSelectedFrog] = useState(null)
    const [posts, setPosts] = useState([])

    const addPost = (originalPost) => {
        createPost(originalPost)
        .then(savedPost => setPosts([...posts, savedPost])
       )}    

    return ( 
        <>
            <h1>LilyPad Container</h1>
            <PostForm selectedFrog={selectedFrog} loggedFrog={loggedFrog} addPost={addPost}/>
        </>
     );
}
 
export default LilyPad;