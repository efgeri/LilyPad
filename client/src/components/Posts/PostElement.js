import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const PostElement = ({ post, frogs }) => {
  const posterFilter = frogs.filter((posterFrog) => {
    if (post.poster === posterFrog._id) return posterFrog;
  });

  const receiverFilter = frogs.filter((receiverFrog) => {
    if (post.receiver === receiverFrog._id) return receiverFrog;
  });

  const posterName = posterFilter.length ? posterFilter[0].name : null;
  const posterPicture = posterFilter[0].image_url;
  const receiverName = receiverFilter.length ? receiverFilter[0].name : null;
  const receiverPicture = receiverFilter[0].image_url;

  const handleImageError = (e) => {
    e.target.style.border = "none";
  };

  const hideReceiver = () => {
    if (posterFilter[0]._id === receiverFilter[0]._id) {
      return "";
    } else {
      return (
        <>
          <div className="div3">
            {receiverName ? (
              <ReceiverText>
                {" "}
                <Link to={`${receiverFilter[0]._id}/profile`}>
                  {receiverName}{" "}
                </Link>
                <StyledFontAwesomeIcon icon={faRightLong} />{" "}
              </ReceiverText>
            ) : (
              <PosterName>User has hopped off for good</PosterName>
            )}
          </div>
          <div className="div4">
            <Link to={`${receiverFilter[0]._id}/profile`}>
              {" "}
              <ReceiverImage src={receiverPicture} alt="" />
            </Link>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <PostCard>
        {post.image_url ? (
          <PostImage src={post.image_url} alt="" onError={handleImageError} />
        ) : (
          <></>
        )}
        <PosterCard>
          <CardPosterRecipientGrid>
            <div className="div1">
              <Link to={`${posterFilter[0]._id}/profile`}>
                <PosterImage src={posterPicture} alt="" />
              </Link>
            </div>
            <div className="div2">
              {posterName ? (
                <PosterName>
                  {" "}
                  <Link to={`${posterFilter[0]._id}/profile`}>
                    {posterName}
                  </Link>
                </PosterName>
              ) : (
                <PosterName>They played Frogger, and lost</PosterName>
              )}
            </div>
            {hideReceiver()}
          </CardPosterRecipientGrid>
        </PosterCard>
        <PostText>{post.comment.original}</PostText>
        <DateText>
        <span>{dayjs(post.date).format("llll")}</span>
        <span>{dayjs(post.date).fromNow()}</span>
        </DateText>
      </PostCard>
    </>
  );
};

// #84db2c

const PostCard = styled.section`
  background-color: #84db2c;
  justify-content: center;
  color: white;
  display: flex;
  flex-direction: column;
  margin-block: 1rem;
  border-radius: 5px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  padding: 1rem;
  border: 2px double white;
  /* min-width: 60%;  */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PosterCard = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  padding-left: 0.25%;
`;

const PosterImage = styled.img`
  width: 40px;
  height: 40px;
  

  border: 2px double white;
  border-radius: 50%; // Set border-radius to 50% to create a circle
  object-fit: cover; // Add object-fit to maintain the aspect ratio
  object-position: center; // Add object-position to position the image correctly
  align-items: left;
`;

const ReceiverImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: -10px;

  border: 2px double white;
  border-radius: 50%; // Set border-radius to 50% to create a circle
  object-fit: cover; // Add object-fit to maintain the aspect ratio
  object-position: center; // Add object-position to position the image correctly
  align-items: left;

    @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const PosterName = styled.p`
  margin: 0 1rem; // Add some horizontal margin for spacing
  margin-top: 1%;
`;

const ReceiverText = styled.p`
  margin: 0 1rem; // Add some horizontal margin for spacing
  font-size: 75%;
  display: flex;
  flex-direction: row-reverse;
`;

const PostImage = styled.img`
  width: 100%; // Set the initial width to 100%
  border-radius: 4px;
  border: 2px double white;
  object-fit: cover;
  object-position: center;
  align-items: center;
`;

const PostText = styled.p`
  align-items: center;
  align-self: flex-start;
  padding-left: 0.25%;
`;

const PosterReceiver = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem; // Adjust the margin value to your desired spacing
`;

const DateText = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-end;
    font-size: 75%;
`

const CardPosterRecipientGrid = styled.div`
  display: grid;

  a {
    color: inherit;
    text-decoration: none;
    &:visited {
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
    }
  }

  .div1 {
    grid-area: 1 / 1 / 3 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .div3 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .div4 {
    grid-area: 1 / 3 / 3 / 4;
  }

  @media (max-width: 768px) {
    .div2 {
      display: none;
    }
    .div3 {
      display: none;
    }
  }
`;

export default PostElement;
