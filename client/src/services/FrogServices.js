const baseURL = "http://localhost:9000/api/frogs/";

export const getFrogs = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const postFrog = (payload) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      return {
        ...data,
        ...payload,
      };
    });
};

export const updateFrog = (id, payload) => {
  return fetch(baseURL + id, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteFrog = (id) => {
  return fetch(baseURL + id, {
    method: "DELETE",
  });
};
