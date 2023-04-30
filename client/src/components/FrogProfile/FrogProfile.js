import { useEffect } from "react";
import PostForm from "../PostForm/PostForm";

const FrogProfile = ({loggedFrog, selectedFrog, addPost, setToOwnProfile}) => {

    useEffect(() => {
        setToOwnProfile(loggedFrog)
    }, [])

    return ( 
        <>
            <p>Empty frogProfile (for now)</p>
            <PostForm selectedFrog={selectedFrog} loggedFrog={loggedFrog} addPost={addPost}/>
        </>
     );
}
 
export default FrogProfile;