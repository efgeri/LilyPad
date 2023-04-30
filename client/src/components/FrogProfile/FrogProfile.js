import { useEffect } from "react";
import PostForm from "../PostForm/PostForm";

const FrogProfile = ({loggedFrog, selectedFrog, addPost, selectLoggedFrog}) => {

    useEffect(() => {
        selectLoggedFrog(loggedFrog)
    }, [])

    return ( 
        <>
            <p>Empty frogProfile (for now)</p>
            <PostForm selectedFrog={selectedFrog} loggedFrog={loggedFrog} addPost={addPost}/>
        </>
     );
}
 
export default FrogProfile;