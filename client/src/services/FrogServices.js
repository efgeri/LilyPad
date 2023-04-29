const baseURL = 'http://localhost:9000/api/frogs/'

export const createFrog = (newFrog) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(newFrog),
        headers: { 'Content-Type': "application/json" }
    })
    .then(res => res.json())
    .then(data => {
        return {
        ...data,
        ...newFrog
        }
    })

}

