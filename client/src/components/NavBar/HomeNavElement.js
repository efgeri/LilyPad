import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClover } from '@fortawesome/free-solid-svg-icons';

const HomeNavElement = () => {

  return (
    <Link to="/">
      <NavigationBarElement>
          <FontAwesomeIcon icon={faClover} />
        <HomeText>Home</HomeText>
      </NavigationBarElement>
    </Link>
  );
};

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-3px);
  }
`;

const NavigationBarElement = styled.div`
  color: #fc0000;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  padding-top: 3px;
  
  @media (max-width: 768px) {
  padding-top: 1.5px;

  }
  // Add this media query for non-mobile devices
  @media (min-width: 769px) {
  }

  &:hover {
      color: white;
      animation: ${bounce} 1s;
    }

`;


const HomeText = styled.span`
  display: inline;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default HomeNavElement;