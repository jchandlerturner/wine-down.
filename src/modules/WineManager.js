const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/wines/${id}?_expand=type&_expand=varietal`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/wines?_expand=type&_expand=varietal`).then(result => result.json())
  }, 
  delete(id) {
    return fetch(`http://localhost:5002/wines/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newWine) {
    return fetch(`${remoteURL}/wines`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newWine)
    }).then(data => data.json())
},
update(editedWines) {
  return fetch(`${remoteURL}/wines/${editedWines.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedWines)
  }).then(data => data.json());
},
getUserWine(wines, userId) {
  return fetch(`${remoteURL}/${wines}?userId=${userId}&_expand=type&_expand=varietal`).then(result => result.json())
},

getRed(userId) {
  return fetch(`${remoteURL}/wines?typeId=1&userId=${userId}&_expand=varietal`).then(result => result.json())
},getWhite(userId) {
  return fetch(`${remoteURL}/wines?typeId=2&userId=${userId}&_expand=varietal`).then(result => result.json())
},getBubbles(userId) {
  return fetch(`${remoteURL}/wines?typeId=3&userId=${userId}&_expand=varietal`).then(result => result.json())
},getRose(userId) {
  return fetch(`${remoteURL}/wines?typeId=4&userId=${userId}&_expand=varietal`).then(result => result.json())
},
updateRating(editedWines) {
  return fetch(`${remoteURL}/wines/${editedWines.starRating}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedWines)
  }).then(data => data.json());
},
}