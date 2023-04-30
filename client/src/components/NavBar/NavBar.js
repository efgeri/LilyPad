import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLeaf } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return ( 
    <NavigationBar>
          <Link to="/">
            <NavigationBarElement>
              <HomeIconWrapper>
              <FontAwesomeIcon icon={faLeaf} />
            </HomeIconWrapper>
          <HomeText>Home</HomeText>
          </NavigationBarElement>
          </Link>
          <Link to="/frogs">
            <NavigationBarElement>Frogs</NavigationBarElement>
          </Link>
          <Link to="/profile">
            <NavigationBarElement>Profile</NavigationBarElement>
          </Link>
          <Link to="/signlog">
            <NavigationBarElement>Frog-In</NavigationBarElement>
          </Link>
        </NavigationBar>
   );
}

const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #84db2c;
  padding-bottom: 0.5rem;
  font-size: 2rem;
  text-align: center;
  justify-content: space-between;
  padding-inline: 10rem;
  font-family: "Bungee", cursive;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const NavigationBarElement = styled.div`
  color: #fc0000;
`;

const HomeIconWrapper = styled.div`
  display: none;
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    display: inline;
  }
`;

const HomeText = styled.span`
  display: inline;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FrogsIconWrapper = styled.div`
  display: none;
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    display: inline;
  }
`;

const FrogsText = styled.span`
  display: inline;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default NavBar;
