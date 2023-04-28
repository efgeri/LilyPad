import { useState } from 'react'

const LilyPad = () => {

    const [frogs, setFrogs] = useState([])
    const [loggedFrog, setLoggedFrog] = useState(null)
    const [selectedFrog, setSelectedFrog] = useState(null)
    const [posts, setPosts] = useState([])

    return ( 
        <>
            <h1>LilyPad Container</h1>
        </>
     );
}
 
export default LilyPad;