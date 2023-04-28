import { useState, useEffect } from 'react'
import FrogList from '../components/FrogList/FrogList'
import { getFrogs } from '../services/FrogServices'

const LilyPad = () => {

    const [frogs, setFrogs] = useState([])
    const [loggedFrog, setLoggedFrog] = useState(null)
    const [selectedFrog, setSelectedFrog] = useState(null)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getFrogs().then((data) => setFrogs(data));
      }, []);

    return ( 
        <>
            <h1>LilyPad Container</h1>
            <FrogList frogs={frogs}/>

        </>
     );
}
 
export default LilyPad;