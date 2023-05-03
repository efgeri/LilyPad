import React from "react";
import styled from "styled-components";

const FrogDetails = ({ frog }) => {
  return (
    <div>
      <h2>{frog.name}</h2>
      <p>test</p>
      <StyledImage
        src={`${frog.image_url}`}
        alt={`${frog.name}'s profile picture`}
      />
    </div>
  );
};

const StyledImage = styled.img`
  width: 100%;
  border-radius: 5px;
`

export default FrogDetails;
