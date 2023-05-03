import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLeaf,
  faClover,
  faFrog,
  faImagePortrait,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import HomeNavElement from "./HomeNavElement";
import FrogsNavElement from "./FrogsNavElement";
import ProfileNavElement from "./ProfileNavElement";
import SignLogNavElement from "./SignLogNavElement";

const NavBar = ({ loggedFrog, handleProfileClick }) => {
  return (
    <NavigationBar>
      <div className="div1">
        <HomeNavElement />
      </div>
      <div className="div2">
        <FrogsNavElement />
      </div>
      <div className="div3">
        <div onClick={handleProfileClick}>
          <ProfileNavElement
            handleProfileClick={handleProfileClick}
            loggedFrog={loggedFrog}
          />
        </div>
      </div>
      <div className="div4">
        <SignLogNavElement />
      </div>
    </NavigationBar>
  );
};

const NavigationBar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  border-bottom: 4px double white;
  background-color: #84db2c;
  padding-bottom: 1rem;
  padding-top: 1rem;
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

  /* Comment */
  // Add this media query for mobile devices
  /* @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 1.25rem;
    margin-bottom: 6rem;
    padding-block: 6rem;
    border-top: 2px solid white;
    border-bottom: none;
    align-items: none;
  } */

  @media (max-width: 768px) {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* padding-block: 5rem;
  margin-bottom: 5rem; */
  /* padding-top: 1.25rem;
  padding-bottom: 1.25rem; */
  border-top: 2px solid white;
}

  // Add this media query for non-mobile devices
  /* @media (min-width: 769px) {
    position: static;
  } */
`;

// .parent {
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   grid-template-rows: repeat(5, 1fr);
//   grid-column-gap: 0px;
//   grid-row-gap: 0px;
//   }

//   .div1 { grid-area: 1 / 1 / 2 / 2; }
//   .div2 { grid-area: 1 / 2 / 2 / 3; }
//   .div3 { grid-area: 1 / 3 / 2 / 4; }
//   .div4 { grid-area: 1 / 4 / 2 / 5; }

// const NavigationBarElement = styled.div`
//   color: #fc0000;
//   display: flex; // Add this line
//   flex-direction: column; // Add this line
//   align-items: center; // Add this line
//   font-size: 20px;
//   align-self: end; // Add this line
//   margin-bottom: 10px; // Add or adjust this line
// `;

export default NavBar;
