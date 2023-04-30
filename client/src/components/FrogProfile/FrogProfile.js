import { useEffect } from "react";
import styled from "styled-components";
import PostForm from "../PostForm/PostForm";

const FrogProfile = ({loggedFrog, selectedFrog, addPost, setToOwnProfile}) => {

    useEffect(() => {
        setToOwnProfile(loggedFrog)
    }, [])

    return ( 
        <>
            <StyledCard>
                <p><strong>{loggedFrog.name}</strong></p>
                <StyledImage src={`${loggedFrog.image_url}`} alt={`${loggedFrog.name}'s profile picture`} />
            </StyledCard>
            <PostForm selectedFrog={selectedFrog} loggedFrog={loggedFrog} addPost={addPost}/>
        </>
     );
}

const StyledImage = styled.img`
width: 100%;
border-radius: 5%;
`
const StyledCard = styled.section`
width: 20%;
font-family: "Raleway", sans-serif;
text-align: center;
font-size: 2rem;
padding: 10px;
margin: 10px;
border-radius: 5%;
background-color: #C0FFBB;
p {
    margin: 0.5em;
}
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
  box-shadow: 0 12px 24px 0 rgba(0,0,0,0.2);
}
`
 
export default FrogProfile;