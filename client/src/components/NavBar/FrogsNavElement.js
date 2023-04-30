import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrog } from '@fortawesome/free-solid-svg-icons';

const FrogsNavElement = () => {
  return (
    <Link to="/frogs">
      <NavigationBarElement>
        <FrogsIconWrapper>
          <FrogsIconContainer>
            <FrogIconLeft>
              <FontAwesomeIcon icon={faFrog} />
            </FrogIconLeft>
            <FrogIconMiddle>
              <FontAwesomeIcon icon={faFrog} />
            </FrogIconMiddle>
            <FrogIconRight>
              <FontAwesomeIcon icon={faFrog} />
            </FrogIconRight>
          </FrogsIconContainer>
        </FrogsIconWrapper>
        <FrogsText>Frogs</FrogsText>
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

const FrogsIconWrapper = styled.div`
  display: grid;
  grid-template-rows: 12px 12px;
  grid-template-columns: 18px 18px 18px;
  grid-template-areas:
    ". middle ."
    "left . right";
  justify-items: center;
  align-items: end;
`;

const FrogsIconContainer = styled.div`
  display: contents;
`;

const FrogIcon = styled.div`
  width: 18px;
  height: 20px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const FrogIconLeft = styled(FrogIcon)`
  grid-area: left;
`;

const FrogIconMiddle = styled(FrogIcon)`
  grid-area: middle;
`;

const FrogIconRight = styled(FrogIcon)`
  grid-area: right;
`;

const FrogsText = styled.span`
  display: inline;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default FrogsNavElement;