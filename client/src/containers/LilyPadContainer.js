  import { useState, useEffect } from 'react'
  import FrogList from '../components/FrogList/FrogList'
  import PostList from '../components/Posts/PostList';
  import { getFrogs } from '../services/FrogServices'
  import { getPosts } from '../services/PostServices'
  import styled from 'styled-components';

  const LilyPadContainer = () => {

      const [frogs, setFrogs] = useState([])
      const [loggedFrog, setLoggedFrog] = useState(null)
      const [selectedFrog, setSelectedFrog] = useState(null)
      const [posts, setPosts] = useState([])

          useEffect(() => {
            Promise.all([getFrogs(), getPosts()])
              .then(([frogsData, postsData]) => {
                setFrogs(frogsData);
                setPosts(postsData);
              });
          }, []);

      return ( 
          <>
              <StyledHeader>LILYPAD CONTAINER</StyledHeader>
              <NavigationBar>
                <NavigationBarElement>Home</NavigationBarElement>
                <NavigationBarElement>Frogs</NavigationBarElement>
                <NavigationBarElement>Profile</NavigationBarElement>
                <NavigationBarElement>Frog-In</NavigationBarElement>
              </NavigationBar>
              <BodyContainer>
              <PostList posts={posts}/>
              <FrogList frogs={frogs}/>
              </BodyContainer>
          </>
      );

  }

  const StyledHeader = styled.div`
  background-color: #84db2c;
  color: white;
  padding-bottom: 0.5rem;
  font-size: 2.75rem;
  text-align: center;
  font-family: 'Monoton', cursive;
  `

  const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #84db2c;
  padding-bottom: 0.5rem;
  font-size: 2rem;
  text-align: center;
  justify-content: space-between; 
  padding-inline: 10rem;
  `

  const NavigationBarElement = styled.div`
  color: red;
  `

  const BodyContainer = styled.section`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  `
  
  export default LilyPadContainer;