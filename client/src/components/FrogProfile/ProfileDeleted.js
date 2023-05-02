
import React from 'react';
import styled from 'styled-components';

const ProfileDeleted = () => {
  return (
    <StyledContainer>
      <h1>User has successfully been deleted</h1>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
`;

export default ProfileDeleted;

// Page which displays when a user deleted their profile