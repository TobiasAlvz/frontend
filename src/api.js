const API_URL = "http://localhost:3000"

export async function getUsers() {
  const res = await fetch(`${API_URL}/usuarios`)
  return res.json()
}

export async function createUser(user) {
  const res = await fetch(`${API_URL}/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })

  return res.json()
}

export async function deleteUser(id) {
  await fetch(`${API_URL}/usuarios/${id}`, {
    method: "DELETE"
  })
}