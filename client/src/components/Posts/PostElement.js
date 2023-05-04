import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import PostResponse from "../PostForm/PostResponse";
const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const PostElement = ({ post, frogs, updateSelectedFrogById, loggedFrog, addResponse }) => {
  const posterFilter = frogs.filter((posterFrog) => {
    if (post.poster === posterFrog._id) return posterFrog;
  });
  const postPoster = posterFilter.length ? posterFilter[0] : null;

  const receiverFilter = frogs.filter((receiverFrog) => {
    if (post.receiver === receiverFrog._id) return receiverFrog;
  });
  
  const postReceiver = receiverFilter.length ? receiverFilter[0] : null;

  const [posterName, posterPicture, posterId] = postPoster
    ? [postPoster.name, postPoster.image_url, postPoster._id]
    : [null, null, null];

  const [receiverName, receiverPicture, receiverId] = postReceiver
    ? [postReceiver.name, postReceiver.image_url, postReceiver._id]
    : [null, null, null];

  const handlePosterClick = () => {
    updateSelectedFrogById(posterId);
  };

  const handleReceiverClick = () => {
    updateSelectedFrogById(receiverId);
  };

  const displayPosterPicture = postPoster ? (
    <div onClick={handlePosterClick}>
      <Link to={`/${posterId}/profile`}>
        <PosterImage src={posterPicture} alt={`${posterName}'s picture`} />
      </Link>
    </div>
  ) : (
    <ExUserImage src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Red_X.svg" alt="deleted user picture placeholder" />
  );

  const displayPosterName = postPoster ? (
    <div onClick={handlePosterClick}>
      <PosterName>
        {" "}
        <Link to={`/${posterId}/profile`}>{posterName}</Link>
      </PosterName>
    </div>
  ) : (
    <PosterName>They played Frogger, and lost</PosterName>
  );

  const handleImageError = (e) => {
    e.target.style.border = "none";
  };

  const responses = post.responses.map((response) => {
    const commenterFilter = frogs.filter((commenterFrog) => {
      if (commenterFrog._id !== null && response.poster === commenterFrog._id) return commenterFrog;      
    });
    return (
      <>
    <CommentField>{response.comment}
     {commenterFilter[0] ? <CommentImage src={commenterFilter[0].image_url} alt="" onError={handleImageError} /> : <CommentImage src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Red_X.svg" alt="" />}
     </CommentField>
     </>
    )
  })

  const hideReceiver = () => {
    if (posterId === receiverId) {
      return "";
    } else {
      return (
        <>
          <div className="div2">
            {postReceiver ? (
              <div onClick={handleReceiverClick}>
                <ReceiverText>
                  {" "}
                  <StyledFontAwesomeIcon icon={faRightLong} />{" "}
                  {/* <Link to={`/${receiverId}/profile`}>{receiverName} </Link> */}
                </ReceiverText>
              </div>
            ) : (
              <div>
                {" "}
                <StyledFontAwesomeIcon icon={faRightLong} />{" "}
              </div>
            )}
          </div>
          <div className="div3">
            {postReceiver ? (
              <div onClick={handleReceiverClick}>
                <Link to={`/${receiverId}/profile`}>
                  {" "}
                  <ReceiverImage
                    src={receiverPicture}
                    alt={`${receiverName}'s picture`}
                  />
                </Link>
              </div>
            ) : (
              <ExUserImage src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Red_X.svg" alt="" />
            )}
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
            <div className="div1">{displayPosterPicture}</div>
            {/* <div className="div2">{displayPosterName}</div> */}
            {hideReceiver()}
          </CardPosterRecipientGrid>
          <DateText>
            <span>{dayjs(post.date).format("llll")}</span>
            <span>{dayjs(post.date).fromNow()}</span>
          </DateText>
        </PosterCard>
        <PostText>{post.comment.original}</PostText>
        {responses}
        {loggedFrog ? <PostResponse loggedFrog={loggedFrog} addResponse={addResponse} post={post}/> : null}
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PosterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding-left: 0.25%;
`;

const PosterImage = styled.img`
  width: 40px;
  height: 40px;

  border: 2px double white;
  border-radius: 50%; 
  object-fit: cover; 
  object-position: center; 
  align-items: left;
`;

const ReceiverImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: -10px;

  border: 2px double white;
  border-radius: 50%; 
  object-fit: cover; 
  object-position: center; 
  align-items: left;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const PosterName = styled.p`
  margin: 0 1rem; 
  margin-top: 1%;
`;

const ReceiverText = styled.p`
  font-size: 100%;

`;

const PostImage = styled.img`
  width: 100%; 
  border-radius: 4px;
  border: 2px double white;
  object-fit: cover;
  object-position: center;
  align-items: center;
  margin-bottom: 1%;

  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`;

const PostText = styled.p`
  align-items: center;
  align-self: flex-start;
  margin-left: 0.5%;

  @media (max-width: 768px) {
    margin-left: 2.5%;
  }
`;


const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem; 
`;

const DateText = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 75%;

  @media (max-width: 768px) {
      display: none;
  }
`;

const CardPosterRecipientGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 5px;
  grid-row-gap: 0px;
  margin-left: 0.5%;
  margin-top: 0.5%;
  align-items: center;

  a {
    color: inherit;
    text-decoration: none;
    &:visited {
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
    }
  }

  @media (max-width: 768px) {

    margin-left: 2.5%;
  }
`;

const CommentField = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    -webkit-box-align: center;
    align-items: center;
    justify-content: flex-end;
    background: white;
    margin-block: 0.5%;
    border: 2px double #84db2c;
    border-radius: 5px;
    padding-block: 5px;
    color: black;
    -webkit-text-stroke-width: 0px;

    @media (max-width: 768px) {
    padding-left: 5%;
  }

`

const CommentImage = styled.img`
  width: 40px;
  height: 40px;
  border: 2px double #84db2c;
  border-radius: 50%; 
  margin-left: 10px;
  margin-right: 5px;
`;

const ExUserImage = styled.img`
  width: 40px;
  height: 40px;
  border: 2px double white;
  border-radius: 50%; 
  margin-left: 10px;
  margin-right: 5px;
`

export default PostElement;
