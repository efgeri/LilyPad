import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const SignLogNavElement = ({loggedFrog}) => {

  const frogInOut = loggedFrog ? "Frog-Out" : "Frog-In"

  return (
    <Link to="/signlog">
      <NavigationBarElement>
        <SignLogWrapper>
          <FontAwesomeIcon icon={faRightToBracket} />
        </SignLogWrapper>
        <SignLogText>{frogInOut}</SignLogText>
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

  @media (max-width: 768px) {

  }

  // Add this media query for non-mobile devices
  @media (min-width: 769px) {

  }

  &:hover {
    color: white;
    animation: ${bounce} 1s;
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