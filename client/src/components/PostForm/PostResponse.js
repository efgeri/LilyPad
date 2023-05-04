import { useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { updatePost } from "../../services/PostServices";

const PostResponse = ({ loggedFrog, addResponse, post }) => {
  const [postResponse, setPostResponse] = useState("");

  const handleResponseChange = (e) => {
    setPostResponse(e.target.value);
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    const newResponse = {
      comment: postResponse,
      poster: loggedFrog._id,
      date: dayjs().format(),
    };
    const responses = [...post.responses, newResponse];
    const payload = { responses };
    updatePost(post._id, payload).then(() => addResponse(post));
    setPostResponse("");
  };

  return (
    <>
      <PostAreaDiv>
        <PostTextAreaDiv>
          <StyledTitle>What's your comment on this?</StyledTitle>
        </PostTextAreaDiv>
        <PostFormStyled onSubmit={handleSubmitPost}>
          
          <br />
          <PostTextAreaDiv>
            <PostTextArea
              id="comment"
              name="comment"
              rows="2"
              cols="50"
              placeholder="Share your ribbits!"
              value={postResponse}
              onChange={handleResponseChange}
            />
          </PostTextAreaDiv>
          <StyledButton disabled={!postResponse}>Ribbit</StyledButton>
        </PostFormStyled>
      </PostAreaDiv>
    </>
  );
};

const PostAreaDiv = styled.div`
  border: 2px double white;
  border-radius: 5px;
  text-align: center;
  margin-top: 5%;
  padding-bottom: 2.5%;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: #84db2c;
  /* width: 90%; // Set the width to 90% of the parent container
  max-width: 100%; // Make sure it doesn't exceed 100% width */
`;

const PostTextAreaDiv = styled.div`
  display: flex;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 5.5%;
  }
`;

const StyledTitle = styled.h2`
  text-align: center;
  color: red;
  -webkit-text-stroke-width: 0.75px;
  -webkit-text-stroke-color: black;
`;

const PostFormStyled = styled.form``;
const InputWrapper = styled.div`
  width: 100%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 3.5%;
  }
`;

const PostTextArea = styled.textarea`
font-size: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  font-family: "Bungee", cursive;
  resize: none;
  margin-top: 1%;
  border: 2px solid black;
  border-radius: 2.5px;
`;

const StyledInput = styled.input`
  width: 100%;
  font-family: "Bungee", cursive;
  margin-top: 1%;
  border: 2px solid black;
  border-radius: 2.5px;
`;

const StyledButton = styled.button`
  background: white;
  font-family: "Bungee", cursive;
  color: black;
  border: 2px solid black;
  border-radius: 2.5px;
  margin: 5px;

  &:hover {
    background: red;
    cursor: pointer;
  }
`;

export default PostResponse;
