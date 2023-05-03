import { useState } from 'react';
import styled from 'styled-components'
import dayjs from 'dayjs';

const PostForm = ({selectedFrog, loggedFrog, addPost}) => {

    const [postPicture, setPostPicture] = useState("")
    const [postComment, setPostComment] = useState("")

    const handleCommentChange = (e) => {
        setPostComment(e.target.value)
    }

    const handlePictureChange = (e) => {
        setPostPicture(e.target.value)
    }

    const handleSubmitPost = (e) => {
        e.preventDefault()
        addPost({
            poster: loggedFrog._id,
            receiver: selectedFrog._id,
            image_url: postPicture,
            comment: {
                original: postComment 
            },
            "responses":[],
            "date": dayjs().format()
        })
        setPostPicture("")
        setPostComment("")
    }

    return ( 
        <>
        <PostAreaDiv>
        <PostTextAreaDiv>
             <StyledTitle>What are you ribbiting on about?</StyledTitle>
             </PostTextAreaDiv>
             <PostFormStyled onSubmit={handleSubmitPost}>
  <label htmlFor="comment">Croak into the void</label>
  <br />
  <PostTextAreaDiv>
    <PostTextArea
      id="comment"
      name="comment"
      rows="4"
      cols="50"
      placeholder="Share your ribbits!"
      value={postComment}
      onChange={handleCommentChange}
    />
  </PostTextAreaDiv>
  <br />
  <label htmlFor="picture">Post your picture </label>
  <InputWrapper>
    <StyledInput
      type="text"
      id="picture"
      name="picture"
      value={postPicture}
      onChange={handlePictureChange}
      placeholder="Enter an image Url"
    />
  </InputWrapper>
  <br />
  <StyledButton disabled={!postPicture && !postComment}>Ribbit</StyledButton>
</PostFormStyled>
        </PostAreaDiv>
        </>
     );
}

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
`

const PostTextAreaDiv = styled.div`
    display: flex;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
    margin-top: 5.5%;
}

`

const StyledTitle = styled.h2`
  text-align: center;
  color: red;
  -webkit-text-stroke-width: 0.75px;
  -webkit-text-stroke-color: black;
`

const PostFormStyled = styled.form`

`
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
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  font-family: "Bungee", cursive;
  resize: none;
  margin-top: 1%;
  border: 2px solid black;
  border-radius: 2.5px;
`

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

    &:hover {
    background: red;
    cursor: pointer;
    }
`


export default PostForm;

