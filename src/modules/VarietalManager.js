const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/varietals/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/varietals`).then(result => result.json())
  }, 
  delete(id) {
    return fetch(`http://localhost:5002/varietals/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newVarietal) {
    return fetch(`${remoteURL}/varietals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newVarietal)
    }).then(data => data.json())
},
update(editedVarietal) {
  return fetch(`${remoteURL}/varietals/${editedVarietal.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedVarietal)
  }).then(data => data.json());
}
}