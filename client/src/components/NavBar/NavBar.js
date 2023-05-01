import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLeaf, faClover, faFrog, faImagePortrait, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import HomeNavElement from './HomeNavElement';
import FrogsNavElement from './FrogsNavElement';
import ProfileNavElement from './ProfileNavElement';
import SignLogNavElement from './SignLogNavElement';

const NavBar = ({loggedFrog}) => {

  return ( 
    <NavigationBar>
          <HomeNavElement />
          <FrogsNavElement />
          <ProfileNavElement loggedFrog={loggedFrog}/>
          <SignLogNavElement />
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
  

  /* Comment */
  // Add this media query for mobile devices
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding-inline: 2.75rem;
    padding-top: 1.25rem;
    border-top: 2px solid white;
  }

  // Add this media query for non-mobile devices
  @media (min-width: 769px) {
    position: static;
    padding-inline: 10rem;
  }


`;

// const NavigationBarElement = styled.div`
//   color: #fc0000;
//   display: flex; // Add this line
//   flex-direction: column; // Add this line
//   align-items: center; // Add this line
//   font-size: 20px;
// `;

export default NavBar;
