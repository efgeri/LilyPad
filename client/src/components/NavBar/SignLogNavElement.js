import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const SignLogNavElement = () => {
  return (
    <Link to="/signlog">
      <NavigationBarElement>
        <SignLogWrapper>
          <FontAwesomeIcon icon={faRightToBracket} />
        </SignLogWrapper>
        <SignLogText>Frog-In</SignLogText>
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
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;

  @media (max-width: 768px) {

  }

  // Add this media query for non-mobile devices
  @media (min-width: 769px) {

  }
`;

const SignLogWrapper = styled.div``;

const SignLogText = styled.span`
  display: inline;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default SignLogNavElement;