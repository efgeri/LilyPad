import styled from "styled-components";

const PosterImageLink = () => {
  return (
    <div className="div1">
      <Link to={`${posterFilter[0]._id}/profile`}>
        <PosterImage src={posterPicture} alt="" />
      </Link>
    </div>
  );
};

const PosterImage = styled.img`
  width: 40px;
  height: 40px;

  border: 2px double white;
  border-radius: 50%; // Set border-radius to 50% to create a circle
  object-fit: cover; // Add object-fit to maintain the aspect ratio
  object-position: center; // Add object-position to position the image correctly
  align-items: left;
`;

export default PosterImageLink;
