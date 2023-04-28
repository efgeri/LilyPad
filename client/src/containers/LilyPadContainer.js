import { useState } from 'react'
import styled from 'styled-components';
import { FontImport, GlobalStyles } from '../GlobalStyles';
import PostList from '../components/Posts/PostList';

const LilyPadContainer = () => {

    const [frogs, setFrogs] = useState([])
    const [loggedFrog, setLoggedFrog] = useState(null)
    const [selectedFrog, setSelectedFrog] = useState(null)
    const [posts, setPosts] = useState([])

    const StyledHeader = styled.div`
    background-color: #84db2c;
    color: white;
    padding-bottom: 4rem;
    font-size: 4rem;
    `

    return ( 
        <>
        <FontImport />
        <GlobalStyles />
            <StyledHeader>LILYPAD CONTAINER</StyledHeader>
            <PostList posts={posts}/>
        </>
     );
}
 
export default LilyPadContainer;