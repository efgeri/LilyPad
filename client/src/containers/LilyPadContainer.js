import { useState } from 'react'
import styled from 'styled-components';
import { FontImport, GlobalStyles } from '../GlobalStyles';
import PostList from '../components/Posts/PostList';
import { useState, useEffect } from 'react'
import FrogList from '../components/FrogList/FrogList'
import { getFrogs } from '../services/FrogServices'

const LilyPadContainer = () => {

    useEffect(() => {
        getFrogs().then((data) => setFrogs(data));
      }, []);

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
            <FrogList frogs={frogs}/>
        </>
     );
}
 
export default LilyPadContainer;