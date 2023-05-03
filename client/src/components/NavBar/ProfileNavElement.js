import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const ProfileNavElement = ({ loggedFrog }) => {
  const redirectToSignIn = () => {
    if (loggedFrog === null) {
      return "/signlog";
    } else {
      return `/${loggedFrog._id}/profile`;
    }
  };

  const profileLink = redirectToSignIn();

  return (
    <Link to={profileLink}>
      <NavigationBarElement>
        <ProfileIconWrapper>
          <StyledFrogIcon>
            <path d={FrogSVGUrl} />
          </StyledFrogIcon>
        </ProfileIconWrapper>
        <ProfileText>Profile</ProfileText>
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

  &:hover {
    color: white;
    animation: ${bounce} 1s;
    cursor: pointer;
  }
`;

const ProfileIconWrapper = styled.div`
  color: #fc0000;

  &:hover {
    color: white;
    animation: ${bounce} 1s;
  }
`;

const ProfileText = styled.span`
  display: inline;
  padding-top: 0.6em;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledFrogIcon = styled.svg.attrs({
  viewBox: '0 0 448 512',
  xmlns: 'http://www.w3.org/2000/svg',
})`
  width: 3.5em;
  height: 1.75em;
  fill: currentColor;
  stroke: black;
  stroke-width: 23.5px;
  
  &:hover {
    fill: white;
  }
`;

const FrogSVGUrl = "M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"

export default ProfileNavElement;
