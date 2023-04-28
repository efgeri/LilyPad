import { useState } from 'react';
import styled from 'styled-components'

const PostForm = ({selectedFrog, loggedFrog, addPost}) => {

    const [postPicture, setPostPicture] = useState("")
    const [postComment, setPostComment] = useState("")

    const handleCommentChange = (e) => {
        setPostComment(e.target.value)
    }

    // const handlePictureUpload = (e) => {
    //     console.log(e);
    //     setPostPicture(e.target.file)
    // }

    const handlePictureChange = (e) => {
        setPostPicture(e.target.value)
    }

    const handleSubmitPost = (e) => {
        e.preventDefault()
        addPost({
            poster: loggedFrog,
            receiver: selectedFrog,
            image_url: postPicture,
            comment: {
                original: postComment
            }
        })
    }

    return ( 
        <>
            <h2>Post Form</h2>
            <form onSubmit={handleSubmitPost} >
                <label htmlFor='picture'></label>
                <input 
                    type='text' 
                    id='picture' 
                    name='picture' 
                    value={postPicture} 
                    onChange={handlePictureChange} 
                    placeholder='Enter an image Url'
                />
                    <br/>
                {/* <label htmlFor='picture'></label>
                <input 
                    type='file' 
                    id='picture' 
                    name='picture' 
                    value={postPicture} 
                    onChange={handlePictureUpload} />
                <br/> */}
                <label htmlFor='comment'></label>
                <textarea 
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
            </form>
        </>
     );
}
 
export default PostForm;

    // const [postData, setPostData] = useState({
    //     poster: "loggedFrog",
    //     receiver: "selectedFrog",
    //     image_url: "",
    //     comment: {
    //         original: ""
    //     }
    // }) 

    // const handlePostChange = (e) => {
    //     const newPost = {...postData}
    //     console.log(e)
    //     newPost[e.target.name] = e.target.value
    //     setPostData(newPost)
    // }