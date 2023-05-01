const baseURL = "http://localhost:9000/api/posts/";

export const getPosts = () => {
  return fetch(baseURL).then((res) => res.json());
};
export const createPost = (originalPost) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(originalPost),
        headers: { 'Content-Type': 'application/json'}
    })
        .then(res => res.json())
        .then(data => {
            return {
                ...data,
                ...originalPost
                }
        })
}

export const likeComment = async (postId, likerId) => {
    const res = await fetch(`${baseURL}/posts/${postId}/like`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ liker_id: likerId }),
    });
    const data = await res.json();
    return data;
  };
  
  export const unlikeComment = async (postId, likerId) => {
    const res = await fetch(`${baseURL}/posts/${postId}/unlike`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ liker_id: likerId }),
    });
    const data = await res.json();
    return data;
  };
  
  