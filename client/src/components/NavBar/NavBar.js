import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return ( 
    <NavigationBar>
          <Link to="/">
            <NavigationBarElement>Home</NavigationBarElement>
          </Link>
          <Link to="/frogs">
            <NavigationBarElement>Frogs</NavigationBarElement>
          </Link>
          <Link to="/frogdetails">
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

    @media (max-width: 768px) {
    flex-direction: column;
    padding-inline: 1rem;
    font-size: 1.5rem;
  }
`;

const NavigationBarElement = styled.div`
  color: #fc0000;
`;

export default NavBar;