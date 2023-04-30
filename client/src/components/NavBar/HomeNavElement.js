import React from 'react';
import styled from 'styled-components';
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

const NavigationBarElement = styled.div`
  color: #fc0000;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;


const HomeText = styled.span`
  display: inline;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default HomeNavElement;