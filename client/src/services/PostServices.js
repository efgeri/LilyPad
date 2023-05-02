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

// Like a post
export const likePost = (postId, frogId) => {
    return fetch(`${baseURL}${postId}/like`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ frogId }),
    }).then((res) => res.json());
  };
  
  // Unlike a post
  export const unlikePost = (postId, frogId) => {
    return fetch(`${baseURL}${postId}/unlike`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ frogId }),
    }).then((res) => res.json());
  };
  