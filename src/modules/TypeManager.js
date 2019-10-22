const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/types/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/types`).then(result => result.json())
  }, 
  delete(id) {
    return fetch(`http://localhost:5002/types/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newType) {
    return fetch(`${remoteURL}/types`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newType)
    }).then(data => data.json())
},
update(editedType) {
  return fetch(`${remoteURL}/types/${editedType.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedType)
  }).then(data => data.json());
}
}