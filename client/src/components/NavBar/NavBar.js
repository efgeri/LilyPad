import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLeaf, faClover, faFrog, faImagePortrait, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({loggedFrog}) => {

  const redirectToSignIn = () => {
    if (loggedFrog === null) {
      return "/signlog"
    } else {
      return "/profile"
    }
  }
  
  const profileLink = redirectToSignIn()

  return ( 
    <NavigationBar>
          <Link to="/">
            <NavigationBarElement>
              <HomeIconWrapper>
              <FontAwesomeIcon icon={faClover}/>
            </HomeIconWrapper>
          <HomeText>Home</HomeText>
          </NavigationBarElement>
          </Link>
          <Link to="/frogs">
            <NavigationBarElement>
            <FrogsIconWrapper>
            <FrogsIconContainer>
              <FrogIconLeft>
                <FontAwesomeIcon icon={faFrog} />
              </FrogIconLeft>
              <FrogIconMiddle>
                <FontAwesomeIcon icon={faFrog} />
              </FrogIconMiddle>
              <FrogIconRight>
                <FontAwesomeIcon icon={faFrog} />
              </FrogIconRight>
            </FrogsIconContainer>
          </FrogsIconWrapper>
            <FrogsText>Frogs</FrogsText>
            </NavigationBarElement>
          </Link>
          <Link to={profileLink}>
            <NavigationBarElement>
            <ProfileIconWrapper>
            <FontAwesomeIcon icon={faFrog}></FontAwesomeIcon>
            </ProfileIconWrapper>
            <ProfileText>
            Profile
            </ProfileText>
            </NavigationBarElement>
          </Link>
          <Link to="/signlog">
            <NavigationBarElement>
            <SignLogWrapper>
            <FontAwesomeIcon icon={faRightToBracket} />
            </SignLogWrapper>
            <SignLogText>Frog-In</SignLogText>
            </NavigationBarElement>
          </Link>
        </NavigationBar>
   );
}

const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #84db2c;
  padding-bottom: 0.5rem;
  font-size: 20px;
  text-align: center;
  justify-content: space-between;
  padding-inline: 10rem;
  font-family: "Bungee", cursive;
  text-transform: uppercase;
  z-index: 100;

  a {
    text-decoration: none;
    color: inherit;
  }

  // Add this media query for mobile devices
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding-inline: 2.75rem;
    padding-top: 1.25rem;
  }

  // Add this media query for non-mobile devices
  @media (min-width: 769px) {
    position: static;
    padding-inline: 10rem;
  }
`;

const NavigationBarElement = styled.div`
  color: #fc0000;
  display: flex; // Add this line
  flex-direction: column; // Add this line
  align-items: center; // Add this line
  font-size: 20px;
`;

const HomeIconWrapper = styled.div`
  /* display: none;
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    display: inline;
  } */
`;

const HomeText = styled.span`
  display: inline;

  @media (max-width: 768px) {
    display: none;
  }
`;


const FrogsIconWrapper = styled.div`
  display: grid;
  grid-template-rows: 12px 12px;
  grid-template-columns: 18px 18px 18px;
  grid-template-areas:
    ". middle ."
    "left . right";
  justify-items: center;
  align-items: end;
`;

const FrogsIconContainer = styled.div`
  display: contents;
`;

const FrogIcon = styled.div`
  width: 18px;
  height: 20px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const FrogIconLeft = styled(FrogIcon)`
  grid-area: left;
`;

const FrogIconMiddle = styled(FrogIcon)`
  grid-area: middle;
`;

const FrogIconRight = styled(FrogIcon)`
  grid-area: right;
`;


const FrogsText = styled.span`
  display: inline;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProfileIconWrapper = styled.div`
  /* display: none; */
  /* width: 24px;
  height: 24px; */
  height: 24px;
/* 
  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    display: inline; */
  /* } */
`;

const ProfileText = styled.span`
  display: inline;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SignLogWrapper = styled.div`
  /* display: none;
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    display: inline; */
  }
`;

const SignLogText = styled.span`
  display: inline;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default NavBar;
