import { useState } from 'react';
import styled from 'styled-components'

const PostForm = ({selectedFrog, loggedFrog}) => {

    const [postData, setPostData] = useState({
        poster: "",
        receiver: "",
        image_url: "",
        comment: {
            original: ""
        }
    }) 

    const handlePostChange = (e) => {
        console.log(e)
    }

    return ( 
        <>
            <h2>Post Form</h2>
            <form>
                <label htmlFor='picture'></label>
                <input 
                    type='text' 
                    id='picture' 
                    name='picture' 
                    value={postData.image_url} 
                    onChange={handlePostChange} 
                    placeholder='Enter an image Url'
                    required
                />
                    <br/>
                {/* <label htmlFor='picture'></label>
                <input type='file' id='picture' name='picture' value={postData.image_url} onChange={handlePostChange} /> */}
                <label htmlFor='comment'></label>
                <input 
                    id='comment' 
                    name='comment' 
                    value={postData.comment.original} 
                    onChange={handlePostChange} 
                />
                <br/>
                <button>Post</button>
            </form>
        </>
     );
}
 
export default PostForm;