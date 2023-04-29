const baseURL = "http://localhost:9000/api/posts/";

export const getPosts = () => {
  return fetch(baseURL).then((res) => res.json());
};