import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeNavElement from "./HomeNavElement";
import FrogsNavElement from "./FrogsNavElement";
import ProfileNavElement from "./ProfileNavElement";
import SignLogNavElement from "./SignLogNavElement";

const NavBar = ({ loggedFrog, handleProfileClick }) => (
  <NavigationBar>
    <NavElementWrapper className="div1">
      <HomeNavElement />
    </NavElementWrapper>
    <NavElementWrapper className="div2">
      <FrogsNavElement />
    </NavElementWrapper>
    <NavElementWrapper className="div3" onClick={handleProfileClick}>
      <ProfileNavElement loggedFrog={loggedFrog} />
    </NavElementWrapper>
    <NavElementWrapper className="div4">
      <SignLogNavElement />
    </NavElementWrapper>
  </NavigationBar>
);

const NavigationBar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 4px double white;
  background-color: #84db2c;
  padding: 1rem 0;
  font-size: 20px;
  text-align: center;
  font-family: "Bungee", cursive;
  text-transform: uppercase;
  z-index: 100;
  justify-content: center;
  align-items: end;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 2px solid white;
    /* padding: 50rem;
    margin: 50rem; */
  }
`;

const NavElementWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NavBar;