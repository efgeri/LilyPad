import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrog } from '@fortawesome/free-solid-svg-icons';

const ProfileNavElement = ({loggedFrog}) => {

  const redirectToSignIn = () => {
    if (loggedFrog === null) {
      return "/signlog"
    } else {
      return "/profile"
    }
  }
  
  const profileLink = redirectToSignIn()

  return (
    <Link to={profileLink}>
      <NavigationBarElement>
        <ProfileIconWrapper>
          <FontAwesomeIcon icon={faFrog} />
        </ProfileIconWrapper>
        <ProfileText>Profile</ProfileText>
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
`;

const ProfileIconWrapper = styled.div`
  height: 24px;
`;

const ProfileText = styled.span`
  display: inline;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default ProfileNavElement;
