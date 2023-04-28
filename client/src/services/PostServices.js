const baseURL = "http://localhost:9000/api/posts"

export const createPost = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: payload,
        headers: { 'Content-Type': 'application/json'}
    })
        .then(res => res.json())
        .then(data => {
            return {
                ...data,
                ...payload
                }
        })
}