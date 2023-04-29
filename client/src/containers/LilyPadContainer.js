import { useState } from 'react'
import FrogForm from '../components/FrogForm/FrogForm'
import { createFrog } from '../services/FrogServices'

const LilyPad = () => {

    const [frogs, setFrogs] = useState([])
    const [loggedFrog, setLoggedFrog] = useState(null)
    const [selectedFrog, setSelectedFrog] = useState(null)
    const [posts, setPosts] = useState([])

    const addFrog = (newFrog) => {
        createFrog(newFrog)
        .then(savedFrog => setFrogs([...frogs, savedFrog]))
    }

    return ( 
        <>
            <h1>LilyPad Container</h1>
            <FrogForm addFrog={addFrog} />
        </>
     );
}
 
export default LilyPad;