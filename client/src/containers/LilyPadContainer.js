import { useState } from 'react'
import PostForm from '../components/PostForm/PostForm'

const LilyPad = () => {

    const [frogs, setFrogs] = useState([])
    const [loggedFrog, setLoggedFrog] = useState(null)
    const [selectedFrog, setSelectedFrog] = useState(null)
    const [posts, setPosts] = useState([])

    

    return ( 
        <>
            <h1>LilyPad Container</h1>
            <PostForm selectedFrog={selectedFrog} loggedFrog={loggedFrog} />
        </>
     );
}
 
export default LilyPad;