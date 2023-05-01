import { useState } from 'react';
import styled from 'styled-components'

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
            }
        })
        setPostPicture("")
        setPostComment("")
    }

    return ( 
        <>
            <h2>Share your Froughts</h2>
            <PostFormStyled onSubmit={handleSubmitPost} >
                <label htmlFor='picture'>Post your picture: </label>
                <input 
                    type='text' 
                    id='picture' 
                    name='picture' 
                    value={postPicture} 
                    onChange={handlePictureChange} 
                    placeholder='Enter an image Url'
                />
                    <br/>
                <label htmlFor='comment'>What's hopping on your mind? </label><br/>
                <PostTextArea 
                    id='comment' 
                    name='comment' 
                    rows="4"
                    cols="50"
                    placeholder='Share your ribbits!'
                    value={postComment} 
                    onChange={handleCommentChange} 
                />
                <br/>
                {postPicture || postComment ? <button>Post</button> : null}
            </PostFormStyled>
        </>
     );
}
 
const PostFormStyled = styled.form`
    border: 2px solid black;
    text-align: center;
    padding: 10px;
    width: 33.33%;
    min-width: 300px;
    align-items: center;
`

const PostTextArea = styled.textarea`
    width: 95%;
    resize: horizontal;
`

export default PostForm;

